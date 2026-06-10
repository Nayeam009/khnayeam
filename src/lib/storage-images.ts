const SUPABASE_PUBLIC_SEGMENT = "/storage/v1/object/public/";
const SUPABASE_RENDER_SEGMENT = "/storage/v1/render/image/public/";
const URL_PREFIX_RE = /^(https?:)?\/\//i;

export const isImageUrl = (value?: string | null) => {
  if (!value) return false;
  return URL_PREFIX_RE.test(value) || value.startsWith("data:") || value.startsWith("blob:");
};

export const resolveCmsImageSource = ({
  primary,
  fallbackKey,
  fallbackMap,
  fallbackSrc,
}: {
  primary?: string | null;
  fallbackKey?: string | null;
  fallbackMap?: Record<string, string>;
  fallbackSrc: string;
}) => {
  const normalizedPrimary = primary?.trim();
  if (normalizedPrimary && isImageUrl(normalizedPrimary)) {
    return normalizedPrimary;
  }

  const normalizedFallbackKey = fallbackKey?.trim();
  if (normalizedFallbackKey && isImageUrl(normalizedFallbackKey)) {
    return normalizedFallbackKey;
  }

  if (normalizedFallbackKey && fallbackMap?.[normalizedFallbackKey]) {
    return fallbackMap[normalizedFallbackKey];
  }

  return fallbackSrc;
};

export const getOptimizedStorageUrl = (
  src: string,
  options: { width?: number; quality?: number } = {},
) => {
  // Supabase Image Transformation requires a paid plan (Pro tier or above).
  // Returning the original source URL directly to prevent 403 Forbidden errors on free tier.
  return src;

  /*
  if (!src || !src.includes(SUPABASE_PUBLIC_SEGMENT) || src.includes(SUPABASE_RENDER_SEGMENT)) {
    return src;
  }

  const lowerSrc = src.toLowerCase();
  if (lowerSrc.includes(".svg") || lowerSrc.includes(".gif")) {
    return src;
  }

  const [baseUrl, existingQuery = ""] = src.split("?");
  const params = new URLSearchParams(existingQuery);

  if (options.width) {
    params.set("width", String(Math.round(options.width)));
  }

  if (options.quality) {
    params.set("quality", String(options.quality));
  }

  const optimizedBaseUrl = baseUrl.replace(SUPABASE_PUBLIC_SEGMENT, SUPABASE_RENDER_SEGMENT);
  const query = params.toString();

  return query ? `${optimizedBaseUrl}?${query}` : optimizedBaseUrl;
  */
};
