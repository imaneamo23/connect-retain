import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FileText, X } from "lucide-react";

interface Post {
  id: string;
  title: string;
  caption: string;
  coverUrl: string;
}

interface PostSelectorProps {
  posts: Post[];
  selectedPost: string | null;
  onSelectPost: (postId: string | null) => void;
}

export function PostSelector({ posts, selectedPost, onSelectPost }: PostSelectorProps) {
  const selected = posts.find((p) => p.id === selectedPost);

  return (
    <div className="flex items-center gap-2">
      <Select value={selectedPost ?? "all"} onValueChange={(v) => onSelectPost(v === "all" ? null : v)}>
        <SelectTrigger className="w-[280px]">
          <div className="flex items-center gap-2 overflow-hidden">
            {selected ? (
              <>
                <img
                  src={selected.coverUrl}
                  alt=""
                  className="h-6 w-6 rounded object-cover shrink-0"
                />
                <span className="truncate text-sm">{selected.caption.slice(0, 40)}{selected.caption.length > 40 ? "…" : ""}</span>
              </>
            ) : (
              <>
                <FileText className="h-4 w-4 text-muted-foreground shrink-0" />
                <span className="text-sm">All Posts</span>
              </>
            )}
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <span>All Posts</span>
            </div>
          </SelectItem>
          {posts.map((post) => (
            <SelectItem key={post.id} value={post.id}>
              <div className="flex items-center gap-3 py-1">
                <img
                  src={post.coverUrl}
                  alt=""
                  className="h-8 w-8 rounded object-cover shrink-0"
                />
                <div className="min-w-0">
                  <p className="text-sm font-medium truncate">{post.title}</p>
                  <p className="text-xs text-muted-foreground truncate max-w-[200px]">
                    {post.caption.slice(0, 50)}{post.caption.length > 50 ? "…" : ""}
                  </p>
                </div>
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {selectedPost && (
        <Button variant="ghost" size="icon" className="h-8 w-8" onClick={() => onSelectPost(null)}>
          <X className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
}
