import { type PostProps } from "@/interfaces";

export default function PostCard({ title, content, userId }: PostProps) {
  return (
    <div className="border p-4 rounded-lg shadow-sm bg-white mb-4">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="mt-2 text-gray-700">{content}</p>
      <p className="mt-3 text-sm text-gray-500">User ID: {userId}</p>
    </div>
  );
}
