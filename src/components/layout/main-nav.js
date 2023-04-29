import React from "react";
import Logo from "./logo";
import Link from "next/link";

const MainNavigation = () => {
  return (
    <div>
      <Link href="/">
        <Logo />
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/posts">Posts</Link>
          </li>
          <li>
            <Link href="/posts">Contacts</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MainNavigation;
