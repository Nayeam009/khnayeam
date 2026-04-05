import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { useAllSiteContent, useUpdateSiteContent } from "@/hooks/useSiteContent";
import { supabase } from "@/integrations/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import { useToast } from "@/hooks/use-toast";
import {
  LogOut,
  Save,
  Loader2,
  Upload,
  Trash2,
  Plus,
  ChevronDown,
  ChevronRight,
  Settings,
  Home,
} from "lucide-react";
import {
  ACCEPTED_IMAGE_TYPES,
  MAX_UPLOAD_BYTES,
  buildStorageFilePath,
  prepareImageForUpload,
  resolveUploadFieldPath,
} from "@/lib/admin-image-upload";
import { isImageUrl } from "@/lib/storage-images";

const SECTION_LABELS: Record<string, string> = {
  hero: "🏠 Hero Section",
  about: "👤 About Me",
  education: "🎓 Education",
  experience: "💼 Experience & Projects",
  achievements: "🏆 Achievements",
  personal_info: "📋 Personal Info",
  references_section: "👥 References",
  research: "🔬 Research",
  stats: "📊 Statistics",
  contact: "📧 Contact",
  footer: "🔗 Footer",
};

const Admin = () => {
  const { user, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const { data: allContent, isLoading } = useAllSiteContent();
  const updateMutation = useUpdateSiteContent();
  const { toast } = useToast();
  const [editedSections, setEditedSections] = useState<Record<string, Record<string, unknown>>>({});
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({});
  const [uploadingField, setUploadingField] = useState<string | null>(null);
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate("/admin/login");
      return;
    }
    if (user) {
      supabase.rpc("has_role" as never, { _user_id: user.id, _role: "admin" } as never)
        .then(({ data }) => {
          setIsAdmin(!!data);
          if (!data) {
            toast({ title: "Access Denied", description: "You do not have admin privileges.", variant: "destructive" });
            navigate("/");
          }
        });
    }
  }, [user, authLoading, navigate, toast]);

  useEffect(() => {
    if (allContent) {
      const map: Record<string, Record<string, unknown>> = {};
      allContent.forEach((row) => {
        map[row.section_key] = row.content as Record<string, unknown>;
      });
      setEditedSections(map);
    }
  }, [allContent]);

  const toggleSection = (key: string) => {
    setExpandedSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = async (sectionKey: string) => {
    const content = editedSections[sectionKey];
    if (!content) return;
    try {
      await updateMutation.mutateAsync({ sectionKey, content });
      toast({ title: "Saved!", description: `${SECTION_LABELS[sectionKey] || sectionKey} updated successfully.` });
    } catch {
      toast({ title: "Error", description: "Failed to save changes.", variant: "destructive" });
    }
  };

  const updateField = (sectionKey: string, path: string, value: unknown) => {
    setEditedSections((prev) => {
      const section = { ...prev[sectionKey] };
      const keys = path.split(".");
      let obj: Record<string, unknown> = section;
      for (let i = 0; i < keys.length - 1; i++) {
        const k = keys[i];
        if (Array.isArray(obj[k])) {
          obj[k] = [...(obj[k] as unknown[])];
          obj = obj[k] as unknown as Record<string, unknown>;
        } else {
          obj[k] = { ...(obj[k] as Record<string, unknown>) };
          obj = obj[k] as Record<string, unknown>;
        }
      }
      obj[keys[keys.length - 1]] = value;
      return { ...prev, [sectionKey]: section };
    });
  };

  const handleImageUpload = async (sectionKey: string, fieldPath: string) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ACCEPTED_IMAGE_TYPES;
    input.onchange = async (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      const fieldId = `${sectionKey}.${fieldPath}`;
      setUploadingField(fieldId);

      try {
        const processedFile = await prepareImageForUpload(file);

        if (processedFile.size > MAX_UPLOAD_BYTES) {
          throw new Error("Please choose an image under 10MB.");
        }

        const fileName = buildStorageFilePath(sectionKey, processedFile.name);
        const { error } = await supabase.storage.from("portfolio-images").upload(fileName, processedFile, {
          cacheControl: "3600",
          upsert: true,
          contentType: processedFile.type,
        });

        if (error) throw error;

        const { data: urlData } = supabase.storage.from("portfolio-images").getPublicUrl(fileName);
        updateField(sectionKey, resolveUploadFieldPath(fieldPath), urlData.publicUrl);

        toast({
          title: "Image uploaded!",
          description:
            processedFile !== file
              ? "Image optimized and uploaded. Don’t forget to save the section."
              : "Don’t forget to save the section.",
        });
      } catch (error) {
        toast({
          title: "Upload failed",
          description: error instanceof Error ? error.message : "Failed to upload image.",
          variant: "destructive",
        });
      } finally {
        setUploadingField(null);
      }
    };
    input.click();
  };

  if (authLoading || isLoading) {
    return (
      <div className="min-h-screen bg-background p-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-20 w-full rounded-xl" />
          ))}
        </div>
      </div>
    );
  }

  if (!user) return null;

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-4xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
              <Settings className="text-primary" size={18} />
            </div>
            <div>
              <h1 className="text-lg font-bold font-serif text-foreground">Admin Panel</h1>
              <p className="text-xs text-muted-foreground">{user.email}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={() => navigate("/")} className="gap-1.5">
              <Home size={14} /> Portfolio
            </Button>
            <Button variant="outline" size="sm" onClick={signOut} className="gap-1.5">
              <LogOut size={14} /> Sign Out
            </Button>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 py-6 space-y-3">
        {Object.entries(editedSections)
          .sort(([a], [b]) => {
            const order = Object.keys(SECTION_LABELS);
            return order.indexOf(a) - order.indexOf(b);
          })
          .map(([sectionKey, content]) => (
            <div key={sectionKey} className="border border-border/50 rounded-xl bg-card overflow-hidden">
              <button
                onClick={() => toggleSection(sectionKey)}
                className="w-full flex items-center justify-between px-5 py-4 hover:bg-muted/30 transition-colors text-left"
              >
                <span className="font-semibold text-foreground">
                  {SECTION_LABELS[sectionKey] || sectionKey}
                </span>
                <div className="flex items-center gap-2">
                  <Button
                    size="sm"
                    variant="default"
                    className="gap-1.5 h-8"
                    disabled={updateMutation.isPending}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleSave(sectionKey);
                    }}
                  >
                    {updateMutation.isPending ? <Loader2 className="animate-spin" size={14} /> : <Save size={14} />}
                    Save
                  </Button>
                  {expandedSections[sectionKey] ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                </div>
              </button>

              {expandedSections[sectionKey] && (
                <div className="px-5 pb-5 space-y-4 border-t border-border/30">
                  <SectionFields
                    sectionKey={sectionKey}
                    content={content}
                    updateField={updateField}
                    handleImageUpload={handleImageUpload}
                    uploading={uploading}
                  />
                </div>
              )}
            </div>
          ))}
      </main>
    </div>
  );
};

const SectionFields = ({
  sectionKey,
  content,
  updateField,
  handleImageUpload,
  uploading,
  parentPath = "",
}: {
  sectionKey: string;
  content: unknown;
  updateField: (sectionKey: string, path: string, value: unknown) => void;
  handleImageUpload: (sectionKey: string, fieldPath: string) => void;
  uploading: boolean;
  parentPath?: string;
}) => {
  if (content === null || content === undefined) return null;

  if (Array.isArray(content)) {
    return (
      <div className="space-y-3 pl-3 border-l-2 border-primary/10">
        {content.map((item, idx) => (
          <div key={idx} className="space-y-2 bg-muted/20 rounded-lg p-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-muted-foreground">Item {idx + 1}</span>
              <Button
                variant="ghost"
                size="sm"
                className="h-7 text-destructive hover:text-destructive"
                onClick={() => {
                  const newArr = content.filter((_, i) => i !== idx);
                  updateField(sectionKey, parentPath, newArr);
                }}
              >
                <Trash2 size={12} />
              </Button>
            </div>
            <SectionFields
              sectionKey={sectionKey}
              content={item}
              updateField={updateField}
              handleImageUpload={handleImageUpload}
              uploading={uploading}
              parentPath={`${parentPath}.${idx}`}
            />
          </div>
        ))}
        <Button
          variant="outline"
          size="sm"
          className="gap-1.5"
          onClick={() => {
            const sample = content.length > 0
              ? typeof content[0] === "object" && content[0] !== null
                ? Object.fromEntries(Object.keys(content[0] as Record<string, unknown>).map((k) => [k, ""]))
                : ""
              : "";
            updateField(sectionKey, parentPath, [...content, sample]);
          }}
        >
          <Plus size={12} /> Add Item
        </Button>
      </div>
    );
  }

  if (typeof content === "object") {
    const objectContent = content as Record<string, unknown>;

    return (
      <div className="space-y-3">
        {Object.entries(objectContent).map(([key, value]) => {
          const fullPath = parentPath ? `${parentPath}.${key}` : key;
          const isImageField = key.toLowerCase().includes("image") || key.toLowerCase().includes("bgimage") || key.toLowerCase().includes("profile_image");
          const siblingImageUrl = key === "imageKey" && typeof objectContent.imageUrl === "string"
            ? objectContent.imageUrl
            : undefined;
          const imagePreviewSrc = isImageField
            ? isImageUrl(typeof value === "string" ? value : undefined)
              ? (value as string)
              : isImageUrl(siblingImageUrl)
                ? siblingImageUrl
                : undefined
            : undefined;

          if (typeof value === "string") {
            return (
              <div key={key} className="space-y-1.5">
                <Label className="text-xs font-medium capitalize">{key.replace(/_/g, " ")}</Label>
                <div className="flex gap-2">
                  {value.length > 80 ? (
                    <Textarea
                      value={value}
                      onChange={(e) => updateField(sectionKey, fullPath, e.target.value)}
                      className="text-sm min-h-[80px]"
                    />
                  ) : (
                    <Input
                      value={value}
                      onChange={(e) => updateField(sectionKey, fullPath, e.target.value)}
                      className="text-sm"
                    />
                  )}
                  {isImageField && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="shrink-0 gap-1"
                      disabled={uploading}
                      onClick={() => handleImageUpload(sectionKey, fullPath)}
                    >
                      <Upload size={12} /> Upload
                    </Button>
                  )}
                </div>
                {imagePreviewSrc && (
                  <img src={imagePreviewSrc} alt="" className="h-16 w-16 rounded-md object-cover border" />
                )}
              </div>
            );
          }

          if (typeof value === "number") {
            return (
              <div key={key} className="space-y-1.5">
                <Label className="text-xs font-medium capitalize">{key.replace(/_/g, " ")}</Label>
                <Input
                  type="number"
                  step="any"
                  value={value}
                  onChange={(e) => updateField(sectionKey, fullPath, parseFloat(e.target.value) || 0)}
                  className="text-sm"
                />
              </div>
            );
          }

          if (typeof value === "boolean") {
            return (
              <div key={key} className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={value}
                  onChange={(e) => updateField(sectionKey, fullPath, e.target.checked)}
                />
                <Label className="text-xs font-medium capitalize">{key.replace(/_/g, " ")}</Label>
              </div>
            );
          }

          if (Array.isArray(value) && value.every((v) => typeof v === "string")) {
            return (
              <div key={key} className="space-y-1.5">
                <Label className="text-xs font-medium capitalize">{key.replace(/_/g, " ")}</Label>
                <Textarea
                  value={(value as string[]).join("\n")}
                  onChange={(e) => updateField(sectionKey, fullPath, e.target.value.split("\n"))}
                  className="text-sm min-h-[60px]"
                  placeholder="One item per line"
                />
                <p className="text-[10px] text-muted-foreground">One item per line</p>
              </div>
            );
          }

          return (
            <div key={key} className="space-y-2">
              <Label className="text-xs font-semibold capitalize text-foreground">{key.replace(/_/g, " ")}</Label>
              <SectionFields
                sectionKey={sectionKey}
                content={value}
                updateField={updateField}
                handleImageUpload={handleImageUpload}
                uploading={uploading}
                parentPath={fullPath}
              />
            </div>
          );
        })}
      </div>
    );
  }

  return null;
};

export default Admin;
