// import Logo from "./_components/Logo";
// import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";
import {Josefin_Sans} from "next/font/google"
import { Suspense } from "react";
import Spinner from "../_components/Spinner";
import AdminNavigation from "./_components/AdminNavigation";
// import Header from "./_components/Header";
// import {ReservationProvider} from "./_components/ReservationContext";

const josefin=Josefin_Sans({
  subsets:["latin"],
  display:"swap"
})

// console.log(josefin);

export const metadata={
  title:{
    template:`%s | The Seaside Heaven`,
    default:`Admin`
  },
  description:"Welcome to the seaside heaven.its a paradise located in between the hills and beautiful mountain away from all the noices."
}


// const StyledSidebar = styled.aside`
//   background-color: var(--color-grey-0);
//   padding: 3.2rem 2.4rem;
//   border-right: 1px solid var(--color-grey-100);

//   grid-row: 1 / -1;
//   display: flex;
//   flex-direction: column;
//   gap: 3.2rem;
// `;


export default function AdminRootLayout({ children }) {
  return (
    
        <div className=" h-screen min-h-screen w-full flex">
            {/* <aside className="bg-green-400 w-[16rem]"></aside> */}
            <AdminNavigation></AdminNavigation>
            <div className="w-full h-full flex flex-col">
                
            <header className="bg-gray-600 w-full h-14 text-center">
            This is header
            </header>
            <main className="flex-1">
                <div className="pt-10 px-12 pb-16">
                  <Suspense fallback={<Spinner></Spinner>}>
                    
                    {children}
                  </Suspense>
                </div>
            </main>
            </div>
        </div>
      
  )
}
