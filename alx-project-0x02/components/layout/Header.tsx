import Link from "next/link";

export default function  Header() {
  return (
    <header style={{ padding: "10px", background: "#eee"}}>
      <nav>
        <Link href="/home" style={{ marginRight: "15p"}}>Home</Link>
        <Link href="/about">About</Link>
      </nav>
    </header>
  )
}