import SideNavigation from "../_components/SideNavigation"




function layout({children}) {
    return (
        <div className="grid grid-cols-[3rem_7fr] gap-3 sm:grid-cols-[16rem_1fr] h-full sm:gap-12">
            <SideNavigation/>
            <div className="py-1">{children}</div>
        </div>
    )
}

export default layout
