import { auth } from "../_lib/auth"

export const metadata={
    "title":"Guest Area"
}

async function Page() {
    const session=await auth();
    // console.log(session)
    const name = session?.user?.name.split(" ").at(0);
    return (
        <h2 className="font-semibold text-2xl text-accent-400 mb-7">
        Hello, {name||"user"}
      </h2>
    )
}

export default Page
