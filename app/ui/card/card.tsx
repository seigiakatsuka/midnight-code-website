import Image from "next/image";

export default function Card() {
  return (
    <>
      <div className="px-6 py-8 bg-stone-200/30 rounded-[32px] outline outline-1 outline-offset-[-1px] outline-white/20 inline-flex flex-col justify-start items-start gap-2">
        <Image
          className="rounded"
          src=""
          alt="picture of project"
          width={96}
          height={96}
        />
        <div className="flex flex-col justify-center items-start gap-2.5">
          <div className="justify-start text-white text-5xl font-bold font-['Satoshi_Variable'] leading-[50.40px]">
            Creative Counseling
          </div>
          <div className="self-stretch h-32 justify-start text-white text-base font-normal font-['Satoshi_Variable'] leading-tight">
            Redesigned website and fixed broken links increasing conversion rate
            and improved user experience.
          </div>
        </div>
        <div
          data-property-1="Default"
          className="p-2 bg-cyan-300/20 rounded-[3px] inline-flex justify-center items-center gap-2"
        >
          <button className="text-center justify-start text-white text-xl font-normal font-['SF_Pro']">
            <a
              href="https://creative-counseling.net"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Site 􀮵
            </a>
          </button>
        </div>
      </div>
    </>
  );
}
