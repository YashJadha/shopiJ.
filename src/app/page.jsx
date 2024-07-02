import Image from "next/image";
import { FaCartShopping } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import Link from "next/link";
import { GiAmpleDress } from "react-icons/gi";
import { TbMoodKid } from "react-icons/tb";
import { MdOutlineMan, MdTab } from "react-icons/md";
import { GiTravelDress } from "react-icons/gi";
import { FaBoxesPacking } from "react-icons/fa6";
import { BiSolidOffer } from "react-icons/bi";
import { MdOutlineDiscount } from "react-icons/md";
import { MdTableBar } from "react-icons/md";
import { GiLaptop } from "react-icons/gi";

export default function Home() {
  return (
    <section className='w-full h-screen overflow-y-hidden'>
      <menu className="w-full h-auto bg-slate-300 text-slate-700 px-5 py-1 flex items-center justify-between sticky top-0">
        <div className="flex items-center justify-between space-x-3 cursor-pointer rounded-lg ">
          <img src="https://cdn.shopify.com/s/files/1/0070/7032/files/trending-products_c8d0d15c-9afc-47e3-9ba2-f7bad0505b9b.png?v=1614559651"
            alt=""
            className="w-12 h-12 rounded-md "
            title="hii yash"
          />

          <span className="text-2xl font-bold font-mono tracking-widest animate-bounce" >J.Products</span>
        </div>
        <nav className=" flex space-x-2 gap-2 items-center justify-center  17px" style={{ listStyle: "none" }}>
          <li className="font-mono font-semibold text-xl cursor-pointer tracking-wide px-3 py-2 rounded-md transition duration-700 ease-in-out hover:bg-slate-700 hover:text-white ">Home</li>
          <li className="font-mono font-semibold text-xl cursor-pointer tracking-wide px-3 py-2 rounded-md transition duration-700 ease-in-out hover:bg-slate-700 hover:text-white">About</li>
          <li className="font-mono font-semibold text-xl cursor-pointer tracking-wide px-3 py-2 rounded-md transition duration-700 ease-in-out hover:bg-slate-700 hover:text-white">Services</li>
          <li className="font-mono font-semibold text-xl cursor-pointer tracking-wide px-3 py-2 rounded-md transition duration-700 ease-in-out hover:bg-slate-700 hover:text-white">Contact Us</li>
        </nav>

        <div className="flex items-center justify-between space-x-6 text-violet-800	">
          <FaCartShopping size={23} className="cursor-pointer" />
          <TbTruckDelivery size={23} className="cursor-pointer" />
        </div>
      </menu>
      <main className="w-full flex h-auto main">
        <div className="w-1/5 h-full bg-amber-100 text-slate-800 slider" style={{ listStyle: "none" }}>
          <li className="flex items-center gap-2 text-xl font-mono tracking-wider ml-2 cursor-pointer mt-5 border-b-2 border-slate-700 hover:bg-slate-700 hover:text-white hover:rounded-md p-2" >
            <GiAmpleDress size={23} />
            <a href="">Fashion</a>
          </li>
          <li className="flex items-center gap-2 text-xl font-mono tracking-wider ml-2 cursor-pointer mt-5 border-b-2 border-slate-700 hover:bg-slate-700 hover:text-white hover:rounded-md p-2" >
            <TbMoodKid size={23} />
            <a href="">kids</a>
          </li>
          <li className="flex items-center gap-2 text-xl font-mono tracking-wider ml-2 cursor-pointer mt-5 border-b-2 border-slate-700 hover:bg-slate-700 hover:text-white hover:rounded-md p-2" >
            <MdOutlineMan size={23} />
            <a href="">Men's</a>
          </li>
          <li className="flex items-center gap-2 text-xl font-mono tracking-wider ml-2 cursor-pointer mt-5 border-b-2 border-slate-700 hover:bg-slate-700 hover:text-white hover:rounded-md p-2" >
            <GiTravelDress size={23} />
            <a href="">Women's</a>
          </li>
          <li className="flex items-center gap-2 text-xl font-mono tracking-wider ml-2 cursor-pointer mt-5 border-b-2 border-slate-700 hover:bg-slate-700 hover:text-white hover:rounded-md p-2" >
            <FaBoxesPacking size={23} />
            <a href="">Sales</a>
          </li>
          <li className="flex items-center gap-2 text-xl font-mono tracking-wider ml-2 cursor-pointer mt-5 border-b-2 border-slate-700 hover:bg-slate-700 hover:text-white hover:rounded-md p-2" >
            <BiSolidOffer size={23} />
            <a href="">Offers</a>
          </li>
          <li className="flex items-center gap-2 text-xl font-mono tracking-wider ml-2 cursor-pointer mt-5 border-b-2 border-slate-700 hover:bg-slate-700 hover:text-white hover:rounded-md p-2" >
            <MdOutlineDiscount size={23} />
            <a href="">Discount</a>
          </li>
          <li className="flex items-center gap-2 text-xl font-mono tracking-wider ml-2 cursor-pointer mt-5 border-b-2 border-slate-700 hover:bg-slate-700 hover:text-white hover:rounded-md p-2" >
            <MdTableBar size={23} />
            <a href="">Furniture</a>
          </li>
          <li className="flex items-center gap-2 text-xl font-mono tracking-wider ml-2 cursor-pointer mt-5 border-b-2 border-slate-700 hover:bg-slate-700 hover:text-white hover:rounded-md p-2" >
            <GiLaptop size={23} />
            <a href="">Machine</a>
          </li>
        </div>
        <div className="w-full h-full bg-white text-black slider1">
          <div className="flex items-center justify-between bg-purple-400 px-3 py-2 text-slate-200 font-medium text-xl sticky top-0" style={{ listStyle: "none" }}>
            <li className="tracking-wider font-mono px-3 py-2 hover:bg-slate-700 hover:text-slate-100 hover:rounded-md">
              <Link href={'/'}>Laptop</Link>
            </li>
            <li className="tracking-wider font-mono px-3 py-2 hover:bg-slate-700 hover:text-slate-100 hover:rounded-md">
              <Link href={'/'}>Drones</Link>
            </li>
            <li className="tracking-wider font-mono px-3 py-2 hover:bg-slate-700 hover:text-slate-100 hover:rounded-md">
              <Link href={'/'}>Crocks</Link>
            </li>
            <li className="tracking-wider font-mono px-3 py-2 hover:bg-slate-700 hover:text-slate-100 hover:rounded-md">
              <Link href={'/'}>Mobiles</Link>
            </li>
            <li className="tracking-wider font-mono px-3 py-2 hover:bg-slate-700 hover:text-slate-100 hover:rounded-md">
              <Link href={'/'}>Smart-Watches</Link>
            </li>
            <li className="tracking-wider font-mono px-3 py-2 hover:bg-slate-700 hover:text-slate-100 hover:rounded-md">
              <Link href={'/'}>HeadPhones</Link>
            </li>
            <li className="tracking-wider font-mono px-3 py-2 hover:bg-slate-700 hover:text-slate-100 hover:rounded-md">
              <Link href={'/'}>Go-Pro</Link>
            </li>
            <li className="tracking-wider font-mono px-3 py-2 hover:bg-slate-700 hover:text-slate-100 hover:rounded-md">
              <Link href={'/'}>PC-Cabinet</Link>
            </li>
          </div>
          <div className="w-full">
            <div className="bgimage pt-3 flex justify-between">
              <div className="text-5xl w-1/4 leading-normal text-slate-200 font-bold tracking-widest font-serif ml-3 relative top-7 left-7" style={{ fontFamily: "cursive" }}>
                Every Purchase Will You Make Happy 😊
              </div>
              <div className=" text-6xl w-1/3 text-violet-900 font-bold font-serif tracking-widest relative mr-24 top-32">
                Exclusive Shopping from <span className="text-4xl font-semibold font-mono text-gray-300 tracking-widest underline cursor-pointer hover:text-slate-800 animate-bounce" title="j.products.com">www.j.products.com</span>
              </div>
            </div>
            <div className="bg-white text-4xl text-black font-normal font-mono">
              <div className="w-full flex items-center justify-between px-3 mt-3">
                <div className="flex items-center justify-around">
                  <div>

                  </div>
                </div>
                <div className="flex items-center justify-around">
                  <div>

                  </div>
                </div>
                <div className="flex items-center justify-around">
                  <div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}
