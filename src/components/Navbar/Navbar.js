import Link from "next/link"
import styles from "./navbar.module.css"

const Navbar = () => {
    return (
        <div className={styles.container}>
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