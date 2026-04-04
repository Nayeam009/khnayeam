const RASTER_IMAGE_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);

export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/svg+xml",
].join(",");

export const MAX_UPLOAD_BYTES = 10 * 1024 * 1024;
const MAX_IMAGE_DIMENSION = 1800;
const WEBP_QUALITY = 0.82;

const sanitizeFileName = (fileName: string) => {
  const extensionIndex = fileName.lastIndexOf(".");
  const hasExtension = extensionIndex > 0;
  const baseName = (hasExtension ? fileName.slice(0, extensionIndex) : fileName)
    .trim()
    .replace(/[^a-zA-Z0-9._-]/g, "_")
    .replace(/_+/g, "_")
    .replace(/^_+|_+$/g, "") || "image";
  const extension = hasExtension ? fileName.slice(extensionIndex).toLowerCase() : "";

  return `${baseName}${extension}`;
};

const getScaledDimensions = (width: number, height: number) => {
  const longestSide = Math.max(width, height);
  if (longestSide <= MAX_IMAGE_DIMENSION) {
    return { width, height };
  }

  const scale = MAX_IMAGE_DIMENSION / longestSide;
  return {
    width: Math.round(width * scale),
    height: Math.round(height * scale),
  };
};

const loadImageFromFile = (file: File) =>
  new Promise<{ image: HTMLImageElement; objectUrl: string }>((resolve, reject) => {
    const objectUrl = URL.createObjectURL(file);
    const image = new Image();

    image.onload = () => resolve({ image, objectUrl });
    image.onerror = () => {
      URL.revokeObjectURL(objectUrl);
      reject(new Error("Could not read the selected image."));
    };
    image.src = objectUrl;
  });

const canvasToBlob = (canvas: HTMLCanvasElement) =>
  new Promise<Blob | null>((resolve) => {
    canvas.toBlob(resolve, "image/webp", WEBP_QUALITY);
  });

export const prepareImageForUpload = async (file: File) => {
  if (!RASTER_IMAGE_TYPES.has(file.type)) {
    return file;
  }

  const { image, objectUrl } = await loadImageFromFile(file);

  try {
    const { width, height } = getScaledDimensions(image.naturalWidth, image.naturalHeight);
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;

    const context = canvas.getContext("2d");
    if (!context) {
      return file;
    }

    context.drawImage(image, 0, 0, width, height);
    const optimizedBlob = await canvasToBlob(canvas);

    if (!optimizedBlob || optimizedBlob.size >= file.size) {
      return file;
    }

    const optimizedName = sanitizeFileName(file.name).replace(/\.[^.]+$/, "") + ".webp";
    return new File([optimizedBlob], optimizedName, {
      type: "image/webp",
      lastModified: Date.now(),
    });
  } finally {
    URL.revokeObjectURL(objectUrl);
  }
};

export const buildStorageFilePath = (sectionKey: string, fileName: string) => {
  return `${sectionKey}/${Date.now()}-${sanitizeFileName(fileName)}`;
};

export const resolveUploadFieldPath = (fieldPath: string) => {
  return fieldPath.endsWith("imageKey") ? fieldPath.replace(/imageKey$/, "imageUrl") : fieldPath;
};
