import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

export default function About() {
    return (
        <>
        <div className='content-container'>
        <Navbar/>
        <link as="preloaded" rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossOrigin="anonymous" referrerPolicy="no-referrer" /><div className="flex flex-col justify-center items-center">
    <div className='text-9xl p-6 text-white max-w-screen-lg justify-center text-center'>
        <div id='about' className=' h-28 justify-center text-center'>
        </div>
        <div className="rounded-2xl">
            <h1 className="p-4 max-sm:text-3xl animate-fade-in-down text-6xl ">
                Somos a <br></br>
                <span id="heroId" className="dark:drop-shadow-[0_0_0.3rem_#000000] font-semibold fam-security hero">
                    FAM Security
                </span>
            </h1>
        </div>
        <div className='flex flex-col gap-12 font-sans max-md:text-lg p-4 text-2xl text-justify'>
            <p>
                A FAM SECURITY foi fundada no Brasil por um ex-Sargento dos Fuzileiros Navais Americanos “US Marines” com o objetivo de oferecer a seus clientes um lugar único, para atender todas as suas necessidades de segurança.
            </p>
            <p>
                Prestamos um serviço de excelência na área de Segurança Patrimonial e Serviços Terceirizados afim de oferecer as melhores soluções com qualidade e melhor custo benefício.
            </p>
            <p>
                Possuímos infra estrutura projetada para suportar as operações de nossos clientes por meio da identificação e aconselhamento a respeito dos riscos associados à sua empresa ou seu pessoal. Além de contarmos com uma equipe treinada e qualificada afim de proporcionar mais tranquilidade e satisfação dos nossos clientes.
            </p>
            <p>
                Através de uma análise precisa e de nossa experiência no mercado, desenvolvemos nossos serviços qualidade e eficiência. O resultado é a melhoria constante das operações visando a qualidade no atendimento e satisfação dos nossos clientes.
            </p>
        </div>

    </div>


    <div className='max-w-screen-lg mx-4 my-12'>
        <div id="missao" className="max-md:flex max-md:flex-col select-none gap-6 max-md:gap-y-12 grid grid-cols-3 text-white font-sans justify-center">

            <div id="heroId" className=" px-2 gap-2 hover:scale-105 transition-all flex border-transparent rounded-xl p-12 shadow-black shadow-xl flex-col text-center items-center">
                <Image width="120" height="120" src="/crescimento.png" alt="" />
                <h1 className="font-bold text-2xl ">Missão</h1>
                <p className=" text-base font-FiraCode">Ser a melhor e mais completa empresa multisserviços do Brasil.</p>
            </div>

            <div id="heroId" className="gap-2 px-2 hover:scale-105 transition-all flex border-transparent rounded-xl p-12 shadow-black shadow-xl flex-col text-center items-center">
                <Image width="120" height="120" src="/location-1.png" alt="" />
                <h1 className="font-bold text-2xl">Visão</h1>
                <p className="text-sm font-FiraCode">Garantir e contribuir com a sinergia da atividade fim do nosso cliente e o seu continuado apoio com viés na inovação e tecnologia, permitindo a sobrevivência, o crescimento e a perpetuação.</p>
            </div>

            <div id="heroId" className="gap-2 px-2 hover:scale-105 transition-all flex flex-col border-transparent rounded-xl p-12 shadow-black shadow-xl text-center items-center">
                <Image width="120" height="120" src="/group.png" alt="" />
                <h1 className="font-bold text-2xl">Valores</h1>
                <p className=" text-sm font-FiraCode">Equilíbrio entre Pessoas & Negócios com responsabilidade empresarial em nosso DNA, garantindo excelência, qualidade e eficiência em nossos serviços.</p>
            </div>
        </div>

    </div>
</div>
        <Footer/>
        </div>
        </>
    )
}