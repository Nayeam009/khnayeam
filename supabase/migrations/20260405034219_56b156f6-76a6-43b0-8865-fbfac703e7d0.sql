
-- 1. Create role enum
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

-- 2. Create user_roles table
CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);

-- 3. Enable RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- 4. RLS: only the user themselves can read their own roles
CREATE POLICY "Users can read own roles"
  ON public.user_roles
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

-- 5. Security definer function
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1
    FROM public.user_roles
    WHERE user_id = _user_id
      AND role = _role
  )
$$;

-- 6. Insert admin role for the primary admin user
INSERT INTO public.user_roles (user_id, role)
SELECT id, 'admin'::app_role
FROM auth.users
WHERE email = 'khnayeam009@gmail.com'
ON CONFLICT DO NOTHING;

-- 7. Update site_content RLS: restrict INSERT/UPDATE to admins only
DROP POLICY IF EXISTS "Authenticated users can insert site content" ON public.site_content;
DROP POLICY IF EXISTS "Authenticated users can update site content" ON public.site_content;

CREATE POLICY "Admins can insert site content"
  ON public.site_content
  FOR INSERT
  TO authenticated
  WITH CHECK (public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can update site content"
  ON public.site_content
  FOR UPDATE
  TO authenticated
  USING (public.has_role(auth.uid(), 'admin'))
  WITH CHECK (public.has_role(auth.uid(), 'admin'));
