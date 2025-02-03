import { Button } from "@/components/ui/button";
import { MdEmojiEvents } from "react-icons/md";
import Link from "next/link";

//componentes
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";

//pages 
const Home = () => {
  return (
    <section className=" h-full">
    <div className="container mx-auto h-full">
      <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
        
        {/* texto*/}
        <div className="text-center xl:text-left order-2 xl:order-none">
          <span className="text-xl">Psicóloga</span>
          <h1 className="h1 mb-6">
            Olá! sou a <br /> <span className="text-accent">Priscila Rochadel</span>
          </h1>
          <p className=" max-w-[500px] mb-9 text-cortexto/80"> É um prazer apresentar a você meus projetos realizados ao longo da minha trajetória.</p>
          
          {/* botton */}
          <div className="flex flex-col xl:flex-row items-center gap-8">
            <Link href={'/services'}>
              <Button 
                variant=""
                size = "lg"
                className="uppercase flex items-center gap-2"
              >
                <span>Eventos</span>
                <MdEmojiEvents className="text-xl" />
              </Button>
            </Link>
            
            {/* social */}
            <div className="mb-8 xl:mb-0">
                <Social containerStyle="flex gap-6" iconStyles="w-9 h-9 border border-accent-sec rounded-full flex justify-center items-center text-cortexto text-base hover:bg-accent hover:text-primary hover:transiton-all duration-500" />  
              </div>
          </div>
        </div>
        {/* foto */}
        <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
        </div>
      </div>
    </div>
    <Stats />
  </section>
  );
};

export default Home;
