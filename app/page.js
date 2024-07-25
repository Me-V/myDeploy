import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="gap-6 flex flex-col items-center justify-center text-white h-[44vh]">

        <div className="font-bold text-5xl flex gap-3 justify-center items-center">
          Buy Me A Chai
          <span>
            <Image src="/giphy.gif" alt="Tea GIF" width={70} height={70} />
          </span>
        </div>
        <p>This is a Funding site</p>
        <div>
          <Link href="/Login">
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start Now</button>
          </Link>
          <Link href="/About">
            <button type="button" className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Read More</button>
          </Link>
        </div>
      </div>

      <div className="bg-white opacity-5 h-1"></div>

      <div className="text-white container mx-auto">
        <h1 className="text-3xl font-bold text-center my-14">Your Fans Can Buy You A Chai</h1>
        <div className="flex gap-5 justify-around">
          <div className="item space-y-3">
            <Image className="rounded-full p-2 text-black" width={160} height={160} src="/devguy3.gif" alt="Dev Guy" />
            <div className="font-bold text-white">Fund Yourself</div>
          </div>
          <div className="item space-y-3">
            <Image className="rounded-full p-2 text-black" width={160} height={160} src="/ZgRn.gif" alt="Dev Guy" />
            <div className="font-bold text-white">Fund Yourself</div>
          </div>
          <div className="item space-y-3">
            <Image className="rounded-full p-2 text-black" width={160} height={160} src="/6iyoBbdpT.gif" alt="Dev Guy" />
            <div className="font-bold text-white">Fund Yourself</div>
          </div>
        </div>
      </div>

      <div className="bg-white opacity-5 h-1"></div>

      <div className="text-white container mx-auto h-[60vh]">
        <h1 className="text-3xl font-bold text-center my-14">Your Fans Can Buy You A Chai</h1>
        <div className="flex flex-col justify-center items-center">
          <iframe width="560" height="315" src="https://www.youtube.com/embed/QtaorVNAwbI?si=pTVcAWlTowHNm8nw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
      </div>
    </>
  );
}
