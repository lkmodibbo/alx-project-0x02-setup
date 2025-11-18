import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import PostCard from "@/components/common/PostCard";

interface ApiPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export default function PostsPage() {
  const [posts, setPosts] = useState<ApiPost[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await response.json();
      setPosts(data.slice(0, 10)); // Display first 10 posts
    }

    fetchPosts();
  }, []);

  return (
    <main>
      <Header />

      <div className="p-6">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>

        {posts.map((post) => (
          <PostCard
            key={post.id}
            title={post.title}
            content={post.body}
            userId={post.userId}
          />
        ))}
      </div>
    </main>
  );
}
