import Hero from "@/components/hero"
import ecomImg from "@/public/ecom.jpg"

export default function EcomPage() {
    return (
        <Hero
            imgData={ecomImg}
            imgAlt="Binary Code"
            title="Start your online business here!"
        />
    )
}