"use client"
import Image from "next/image"
import Link from "next/link";
import { useIsMobile } from "../_utils/hooks/useMobile";

function Logo() {
  const isMobile=useIsMobile();
  console.log(isMobile)
  return (
    <Link  href="/" className="flex justify-start items-center gap-4 sm:gap-2 z-10 min-w-[40%]">
      <div className="relative !h-10 !w-10">
        
      <Image src="/logo.png" fill alt="The Seaside heaven logo" className="object-cover "/>
      </div>
      
        <span className="text-sm sm:text-lg md:text-xl font-semibold text-primary-100">
        {
          !isMobile?
          "The Seaside Heaven":""
        }
      </span>
      
    </Link>
  );
}

export default Logo;
