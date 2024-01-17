import Image from "next/image";
import { StaticImageData } from "next/image";

interface HeroProps {
    imgData: StaticImageData;
    imgAlt: string;
    title: string;
}

export default function Hero(props: HeroProps ) {
    return(
        <div className="relative h-screen">
            <Image
                src={props.imgData}
                alt={props.imgAlt}
                fill
                style={{objectFit: 'cover'}}
            />
        </div>
    )
}
