import Link from "next/link"

const Navbar = () => {
    return (
        <div>
            <div>Logo</div>
            <div>
                <Link href="/">Homepage</Link>
                <Link href="/about">About</Link>
                <Link href="/contact">Contact</Link>
                <Link href="/blog">Blog</Link>

            </div>
        </div>
    )
}

export default Navbar