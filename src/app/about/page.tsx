import React from "react";
import Navbar from "../components/Navbar";

export default function About() {
    return (
        <>
        <Navbar/>
        <div className=' text-9xl p-6 text-white h-screen'>
            <div id='about' className='w-full h-28'>    
            </div>
            <div className="bg-gradient-to-r from-cyan-950  to-blue-700 borde rounded-2xl">
                <h1 className="p-4 max-sm:text-3xl animate-fade-in-down text-6xl ">
                    Somos a FAM Security
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
        </>
    )
}