"use client"
import Image from "next/image";
import Link from "next/link";

const navItemsLink = [["BUSINESS SOLUTIONS","#"],["PRESS","#"],["CAREERS","career"],["ABOUT US","about"],["BLOG","blog"],["CONTACT US","contact"],["TRUST & SAFETY","#"]];

function Navbar() {
  return (
    <div className="fixed w-screen shadow-md flex justify-center h-20 items-center max-sm:justify-start max-sm:flex-col max-sm:min-h-screen text-base bg-white font-medium text-black font-sans max-lg:text-sm">
      <Link className="max-sm:hidden" href={'/home'}>
          <Image width={160} height={100} src={"https://upload.wikimedia.org/wikipedia/commons/7/71/PhonePe_Logo.svg"} alt="logo"></Image>
      </Link>
        
      <div className="flex justify-around w-[70%] max-sm:pr-0 pr-5 max-sm:flex-col max-sm:justify-around max-sm:gap-2">
      <Link className="sm:hidden mt-10 hover:text-blue-800 max-sm:text-center max-sm:p-2 max-sm:bg-blue-300 max-sm:w-full" href={'/home'}>
            Home
        </Link>
        {
            navItemsLink.map((el,i)=><Link className="hover:text-blue-800 max-sm:p-2 max-sm:text-center max-sm:bg-blue-300 max-sm:w-full" href={el[1]} key={el+i}>{el[0]}</Link>)
        }
      </div>
    </div>
  );
}

export default Navbar;
