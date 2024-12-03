"use client"
import Image from "next/image"
import Link from "next/link";
import { useIsMobile } from "../_utils/hooks/useMobile";

function Logo() {
  const isMobile=useIsMobile();
  console.log(isMobile)
  return (
    <Link  href="/" className="flex justify-center items-center gap-4 z-10">
      <div className="relative !h-10 !w-10">
        
      <Image src="/logo.png" fill alt="The Seaside heaven logo" className="object-cover "/>
      </div>
      
        <span className="text-sm sm:text-xl font-semibold text-primary-100">
        {
          !isMobile?
          "The Seaside Heaven":""
        }
      </span>
      
    </Link>
  );
}

export default Logo;
