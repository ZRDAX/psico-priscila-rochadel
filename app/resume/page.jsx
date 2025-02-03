"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useContext } from "react";
//import CursorProvider from "@/components/CursorContext";

const Resume = () => {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 2 } }}
            className="min-h-screen flex items-center overflow-x-hidden py-12 xl:py-0"
        >
            <div className="container mx-auto flex items-center ">
                <div className="w-full h-full flex flex-col xl:flex-row items-center justify-between">
                    {/* image */}
                    <motion.div 
                    initial={{ opacity: 0, x: -60 }}
                    animate = {{
                        opacity: 1,
                        x: 0,
                        transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
                    }}
                    className="relative w-[384px] h-[423px]
                    xl:w-[384px] xl:h-[534px] mb-8 xl:mx-0">
                        <Image 
                        src="/assets/PriscilaRochadel-29.jpg" 
                        fill quality={100}
                        priority alt=""
                        className="object-contain"
                        />
                    </motion.div>
                    {/* text */}
                    <div className=" flex flex-col items-start xl:max-w-[658px] text-center xl:text-left mx-auto xl:mx-8">
                        <h2 className="h2 mb-16 mx-auto max-w-[548px] xl:max-w-none ">Sobre Mim</h2>
                        <p className="xl:border-l-4 border-accent-sec xl:pl-4 lead max-w-[608px] mx-auto xl:mx-0">Sou casada a mais de 30 anos com Ezequiel Rochadel desse amor vieram três filhos amados, Brenda, Brendon e Bryan, a Brenda, que casou com o Bruno nos deram o Noah.
                        </p>
                        
                        <p className="xl:border-l-4 border-accent-sec xl:pl-4 lead max-w-[608px] mx-auto mt-5 xl:mx-0">Somos uma família unida e com princípios.
                        </p>

                        <p className="xl:border-l-4 border-accent-sec xl:pl-4 lead max-w-[608px] mx-auto mt-5 xl:mx-0">Durante todo esse tempo venho me graduando e especializando profissionalmente. Sou Pedagoga,  Psicóloga,  Psicopedagoga, Neuropsicopedagog, terapeuta de família e casais especialistas em diversas áreas da saúde mental e educação.
                        </p>
                    </div>
                </div>
            </div>

        </motion.section>
    );
};

export default Resume;
