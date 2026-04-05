import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePages } from "@/contexts/PagesContext";
import { Loader2, Plus } from "lucide-react";

interface AddPageDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function AddPageDialog({ open, onOpenChange }: AddPageDialogProps) {
  const { addPage } = usePages();
  const [url, setUrl] = useState("");
  const [name, setName] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim() || !name.trim()) return;
    setSubmitting(true);
    const success = await addPage(url.trim(), name.trim());
    setSubmitting(false);
    if (success) {
      setUrl("");
      setName("");
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add a New Page</DialogTitle>
          <DialogDescription>Enter the social media page URL and a display name.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 mt-2">
          <div className="space-y-2">
            <Label htmlFor="page-name">Page Name</Label>
            <Input
              id="page-name"
              placeholder="e.g. My Brand Instagram"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled={submitting}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="page-url">Page URL</Label>
            <Input
              id="page-url"
              placeholder="https://instagram.com/mybrand"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              disabled={submitting}
            />
          </div>
          <Button type="submit" className="w-full gap-2" disabled={submitting || !url.trim() || !name.trim()}>
            {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Plus className="h-4 w-4" />}
            {submitting ? "Adding…" : "Add Page"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
