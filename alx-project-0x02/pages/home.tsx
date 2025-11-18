import { useState } from "react";
import Card from "@/components/common/Card";
import PostModal from "@/components/common/PostModal";
import { type CardProps } from "@/interfaces";

export default function HomePage() {
  const [posts, setPosts] = useState<CardProps[]>([
    { title: "Card 1", content: "This is the first card content." },
    { title: "Card 2", content: "This is the second card content." },
  ]);

  const handleAddPost = (post: CardProps) => {
    setPosts((prev) => [post, ...prev]);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>

      <PostModal onAddPost={handleAddPost} />

      <div className="mt-4">
        {posts.map((post, index) => (
          <Card key={index} title={post.title} content={post.content} />
        ))}
      </div>
    </div>
  );
}
