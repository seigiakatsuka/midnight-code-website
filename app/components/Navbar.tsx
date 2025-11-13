import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="nav_container flex justify-between items-center p-2">
      <div className=" nav_logo flex items-center gap-2 ">
        <Image src="/logo.png" alt="Logo" width={50} height={50} />
        <Link className=" logo_brand text-slate-200 font-black" href="/">
          Midnight Code
        </Link>
      </div>

      <div className="nav_menu text-slate-200  flex gap-4 text-slate-light">
        <Link href="/">Home</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </div>
  );
}
