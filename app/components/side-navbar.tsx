import Image from "next/image";

export default function sideNavbar() {
  return (
    <>
      <div>
        <nav>
          <header>
            <div>
              <Image src="/logo.png" alt="logo" height={50} width={50} />
            </div>
          </header>
        </nav>
      </div>
    </>
  );
}
