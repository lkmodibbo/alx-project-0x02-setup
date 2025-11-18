import Card from "@/components/common/Card";

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Welcome to the Home Page</h1>

      <Card
        title="Card 1"
        content="This is the first card content. It can hold any text."
      />
      <Card
        title="Card 2"
        content="This is the second card content. You can reuse the same component."
      />
      <Card
        title="Card 3"
        content="Cards are reusable components. Just pass different props."
      />
    </div>
  );
}
