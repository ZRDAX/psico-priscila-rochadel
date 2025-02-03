"use client";

import {Sheet, SheetContent, SheetTrigger} from '@/components/ui/sheet'
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { CiMenuFries } from 'react-icons/ci';

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
];

const MobileNav = () => {
    const pathname = usePathname();
    return <Sheet>
        <SheetTrigger className="flex justify-center items-center">
            <CiMenuFries className="text-[32px] text-accent"/>
        </SheetTrigger>
        <SheetContent className=" flex flex-col" >
            {/* logo */}
            <div className="mt-28 mb-16 text-center text-2xl">
                <Link href="/">
                    <h1 className="text-2xl font-semibold">
                        Psico-Pri<span className="text-accent-hover">.</span>
                    </h1>
                </Link>
            </div>
            {/* nav */}
            <nav className="flex flex-col justify-center items-center gap-8">
                {links.map((link, index)=> {
                    return ( 
                        <Link 
                        href={link.path} 
                        key={index} 
                        className={`${link.path === pathname && "text-accent boder-b-2 border-accent"
                        }text-xl capitalize hover:text-accent transition-all`}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </nav>
        </SheetContent>
        </Sheet>;
}

export default MobileNav;