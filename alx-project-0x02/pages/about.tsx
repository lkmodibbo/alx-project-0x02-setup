import Button from "@/components/common/Button";

export default function AboutPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">About Page</h1>

      <div className="flex gap-4">
        <Button size="small" label="Small Button" shape="rounded-sm" />
        <Button size="medium" label="Medium Button" shape="rounded-md" />
        <Button size="large" label="Large Button" shape="rounded-full" />
      </div>
    </div>
  );
}
