import Image from "next/image";
import Link from "next/link";
import { auth } from "../_lib/auth";

export default async function Navigation() {
  const session=await auth();
  // console.log(session)
  return (
    <nav className="z-10  text-sm sm:text-lg md:text-xl w-full">
      <ul className="flex gap-4 justify-end sm:gap-5  md:gap-8 lg:gap-12 xl:gap-16 sm:!px-0 items-center">
        <li>
          <Link href="/cabins" className="hover:text-accent-400 transition-colors">
            Cabins
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-accent-400 transition-colors">
            About
          </Link>
        </li>
        <li>
          {
            session?.user?.image?
            
          <Link
          href="/account"
          className="hover:text-accent-400 transition-colors flex justify-center items-center gap-2"
          >
            <div className="relative h-8 w-8" >
              
            <Image src={session?.user?.image} alt={session?.user?.name||"profile image"} fill className="rounded-full object-cover flex-1" 
            referrerPolicy="no-referrer"/>
            </div>
            <span>
              
            Guest area
            </span>
          </Link>
            :
            
          <Link
          href="/account"
          className="hover:text-accent-400 transition-colors"
          >
            Guest area
          </Link>
          }
        </li>
      </ul>
    </nav>
  );
}
