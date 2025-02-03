"use client";
import Link from "next/link";
import { Button } from "./ui/button";

//componetes importados
import Nav from "./Nav";
import MobileNav from "./MobileNav";

import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";

const Header = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);
    return (
        <motion.header
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2 } }}
        className="py-8 xl:py-12 text-cortexto">
            <div className="container mx-auto flex justify-between items-center">
                {/*logo*/}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Psico-Pri<span className="text-accent-hover">.</span>
                    </h1>
                </Link>
                
                {/* desktop navigation*/}
                <div className="hidden xl:flex items-center gap-8">
                    <Nav />
                    {/* <Link href="/contact">
                        <Button>Sobre mim</Button>
                    </Link> */}
                </div>

                {/*mobile nav*/}
                <div className="xl:hidden">
                    <MobileNav />
                </div>
            </div>
        </motion.header>
    );
};

export default Header;
