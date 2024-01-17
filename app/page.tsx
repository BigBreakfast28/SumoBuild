import Navbar from "@/components/navbar";
import Image from "next/image";
import homeImg from "@/public/cyber.jpg"

export default function Home() {
    return<div>
        Sumo Home
            <Navbar/>
            <Image
                src={homeImg}
                alt="Cyber Image with binary code"
                fill
                style={{objectFit: 'cover'}}
            />
    </div>
}