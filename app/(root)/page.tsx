import Image from "next/image";
import {ProjectCard} from "@/app/ui/projects/projectCard";


export default function Home() {
  return (
    <>
      <div>
        <section id="hero" className="w-[1653px] h-[906px] bg-gradient-to-b from-black/0 to-black/80 border border-black">
          <div className="justify-start text-white text-8xl font-normal font-['Satoshi_Variable'] leading-[132px]">
            <span className="italic"> M./SPENCE </span>
          </div>
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
        </section>

        <section className="container mx-auto p-4">
          <div>
            <h2 className="text-cyan-800 font-black text-3xl">Who I am</h2>
            <p className="text-slate-200 text-sm">
              Web developer specializing in front end development. Open to try
              out new technologies and learn new skills. Currently working as a
              freelance developer open to collaborate with other teams. Drop me
              a line lets connect and build something fun.
            </p>
          </div>
        </section>

        <div>{/*Tools used */}</div>

        <div>
          {/* Add project cards here*/}
          <ProjectCard />
        </div>
      </div>
    </>
  );
}
