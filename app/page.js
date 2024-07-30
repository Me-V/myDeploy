import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
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
            {/* Text visible only on small screens (e.g., iPhone SE, iPhone 14 Pro Max) */}
            <h2 className="hidden sm:block md:hidden mb-5 text-4xl font-extrabold text-gradient bg-clip-text text-transparent sm:text-5xl">
              Get Me A Chai
            </h2>

            {/* Existing Heading */}
            <h1 className="mb-5 text-5xl font-extrabold text-white sm:text-6xl">
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
