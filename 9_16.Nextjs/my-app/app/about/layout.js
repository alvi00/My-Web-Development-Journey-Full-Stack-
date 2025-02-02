import Link from "next/link";
import Button from "@/app/components/Button";
export default function Aboutlayout({ children }) {
  return (
    <main>
      <nav className="mb-5 mt-5">
        <Link href="/about/mission">Mission</Link> |{" "}
        <Link href="/about/vission">Vission</Link> |{" "}
        <Link href="/about/button">
          <Button />
        </Link>
      </nav>
      {children}
    </main>
  );
}
