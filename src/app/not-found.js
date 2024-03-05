import Link from "next/link"

function NotFound() {
    return (
        <>
            <div>NotFound</div>
            <p>page not avaialble</p>
            <Link href="/">Homepage</Link>
        </>
    )
}

export default NotFound