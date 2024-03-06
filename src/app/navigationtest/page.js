"use client"
import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const NavigationTestPage = () => {

    // CLIENT SIDE NAVIGATION
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    const q = searchParams.get("q")

    console.log(q)

    const handleClick = () => {
        console.log("clicked")
        router.push("/");       //Push to HomePage
        // router.replace("/");    //Replace History Entry to HomePage (Not adding new entry in browser history stack)
        // router.refresh();       //Refreshes the page totally
        // router.back();       //Back the page
        // router.forward();       //Forward the page totally
    }

    return (
        <div>
            {/* Doesnt Prefetch on hover */}
            <Link href="/" prefetch={false}>Click here</Link>
            {/* Condtional routing */}
            <button onClick={handleClick}>Write and Redirect</button>
        </div>
    )
}

export default NavigationTestPage