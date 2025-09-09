import Image from "next/image";
import Link from "../../node_modules/next/link";

export default function Home() {
  return (
    <>
      <h1 className="mx-2">Dashboard</h1>
      <Link href={'/user'}>User Managment</Link>
    </>
  );
}
