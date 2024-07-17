"use client";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Header = () => {
  const activePath = usePathname();
  // console.log(activePath);
  const router = useRouter();
  const session = useSession();
  console.log(session);
  const navLink = [
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Services",
      path: "/services",
    },
    {
      title: "Blogs",
      path: "/blogs",
    },
    {
      title: "Meals",
      path: "/meals",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];

  const handler = () => {
    router.push("/api/auth/signin");
  };

  return (
    <div className="flex justify-between items-center py-10">
      <h2 className="text-2xl font-bold">
        Meal<span className="text-green-600">BOX</span>{" "}
      </h2>
      <div>
        {navLink?.map((link) => (
          <Link
            className={`${link.path === activePath && "text-green-600"} mr-8`}
            key={link.path}
            href={link.path}
          >
            {link.title}
          </Link>
        ))}
      </div>
      <div className="flex gap-4 justify-between">
        {
          session.status === "authenticated" &&
          <div className="flex gap-3 items-center">
            <Image
              className="rounded-full "
              src={session?.data?.user.image}
              alt="image"
              height={32}
              width={32}
            ></Image>
            <div className="flex flex-col">
              <span>
                {session?.data?.user.name}({session?.data?.user.type})
              </span>
            </div>
          </div>
        }
        {session.status === "authenticated" ? (
          <button
            onClick={()=>signOut()}
            className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-black  duration-300 ease-in-out"
          >
            SignOut
          </button>
        ) : (
          <button
            onClick={handler}
            className="bg-green-600 text-white px-3 py-1 rounded-md hover:bg-black  duration-300 ease-in-out"
          >
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
