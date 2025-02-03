"use client";

import CountUp from "react-countup";

const stats = [
    {
        prefix: "+",
        num: 7, 
        text: "Anos de Experiencia",
    },
    
    {   
        prefix: "+",
        num: 10500, 
        text: "Clientes",
    },
    
    {
        prefix: "+",
        num:  1000, 
        text: "Palestras",
    },
];
const Stats = () => {
    return (
        <section className="pt-4 pb-12 xl:pt-0 xl:pb-0">
            <div className="cointainer mx-auto">
                <div className="flex flex-wrap max-w-[80vw] mx-auto xl:max-w-[80vw]">
                    {stats.map((item, index) => {
                        return (
                        <div className="flex-1 flex gap-4 items-center justify-center xl:justify-center" key={index}>
                            
                            <span className="text-5xl xl:text-6xl font-extrabold">
                                {item.prefix}
                            </span>
                            
                            <CountUp 
                            end={item.num} 
                            duration={5} 
                            delay={2} 
                            className="text-5xl xl:text-6xl font-extrabold" 
                            />

                            <p className={`${item.text.length < 15 ? "max-w-[100px]" : "max-w-[150px]" }
                            leading-snug text-accent/80`}>{item.text}</p>
                        </div>
                        ); 
                    })}    
                </div> 
            </div>
        </section> 
    ); 
};

export default Stats;