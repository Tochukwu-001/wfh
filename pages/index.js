import Image from "next/image";
import Head from "next/head";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";


export default function Home() {
  return (
    <>
      <Head>
        <title>WFH | fashion for men</title>
      </Head>
      <main className="h-screen">
      {/* Desktop view */}
      <div className="w-full h-full hidden lg:flex justify-center items-center">
        <div className="w-full h-full flex justify-center items-center bg-[#F7F6BB]/50">
          <div className="md:w-[600px] flex flex-col gap-7 justify-center items-center">
            <h1 className="text-6xl text-center">Explore our curated collection of stylish clothing designed to elevate your wardrobe</h1>
            <Link className="flex items-center gap-3 text-3xl rounded-md bg-[#114232] text-white px-10 py-3 hover:bg-white hover:text-[#114232] hover:border hover:border-[#114232]" href="#">
              <span>Get Started</span>
              <FaArrowRight/>
            </Link>
          </div>
        </div>
      </div>

      {/* Mobile view */}

      <div className="w-full h-full lg:hidden flex justify-center items-center bg-mobile">
        <div className="w-full h-full flex justify-center items-center bg-[#F7F6BB]/50">
          <div className="md:w-[600px] w-full flex flex-col gap-7 justify-center items-center px-5">
            <h1 className="lg:text-6xl text-4xl text-center">Explore our curated collection of stylish clothing designed to elevate your wardrobe</h1>
            <Link className="flex justify-center items-center gap-3 text-3xl rounded-md bg-[#114232] text-white w-full md:w-[300px] px-10 py-3 hover:bg-white hover:text-[#114232] hover:border" href="#">
              <span>Get Started</span>
              <FaArrowRight/>
            </Link>
          </div>
        </div>
      </div>
      </main>
    </>
  );
}
