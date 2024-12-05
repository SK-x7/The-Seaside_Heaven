import SideNavigation from "../_components/SideNavigation"
function layout({children}) {
    return (
        <div className="grid grid-cols-[3rem_7fr] gap-3 min-[501px]:grid-cols-[10rem_7fr]  sm:grid-cols-[11rem_7fr] md:grid-cols-[12rem_1fr] lg:grid-cols-[16rem_1fr] h-full sm:gap-5 md:gap-8 lg:gap-10 xl:gap-12">
            <SideNavigation/>
            <div className="py-1">{children}</div>
        </div>
    )
}

export default layout
