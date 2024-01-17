import Link from "next/link";

export default function Navbar() {
    return (
        <div>
           <Link href="/ecommerce">
                Ecommerce Page Samples 
           </Link>
           <Link href="/static">
                Static Page Samples 
           </Link>
        </div>
    );
}