import Image from "next/image";
import Carousel from "@/app/ui//carousel/carousel";
import Scroller from "@/app/ui/scroller";
import Card from "../ui/card/card";

export default function Home() {
  return (
    <>
      <div>
        <div>
          <h1 className={"text-cyan-800 font-black text-5xl"}>Minuit Spence</h1>
          <p className={"text-slate-200 text-sm "}>
            Discover my projects and get in touch!
          </p>
          <Image
            src="/headshot.jpeg"
            alt="Profile Picture"
            width={150}
            height={150}
            className=""
          />
        </div>

        <div className={"container mx-auto p-4"}>
          <div>
            <h2 className={"text-cyan-800 font-black text-3xl"}>Who I am</h2>
            <p className={"text-slate-200 text-sm "}>
              Web developer specializing in front end development. Open to try
              out new technologies and learn new skills. Currently working as a
              freelance developer open to collaborate with other teams. Drop me
              a line lets connect and build something fun.
            </p>
          </div>
        </div>

        <div>
          {/*Tools used */}
          <Scroller />
        </div>

        <div>
          {/* Add project cards here*/}
          <Card />
        </div>
      </div>
    </>
  );
}
