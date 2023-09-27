'use client'

import React from 'react';
import { useInView } from 'react-intersection-observer';

export default function Section(){

    const {ref, inView, entry} = useInView({
        threshold: 0,
        triggerOnce: true,
        
    });

    return(
        <>
            <div className="h-full w-screen items-center text-slate-50 flex justify-center flex-col text-center">
                <div>
                    <h1 className="flex uppercase mx-1 justify-center max-sm:text-xl text-4xl font-bold pb-52 font-FiraCode">Por que confiar
                    na FAM Security?
                    </h1>
                    <i className="gradient-lightArrow text-6xl pb-32 animate-bounce fa-solid fa-arrow-down"></i>
                </div>

                <div>
                    <p className="flex flex-col mx-1 pb-24 sm:text-4xl font-FiraCode font-semibold text-4xl">
                    Garantimos a continuidade <br></br> 
                    da atividade fim.<br></br>
                        <span className='max-sm:text-2xl text-3xl gradient-light font-bold uppercase'>
                            VOCÊ É NOSSA PRIORIDADE!
                        </span>
                        <i className="pt-2 fa-solid fa-star"></i>
                    </p>
                </div>

                <div className="pb-24">
                    <p className="flex flex-col p-4 px-6 max-sm:text-3xl font-FiraCode font-semibold text-4xl">
                    Buscamos a melhor solução.<br></br>  <span className='max-sm:text-2xl text-3xl gradient-light font-bold uppercase'>VALORIZAMOS A SUA OPINIÃO!</span>
                    </p>
                    <div className="text-4xl flex flex-row justify-center">
                            <i className="pt fa-solid fa-star"></i>
                            <i className="pt fa-solid fa-star"></i>
                    </div>
                </div>

                <div className="pb-24">
                    <p className="flex flex-col p-4 px-6 max-sm:text-3xl font-FiraCode font-semibold text-4xl">
            Sua confiança é nosso<br></br> maior objetivo.
                        <span className='max-sm:text-2xl text-3xl gradient-light font-bold uppercase'>
                            confiança não tem preço!
                        </span>
                    </p>
                        <div className="flex flex-row justify-center text-4xl">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                </div>

                <div className="pb-48">
                    <p className="flex flex-col p-4 px-6 max-sm:text-3xl font-FiraCode font-semibold text-4xl">
            Cumprimos a missão<br></br> independente de qual seja.
                <span className='max-sm:text-2xl text-3xl gradient-light font-bold uppercase'>
                versatilidade e adaptabilidade!
                </span>
                    </p>
                    <div className="text-4xl flex flex-row justify-center">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                </div>
                    
            </div>
        </>
    )
}