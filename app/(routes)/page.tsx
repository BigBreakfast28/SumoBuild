import Hero from "@/components/hero";
import homeImg from "@/public/cyber.jpg"



export default function Home() {
    return (
        <div className="">
        <Hero
            imgData={homeImg}
            imgAlt="Binary Code"
            title="Start your Journey Here"
            text="This is where you start to take control over your business and work with a professional to make your dream come true."
        />
        <div>
            This is the begining
        </div>
        </div>
    );
}