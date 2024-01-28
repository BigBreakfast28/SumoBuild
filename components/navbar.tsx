import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-full absolute text-white z-10">
            <nav className="container relative flex flex-wrap items-center justify-between mx-auto p-12">
                <Link href="/" className="font-bold text-4xl">
                    SumoBuild
                </Link>
                <Link href="/ecommerce">
                    Services  
                </Link>
                <Link href="/sources">
                    Portfolio 
                </Link>
           </nav>
        </div>
    );
}

