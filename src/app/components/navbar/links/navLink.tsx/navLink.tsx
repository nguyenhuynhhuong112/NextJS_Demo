"use client"
import Link from "next/link";
import style from "./navLink.module.css";
import { Iitem } from "../../../../../../common/interfaces/item";
import { usePathname } from "next/navigation";
export default function NavLink({ item }: { item: Iitem }) {
  const pathName = usePathname();
  return (
    <Link
      href={item.path}
      key={item.title}
      className={`${style.container} ${pathName === item.path && style.active}`}
    >
      {item.title}
    </Link>
  );
}
