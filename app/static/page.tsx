import Hero from "@/components/hero"
import staticImg from "@/public/brainstorm.jpg"

export default function Static() {
    return (
        <Hero
            imgData={staticImg}
            imgAlt="Binary Code"
            title="Let's Keep it simple!"
        />
    )
}