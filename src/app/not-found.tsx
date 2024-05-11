import Link from "next/link";

export default function NotFound() {
    return(
        <div>
            <h2>Not found</h2>
            <p>Sorry, the page you are looking for does not exists</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}