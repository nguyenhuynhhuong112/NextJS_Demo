"use client";
import React from "react";
import style from "./links.module.css";
import NavLink from "./navLink.tsx/navLink";
import Image from "next/image";
export default function Links() {
  const links = [
    { title: "Home", path: "/" },
    { title: "About", path: "/about" },
    { title: "Contact", path: "/contact" },
    { title: "Blog", path: "/blog" },
  ];
  const [isOpen, setIsOpen] = React.useState(false);
  const session = true;
  const isAdmin = false;
  return (
    <div className={style.container}>
      <div className={style.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.title} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
            <button className={style.logout}>Logout</button>
          </>
        ) : (
          <NavLink item={{ title: "Login", path: "/login" }} />
        )}
      </div>
      <Image
        className={style.menuButton}
        src="/menu.png"
        alt=""
        width={30}
        height={30}
        onClick={() => setIsOpen((prev) => !prev)}
      />
      {isOpen && (
        <div className={style.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.title} />
          ))}
        </div>
      )}
    </div>
  );
}
