import SideNav from "../ui/dashboard/sidenav";

export default function Layout (
    {children} : {children: React.ReactNode} )  { // esto es lo que esta envolviendo
    return (
        <div className="flex h-screen flex-col md:flex-row md:overlow-hidden">
            <div className="w-full flex-none md:w-64">
                <SideNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
            
        </div>
    )
    }
