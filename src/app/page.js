import Link from "next/link";

export default function Home() {
  return (
    <div>
      안녕
      <Link href={"/list"}>리스트</Link>
    </div>
  );
}
