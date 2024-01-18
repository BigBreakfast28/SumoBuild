import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <Link href="/">
            SumoBuild
            </Link>
           <Link href="/ecommerce">
                Ecommerce Page Samples 
           </Link>
           <Link href="/static">
                Static Page Samples 
           </Link>
        </div>
    );
}