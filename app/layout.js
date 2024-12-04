import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";
import {Josefin_Sans} from "next/font/google"
import Header from "./_components/Header";
import {ReservationProvider} from "./_components/ReservationContext";

const josefin=Josefin_Sans({
  subsets:["latin"],
  display:"swap"
})

// console.log(josefin);

export const metadata={
  title:{
    template:`%s | The Seaside Heaven`,
    default:`Welcome | The Seaside Heaven`
  },
  description:"Welcome to the seaside heaven.its a paradise located in between the hills and beautiful mountain away from all the noices."
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* //FIXME -  */}
      <body className={ `${josefin?.className} text-primary-100 !min-h-screen flex flex-col bg-primary-950 antialiased w-full`}>
        <Header></Header>
        <div className="p-3 sm:px-8 sm:py-12 relative grid grid-cols-1 !w-full flex-1">
        <main className="max-w-7xl mx-auto !w-full h-full">
          
          <ReservationProvider>
            
          {children}
          </ReservationProvider>
        </main>
        </div>
      </body>
    </html>
  )
}
