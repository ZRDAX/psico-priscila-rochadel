"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        name: "Inicio",
        path: "/",
    },
    {
        name: "Eventos",
        path: "/services",
    },
    {
        name: "Resumo",
        path: "/resume",
    },
    
    // {
    //     name: "Trabalhos",
    //     path: "/work",
    // },

    {
        name: "Contato",
        path: "/contact",
    },
    
    // {
    //     name: "Floresça",
    //     path: "/floresca",
    // },
];

const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
    return (
    <nav className="flex gap-8">
        {links.map((link, index) => {
            return (
                <Link href={link.path} key={index} className={`${link.path === pathname && 'text-accent border-b-2 border-accent'} capitalize font-medium hover:text-accent transition-all`}>
                    {link.name}
                </Link>
            );
        })}
    </nav>
    );
};

export default Nav;
