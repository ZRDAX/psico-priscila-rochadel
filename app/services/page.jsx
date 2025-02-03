"use client";

import {BsArrowDownRight} from 'react-icons/bs'
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';


const servicesA = [
    {
        date: '15/02/2025',
        status: 'Ativo',
        title: 'Escola para Pais',
        type: 'presencial',
        describe: 'Projetos Escola para Pais e o Projeto Maternidade Descomplicada, são lives que ajudam os pais na educação dos filhos no convivio social.',
        path: '/contact'
    },
];

const servicesE = [
    {
        date: '07/09/2024',
        status: 'Expirado',
        title: 'Floresça',
        type: 'presencial',
        describe: 'O autoconhecimento é útil para todos. Para as mulheres, ele oferece benefícios específicos ao lidar com as complexidades e desafios dos papéis de gênero e expectativas sociais.',
        path: 'https://www.instagram.com/reel/DBwznYiynHT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
        date: ' ',
        status: 'Expirado',
        title: 'Projeto Lapidadas para mulheres',
        type: 'online',
        describe: 'O objetivo a auxiliar mulheres a conhecer a sua essência como esposa, filha, colaboradora e amiga em todas as áreas da vida.',
        path: 'https://www.instagram.com/p/C3eT-BUOXeU/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=='
    },
    {
        date: ' ',
        status: 'Expirado',
        title: 'Arte de permanecer casados',
        type: 'presencial',
        describe: 'Restauração familiar a cada encontro, arte de permanecer casados já foi realizado mais de 120 locais atendendo mais de 2mil casais.',
        path: '/contact'
    },
];



const Services = () => {
    const pathname = usePathname();
    return (
            <section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-0'>
                <div className='container mx-auto'>
                    <motion.div initial={{opacity: 0}} animate = {{opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn"}}}
                    className='grid grid-cols-1 md:grid-cols-2 gap-[68px]'
                    >
                    
                    {servicesA.map((service, index) => {
                        return <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                            <div className='w-full flex justify-between items-center'>
                                <div className='text-1xl font-bold' >{service.date} - {service.status}</div>
                                <Link href={service.path} className='group-hover: transition-all duration-500 flex justify-center items-center hover:-rotate-45'>

                                    <BsArrowDownRight className="text-accent-sec text-3xl group-hover: hover:text-accent transition-all duration-500" />
                                </Link>
                            </div>

                            <h2 className='text-[42px] font-bold leading-none text-accent-sec'>{service.title}</h2>
                            
                            <p>{service.describe}</p>
                            <p className='text-accent'>{service.type}</p>
                            <div className='border-b border-accent-sec w-full'></div>
                        </div>
                    })}

                    {/* resolver mais tarde */}
                    {/* <div className='flex-1 flex flex-col justify-start'>
                        <h3 className='text-[16px] font-bold leading-none text-accent-sec'>Expirados</h3>
                    </div> */}

                    {servicesE.map((service, index) => {
                        return <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
                            <div className='w-full flex justify-between items-center'>
                                <div className='text-1xl font-bold' >{service.date} - {service.status}</div>
                                <Link href={service.path} className='group-hover: transition-all duration-500 flex justify-center items-center hover:-rotate-45'>

                                    <BsArrowDownRight className="text-accent-sec text-3xl group-hover: hover:text-accent transition-all duration-500" />
                                </Link>
                            </div>

                            <h2 className='text-[42px] font-bold leading-none text-accent-sec'>{service.title}</h2>
                            
                            <p>{service.describe}</p>
                            <p className='text-accent'>{service.type}</p>
                            <div className='border-b border-accent-sec w-full'></div>
                        </div>
                    })}
                    </motion.div>
                </div>
            </section>
    );
};

export default Services;
