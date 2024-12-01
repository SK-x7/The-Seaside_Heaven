"use client"
import { useState } from "react";
import { updateGuestAction} from "../_lib/actions";
import { useFormStatus} from "react-dom";
import SubmitButton from "./SubmitButton";
import Image from "next/image";
// import SelectCountry from "./SelectCountry";
function UpdateProfileForm({children,guest}) {
    const [first, setfirst] = useState(1);
    console.log(first)
    // const countryFlag="pt.jpg"
    // const countryFlag="pt.jpg"
    // const nationality="portugal"
    const {nationality,nationalID,fullName,email,countryFlag}=guest;
    return (
        <form action={updateGuestAction} className="bg-primary-900 py-8 px-12 text-lg flex gap-6 flex-col">
        <div className="space-y-2">
          <label>Full name</label>
          <input
          name="fullName"
            disabled
            defaultValue={fullName}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <label>Email address</label>
          <input
            disabled
            name="email"
            defaultValue={email}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm disabled:cursor-not-allowed disabled:bg-gray-600 disabled:text-gray-400"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <label htmlFor="nationality">Where are you from?</label>
             <div className="relative h-5 rounded-sm">
              
            <Image
              src={countryFlag}
              alt="Country flag"
              className="object-cover"
              fill
              />
              </div>
          </div>

          {/* <SelectCountry
            name="nationality"
            id="nationality"
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
            defaultCountry={nationality}
          /> */}
          {children}
        </div>

        <div className="space-y-2">
          <label htmlFor="nationalID">National ID number</label>
          <input
            name="nationalID"
            defaultValue={nationalID}
            className="px-5 py-3 bg-primary-200 text-primary-800 w-full shadow-sm rounded-sm"
          />
        </div>

        <div className="flex justify-end items-center gap-6">
          <SubmitButton pendingLabel="Updating profile...">Update profile</SubmitButton>
          {/* <Button></Button> */}
        </div>
      </form>
    )
}

// function Button(params) {
//   const {pending}=useFormStatus();
//   return <button className="bg-accent-500 px-8 py-4 text-primary-800 font-semibold hover:bg-accent-600 transition-all disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-300" disabled={pending}>
//             {
//               pending?"Updating data...":
//               "Update profile"
//             }
//           </button>
// }



export default UpdateProfileForm
