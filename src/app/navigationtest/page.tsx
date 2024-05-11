"use client"
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function NavigationTestPage() {
    const router = useRouter()
    const handleClick = () =>{
      console.log("object")
        router.forward()
    }
  return (
    <div>
      <Link href="/" prefetch={false}>Click here</Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
}
