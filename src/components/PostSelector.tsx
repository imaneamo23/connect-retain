import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, X } from "lucide-react";

interface Post {
  id: string;
  title: string;
}

interface PostSelectorProps {
  posts: Post[];
  selectedPost: string | null;
  onSelectPost: (postId: string | null) => void;
}

export function PostSelector({ posts, selectedPost, onSelectPost }: PostSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <Select value={selectedPost ?? "all"} onValueChange={(v) => onSelectPost(v === "all" ? null : v)}>
        <SelectTrigger className="w-[220px]">
          <div className="flex items-center gap-2">
            <FileText className="h-4 w-4 text-muted-foreground" />
            <SelectValue placeholder="All Posts" />
          </div>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Posts</SelectItem>
          {posts.map((post) => (
            <SelectItem key={post.id} value={post.id}>{post.title}</SelectItem>
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
