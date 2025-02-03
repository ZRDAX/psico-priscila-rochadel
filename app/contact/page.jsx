"use client";

import { motion } from "framer-motion";
import { useContext } from "react";
import { CursorContext } from "@/components/CursorContext";
import Form from "@/components/form";
import { Mail, Instagram, Phone } from "lucide-react";

const Contact = () => {
    const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

    return (
        <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 2 } }}
        className="min-h-screen flex items-center overflow-x-hidden px-4 sm:px-8"
        >
        <div className="container mx-auto pt-10 pb-12 xl:pt-0 xl:pb-8">
            <div className="flex flex-col gap-12 xl:flex-row h-full">
                {/* texto */}
                <motion.div 
                onMouseEnter={mouseEnterHandler}
                onMouseLeave={mouseLeaveHandler}
                initial={{ opacity: 0, x: -60 }}
                animate = {{
                    opacity: 1,
                    x: 0,
                    transition: { delay: 2.4, duration: 0.8, ease: "easeInOut" },
                }}
                className="flex-1 flex flex-col justify-center text-center xl:text-left">  
                        <h3 className="text-2xl font-semibold mb-8">Informações de Contato</h3>
                        
                        {/* items */}
                        <div className="flex flex-col items-center xl:items-start gap-6">
                            
                            {/* item-1 */}
                            <div className="flex items-start gap-4">
                                <div className="w-9 h-9 flex justify-center items-center">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div className="pt-1 flex-1">
                                    <h4 className="text-lg font-medium mb-1">Email</h4>
                                    <p className="text-gray-600">psicorochadelpriscila@gmail.com</p>
                                </div>
                            </div>

                            {/* item-2 */}
                            <div className="flex items-start gap-4">
                                <div className="w-9 h-9 flex justify-center items-center">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div className="pt-1 flex-1">
                                    <h4 className="text-lg font-medium mb-1">Telefone</h4>
                                    <p className="text-gray-600">(51) 98920-6125</p>
                                </div>
                            </div>

                            {/* item-3 */}
                            <div className="flex items-start gap-4">
                                <div className="w-9 h-9 flex justify-center items-center">
                                    <Instagram className="w-6 h-6" />
                                </div>
                                <div className="pt-1 flex-1">
                                    <h4 className="text-lg font-medium mb-1">Instagram</h4>
                                    <p className="text-gray-600">@psico.priscila_rochadel</p>
                                </div>
                            </div>
                        </div>
                </motion.div>
                
                {/* forms */}
                <div className="flex-1 flex justify-center">
                    <div className="w-full max-w-lg gap-4 p-6 sm:p-10 bg-white shadow-lg rounded-lg">
                        <Form />
                    </div>
                </div>
            </div>
        </div>
        </motion.section>
    );
};

export default Contact;
