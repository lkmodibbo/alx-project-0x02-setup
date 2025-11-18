import { type UserProps } from "@/interfaces";

export default function UserCard({ name, email, address }: UserProps) {
  return (
    <div className="border p-4 rounded-lg shadow-sm bg-white mb-4">
      <h2 className="text-xl font-semibold">{name}</h2>
      <p className="text-gray-700 mt-1">{email}</p>
      <p className="text-gray-600 mt-2 text-sm">{address}</p>
    </div>
  );
}
