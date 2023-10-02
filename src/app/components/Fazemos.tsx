'use client'

import Image from "next/image"
import Gripline from "./Gripline"
import { useEffect } from "react";

export default function Fazemos(){

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('FadeAnimate');
                }
            })
        });
    
        const hiddenElements = document.querySelectorAll('.Fade');
        hiddenElements.forEach((el) => observer.observe(el));
      });
      
    return(
        <div className="h-full text-slate-50 flex mb-24 justify-center text-center">
            <div className="max-w-screen-lg mx-4 text-center">
                <h1 className="uppercase max-sm:text-3xl text-6xl font-FiraCode p-4 font-bold pb-56">O que fazemos?</h1>
                <i className="text-6xl  text-cyan-600 pb-32 animate-bounce fa-solid fa-arrow-down"></i>
                <div id="vigilant" className="pt-24 font-FiraCode">
                    <div className="Fade">
                        <div className="flex flex-col items-center">
                            <p className="p-4 pb-6  max-sm:text-3xl font-semibold text-6xl">
                                VIGILÂNCIA
                            </p>
                        </div>

                        <div id="textos-vigilancia" className="mt-6 gap-y-12 grid grid-cols-3 gap-2 gap-x-4 select-none">
                        <div className="flex flex-col items-center gap-y-4 border-transparent hover:scale-105 transition-all shadow-2xl shadow-black border-yellow-400 rounded-lg p-3 text-clip">
                        <Image width="60" height="60" src="/police-car.webp" className="attachment-full size-full" alt="" loading="lazy"/>
                        <p className="font-semibold max-sm:text-lg text-2xl">
                        Segurança Patrimonial e Escolta Armada
                        </p>
                        <p className="px-6 pb-12">Profissionais treinados e qualificados. Atuação preventiva, dentro das condições, prazos e expectativas de nosso Clientes.</p>
                        </div>

                        <div className="flex flex-col gap-y-4 items-center border-transparent shadow-2xl hover:scale-105 transition-all shadow-black border-yellow-400 rounded-lg p-3">
                        <Image width="60" height="60" src="/vigilancia/consultation.png" className="attachment-full size-full" alt="" loading="lazy"/>
                        <p className=" font-semibold max-sm:text-lg text-2xl">
                        Consultoria
                        </p>
                        <p className="px-6 pb-12 ">Análise de riscos com soluções personalizadas, garantindo um serviço de qualidade e confiança.</p>
                        </div>

                        <div className="flex flex-col gap-y-4 items-center border-transparent shadow-2xl hover:scale-105 transition-all shadow-black hover:drop-shadow-2xl border-yellow-400 rounded-lg p-3">
                        <Image width="60" height="60" src="/vigilancia/guarda.png" className="attachment-full size-full" alt="" loading="lazy"/>
                        <p className=" font-semibold max-sm:text-lg text-2xl">
                        VSPP
                        </p>
                        <p className="px-6">Nossos serviços atendem executivos, autoridades e pessoas públicas garantindo segurança e proteção ao longo do dia ou em eventos específicos.</p>
                        </div>
                        </div>
                    </div>
                    
                    <div id="technology">
                    <Gripline/>
                        <div className="Fade flex flex-col items-center">
                            <p  className="uppercase p-4 pb-6  max-sm:text-3xl font-semibold text-6xl">
                                tecnologia
                            </p>
                        </div>

                        <div id="textos-tecnologia" className="mt-6 gap-y-12 grid grid-cols-4 gap-2 gap-x-4 select-none">
                        <div className="flex flex-col items-center gap-y-4 border-transparent shadow-2xl hover:scale-105 transition-all shadow-black border-yellow-400 rounded-lg p-3">
                        <Image width="60" height="60" src="/tecnologia/security-camera-1.png" className="attachment-full size-full" alt="" loading="lazy"/>
                    <p className="font-semibold max-sm:text-lg text-2xl">
                    CFTV
                    </p>
                    <p className="px-6 pb-12">As melhores soluções em monitoramento e imagens com equipamentos de ponta e equipes treinadas e capacitadas para tomar decisões de forma rápida e eficiente.</p>
                    </div>


                    <div className="flex flex-col gap-y-4 items-center border-transparent shadow-2xl hover:scale-105 transition-all shadow-black border-yellow-400 rounded-lg p-3">
                    <Image width="60" height="60" src="/tecnologia/alarme.png" className="attachment-full size-full" alt="" loading="lazy"/>
                    <p className="font-semibold max-sm:text-lg text-2xl">
                    Alarmes
            Monitorados
                    </p>
                    <p className="px-6 pb-12 ">Sensores de presença, movimento e múltiplas vias de comunicação.</p>
                    </div>

                    <div className="flex flex-col gap-y-4 border-transparent items-center shadow-2xl hover:scale-105 transition-all shadow-black border-yellow-400 rounded-lg p-3">
                    <Image width="60" height="60" src="/tecnologia/interfone.png" className="attachment-full size-full" alt="" loading="lazy"/>
                    <p className="font-semibold max-sm:text-lg text-2xl">
                    Portaria Digital
                    </p>
                    <p className="px-6 pb-12 ">Controle de pedestres e veículos sem a necessidade de um porteiro no local.</p>
                    </div>

                    <div className="flex flex-col gap-y-4 border-transparent shadow-2xl items-center hover:scale-105 transition-all shadow-black border-yellow-400 rounded-lg p-3">
                    <Image width="60" height="60" src="/tecnologia/digital-1.png" className="attachment-full size-full" alt="" loading="lazy"/>
                    <p className="font-semibold max-sm:text-lg text-2xl">
                    Mensageria Digital
                    </p>
                    <p className="px-6">Rastreamento de encomendas desde o recebimento até a entrega, avisos automáticos e protocolos armazenados de forma digital e segura.</p>
                    </div>
                    </div>
                    </div>

                    <div id="facilities">
                    <Gripline/>
                        <div className="Fade flex flex-col items-center">
                            <p className="uppercase p-4 pb-6  max-sm:text-3xl font-semibold text-6xl">
                                facilities
                            </p>
                        </div>

                        <div id="textos-facilities" className="mt-6 gap-y-12 grid grid-rows-1 grid-cols-4 gap-2 gap-x-4 select-none">
                        <div className="flex flex-col gap-y-4 items-center border-transparent shadow-2xl hover:scale-105 transition-all shadow-black border-yellow-400 rounded-lg p-3">
                        <Image width="60" height="60" src="/facilities/policeman.png" className="attachment-full size-full" alt="" loading="lazy"/>
                        <p className="font-bold max-sm:text-lg text-2xl">
                        Portaria e Controle de Acesso
                        </p>
                        <p className="px-6 pb-12">Possuímos profissionais treinados e capacitados para atuar com controle de catracas, cancelas, portas giratórias, portões internos de entrada e saída de veículos, acesso à elevadores, clausuras dentre outros.</p>
                        </div>

                        <div className="flex flex-col gap-y-4 border-transparent items-center shadow-2xl hover:scale-105 transition-all shadow-black border-yellow-400 rounded-lg p-3">
                        <Image width="60" height="60" src="/facilities/farming.png" className="attachment-full size-full" alt="" loading="lazy"/>
                        <p className="font-bold max-sm:text-lg text-2xl">
                        Jardinagem
                        </p>
                        <p className="px-6 pb-12 ">Oferecemos um completo serviço de jardinagem, paisagismo e manutenção de áreas verdes.</p>
                        </div>

                        <div className="flex flex-col gap-y-4 items-center border-transparent shadow-2xl hover:scale-105 transition-all shadow-black border-yellow-400 rounded-lg p-3">
                        <Image width="60" height="60" src="/facilities/waitress.png" className="attachment-full size-full" alt="" loading="lazy"/>
                        <p className="font-bold max-sm:text-lg text-2xl">
                Copeira        </p>
                        <p className="px-6 pb-12 ">Profissionais qualificados e treinados pra garantir a limpeza de todos os utensílios utilizados, organização da copa, preparo de café, preparo de ambientes para servir, servir em reuniões e individualmente.</p>
                        </div>

                        <div className="flex flex-col items-center gap-y-4 border-transparent shadow-2xl hover:scale-105 transition-all shadow-black border-yellow-400 rounded-lg p-3">
                        <Image width="60" height="60" src="/facilities/cleaning.png" className="attachment-full size-full" alt="" loading="lazy"/>
                        <p className="font-bold max-sm:text-lg text-2xl">
                        Limpeza e
                Conservação
                        </p>
                        <p className="px-6 pb-12 ">Contamos com equipes altamente capacitadas para garantir a discrição, pontualidade e eficiência, munidos de técnicas para manusear os mais modernos equipamentos e produtos de limpeza.</p>
                        </div>
                        </div>

                        <div id="textos-facilities" className="mt-6 gap-y-12 grid grid-rows-1 grid-cols-3 gap-2 gap-x-4 select-none">
                        <div className="flex items-center flex-col gap-y-4 border-transparent shadow-2xl hover:scale-105 transition-all shadow-black border-yellow-400 rounded-lg p-3">
                        <Image width="60" height="60" src="/facilities/receptionist-1.png" className="attachment-full size-full" alt="" loading="lazy"/>
                        <p className="font-bold max-sm:text-lg text-2xl">
                        Recepção
                        </p>
                        <p className="px-6 pb-12 ">Habilidades técnicas para realizar a identificação, cadastramento e direcionamento de visitantes, triagem de correspondências, prestação de informações para usuários e visitantes, atendimento telefônico e direcionamento de chamadas, sempre com empatia e boa apresentação pessoal.</p>
                        </div>

                        <div className="flex flex-col gap-y-4 items-center border-transparent shadow-2xl hover:scale-105 transition-all shadow-black border-yellow-400 rounded-lg p-3">
                        <Image width="60" height="60" src="/facilities/valet.png" className="attachment-full size-full" alt="" loading="lazy"/>
                        <p className="font-bold max-sm:text-lg text-2xl">
                        Manobrista
                        </p>
                        <p className="px-6 pb-12 ">Comodidade e Segurança no Embarque e Desembarque de seus clientes.</p>
                        </div>

                        <div className="flex flex-col gap-y-4 items-center border-transparent shadow-2xl hover:scale-105 transition-all shadow-black border-yellow-400 rounded-lg p-3">
                        <Image width="60" height="60" src="/facilities/fireman.png" className="attachment-full size-full" alt="" loading="lazy"/>
                        <p className="font-bold max-sm:text-lg text-2xl">
                        Bombeiro Civil
                        </p>
                        <p className="px-6 pb-12 ">Bombeiros aptos e capacitados para atender as exigências que possam surgir no dia-a-dia, sempre com precisão, agilidade e o cuidado que a profissão exige.</p>
                        </div>
                        </div>
                        </div>
                </div>
            </div>
        </div>
    )
}