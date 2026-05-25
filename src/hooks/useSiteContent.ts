import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export function useSiteContent<T = Record<string, unknown>>(sectionKey: string) {
  return useQuery({
    queryKey: ["site-content", sectionKey],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_content")
        .select("content")
        .eq("section_key", sectionKey)
        .maybeSingle();
      if (error) throw error;
      return (data?.content as T) ?? null;
    },
    staleTime: 1000 * 60 * 5,
  });
}

export function useUpdateSiteContent() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: async ({
      sectionKey,
      content,
    }: {
      sectionKey: string;
      content: Record<string, unknown>;
    }) => {
      const { error } = await supabase
        .from("site_content")
        .update({ content: content as unknown as Record<string, never>, updated_at: new Date().toISOString() })
        .eq("section_key", sectionKey);
      if (error) throw error;
    },
    onSuccess: (_, vars) => {
      qc.invalidateQueries({ queryKey: ["site-content", vars.sectionKey] });
      qc.invalidateQueries({ queryKey: ["site-content-all"] });
    },
  });
}

export function useAllSiteContent() {
  return useQuery({
    queryKey: ["site-content-all"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("site_content")
        .select("*")
        .order("section_key");
      if (error) throw error;
      return data;
    },
  });
}
