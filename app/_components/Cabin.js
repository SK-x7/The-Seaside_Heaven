import TextExpander from "@/app/_components/TextExpander";
import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
function Cabin({cabin}) {
    const {name,image,description,maxCapacity}=cabin;
    return (
        <div className="grid grid-cols-[3fr_4fr] px-1 sm:grid-cols-[3fr_4fr] gap-2 sm:gap-20 border border-primary-800 py-3 sm:px-10 mb-24 !w-full">
        <div className="relative scale-[1.10] sm:scale-[1.15] -translate-x-3 bg-red-500">
            
          <Image fill className="flex-1 object-cover" src={image} alt={`Cabin ${name}`} />
        </div>

        <div className=" !w-full">
          <h3 className="text-accent-100 font-black text-3xl sm:text-7xl mb-5 translate-x-[-115px] sm:translate-x-[-254px] bg-primary-950  p-6 pb-1 sm:w-[150%] w-[100%]">
            Cabin{name}
          </h3>

          <p className=" text-lg text-primary-300 mb-10 w-full">
            <TextExpander>
              
            {description}
            </TextExpander>
            </p>

          <ul className="flex flex-col gap-4 mb-7">
            <li className="flex gap-3 items-center">
              <UsersIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                For up to <span className="font-bold">{maxCapacity}</span>{" "}
                guests
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <MapPinIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Located in the heart of the{" "}
                <span className="font-bold">Dolomites</span> (Italy)
              </span>
            </li>
            <li className="flex gap-3 items-center">
              <EyeSlashIcon className="h-5 w-5 text-primary-600" />
              <span className="text-lg">
                Privacy <span className="font-bold">100%</span> guaranteed
              </span>
            </li>
          </ul>
        </div>
      </div>
    )
}

export default Cabin
