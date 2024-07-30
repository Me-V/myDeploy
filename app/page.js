import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    // <>
    //   <div className="gap-6 flex flex-col items-center justify-center text-white h-[44vh] md:h-[60vh] lg:h-[80vh] p-4">

    //     <div className="font-bold text-3xl md:text-5xl flex gap-3 justify-center items-center text-center">
    //       Buy Me A Chai
    //       <span>
    //         <Image src="/giphy.gif" alt="Tea GIF" width={50} height={50} className="w-10 h-10 md:w-16 md:h-16" />
    //       </span>
    //     </div>
    //     <p className="text-center text-sm md:text-base">This is a Funding site</p>
    //     <div className="flex flex-col md:flex-row gap-4 mt-4">
    //       <Link href="/Login">
    //         <button type="button" className="w-full md:w-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm md:text-base px-5 py-2.5 text-center me-2 mb-2">
    //           Start Now
    //         </button>
    //       </Link>
    //       <Link href="/About">
    //         <button type="button" className="w-full md:w-auto text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm md:text-base px-5 py-2.5 text-center me-2 mb-2">
    //           Read More
    //         </button>
    //       </Link>
    //     </div>
    //   </div>

    //   <div className="bg-white opacity-5 h-1 mx-4 md:mx-8"></div>

    //   <div className="text-white container mx-auto p-4">
    //     <h1 className="text-2xl md:text-3xl font-bold text-center my-14">Your Fans Can Buy You A Chai</h1>
    //     <div className="flex flex-wrap gap-5 justify-center">
    //       <div className="item space-y-3 flex flex-col items-center">
    //         <Image className="rounded-full p-2 text-black" width={160} height={160} src="/devguy3.gif" alt="Dev Guy" />
    //         <div className="font-bold text-white text-center">Fund Yourself</div>
    //       </div>
    //       <div className="item space-y-3 flex flex-col items-center">
    //         <Image className="rounded-full p-2 text-black" width={160} height={160} src="/ZgRn.gif" alt="Dev Guy" />
    //         <div className="font-bold text-white text-center">Fund Yourself</div>
    //       </div>
    //       <div className="item space-y-3 flex flex-col items-center">
    //         <Image className="rounded-full p-2 text-black" width={160} height={160} src="/6iyoBbdpT.gif" alt="Dev Guy" />
    //         <div className="font-bold text-white text-center">Fund Yourself</div>
    //       </div>
    //     </div>
    //   </div>

    //   <div className="bg-white opacity-5 h-1 mx-4 md:mx-8"></div>

    //   <div className="text-white container mx-auto h-[60vh] p-4">
    //     <h1 className="text-2xl md:text-3xl font-bold text-center my-14">Your Fans Can Buy You A Chai</h1>
    //     <div className="flex-col flex justify-center items-center md:w-auto">
    //       <iframe width="20%" height="315" src="https://www.youtube.com/embed/QtaorVNAwbI?si=pTVcAWlTowHNm8nw" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen className="max-w-full"></iframe>
    //     </div>
    //   </div>
    // </>

    <>
      <div
        className="hero min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-white sm:text-6xl">
              Support Your Favourite Creators
            </h1>
            <p className="mb-5 text-white sm:text-lg">
              Where Creators Thrive: Passion Meets Support
            </p>
            <div className="flex justify-center gap-4 mt-4">
              <Link href="/Login">
                <button className="btn btn-primary mx-5 sm:mx-10">
                  Get Started
                </button>
              </Link>
              <Link href="/About">
                <button className="btn btn-primary mx-5 sm:mx-10">
                  About
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
