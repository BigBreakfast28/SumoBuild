import Hero from "@/components/hero";
import homeImg from "@/public/cyber.jpg"


export default function Home() {
    return (
        <Hero
            imgData={homeImg}
            imgAlt="Binary Code"
            title="Start your Journey Here"
        />
    );
}