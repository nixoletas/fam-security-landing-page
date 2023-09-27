import Image from "next/image"
import Gripline from "./Gripline"

export default function Fazemos(){
    return(
        <div id="vigilant" className="h-full text-slate-50 flex justify-center text-center">
            <div className="max-w-screen-lg mx-4 text-center">
                <h1 className="uppercase max-sm:text-3xl text-4xl font-FiraCode p-4 font-bold pb-56">O que fazemos?</h1>
                <i className="text-6xl  text-cyan-600 pb-32 animate-bounce fa-solid fa-arrow-down"></i>
                <div className="font-FiraCode">
                    <div className="">
                        <div className="flex flex-col items-center">
                            <p className="p-4 pb-6  max-sm:text-3xl font-semibold text-6xl">
                                VIGILÂNCIA
                            </p>
                            <Image width="256" height="256" src="https://www.famsecurity.com.br/wp-content/uploads/police-car.png" className="attachment-full size-full" alt="" loading="lazy"/>
                        </div>
                        <p className="font-semibold pt-6 max-sm:text-lg text-2xl">
                        Segurança Patrimonial e Escolta Armada
                        </p>
                        <p className="px-6 pb-12">Com profissionais treinados e qualificados, nosso objetivo é proteger, atuando de forma preventiva, dentro das condições, prazos e expectativas de nosso Clientes.</p>
                        <p className="font-semibold max-sm:text-lg text-2xl">
                        Consultoria
                        </p>
                        <p className="px-6 pb-12 ">Análise de riscos com soluções personalizadas, garantindo um serviço de qualidade e confiança.</p>
                        <p className="font-semibold max-sm:text-lg text-2xl">
                        VSPP
                        </p>
                        <p className="px-6">Trabalhamos na prevenção, pois nosso foco é evitar os possíveis eventos de risco. Nossos serviços atendem executivos, autoridades e pessoas públicas garantindo segurança e proteção ao longo do dia ou em eventos específicos.</p>
                    </div>
                    <Gripline/>
                    
                    <div id="technology">
                        <div className="flex flex-col items-center">
                            <p className="uppercase p-4 pb-6  max-sm:text-3xl font-semibold text-6xl">
                                tecnologia
                            </p>
                            <Image width="256" height="256" src="https://www.famsecurity.com.br/wp-content/uploads/security-camera-1.png" className="attachment-full size-full" alt="" loading="lazy"/>
                        </div>
                    <p className="font-semibold pt-6 max-sm:text-lg text-2xl">
                    CFTV
                    </p>
                    <p className="px-6 pb-12">Possuímos as melhores soluções em monitoramento e imagens com equipamentos de ponta e equipes treinadas e capacitadas para tomar decisões de forma rápida e eficiente.</p>
                    <p className="font-semibold max-sm:text-lg text-2xl">
                    Alarmes
            Monitorados
                    </p>
                    <p className="px-6 pb-12 ">Sensores de presença, movimento e múltiplas vias de comunicação.</p>
                    <p className="font-semibold max-sm:text-lg text-2xl">
                    Portaria Digital
                    </p>
                    <p className="px-6 pb-12 ">Controle de pedestres e veículos sem a necessidade de um porteiro no local.</p>
                    <p className="font-semibold max-sm:text-lg text-2xl">
                    Mensageria Digital
                    </p>
                    <p className="px-6">Rastreamento de encomendas com registro desde o recebimento até a entrega, avisos automáticos de chegada da encomenda e protocolos armazenados de forma digital e segura.</p>
                    </div>



                    <div id="facilities">
                    <Gripline/>
                        <div className="flex flex-col items-center">
                            <p className="uppercase p-4 pb-6  max-sm:text-3xl font-semibold text-6xl">
                                facilities
                            </p>
                            <Image width="256" height="256" src="https://www.famsecurity.com.br/wp-content/uploads/waitress.png" className="attachment-full size-full" alt="" loading="lazy"/>
                        </div>
                        <p className="font-semibold pt-6 max-sm:text-lg text-2xl">
                        Portaria e Controle de Acesso
                        </p>
                        <p className="px-6 pb-12">Possuímos profissionais treinados e capacitados para atuar com controle de catracas, cancelas, portas giratórias, portões internos de entrada e saída de veículos, acesso à elevadores, clausuras dentre outros.</p>
                        <p className="font-semibold max-sm:text-lg text-2xl">
                        Jardinagem
                        </p>
                        <p className="px-6 pb-12 ">Oferecemos um completo serviço de jardinagem, paisagismo e manutenção de áreas verdes.</p>
                        <p className="font-semibold max-sm:text-lg text-2xl">
                Copeira        </p>
                        <p className="px-6 pb-12 ">Profissionais qualificados e treinados pra garantir a limpeza de todos os utensílios utilizados, organização da copa, preparo de café, preparo de ambientes para servir, servir em reuniões e individualmente.</p>
                        <p className="font-semibold max-sm:text-lg text-2xl">
                        Limpeza e
                Conservação
                        </p>
                        <p className="px-6 pb-12 ">Contamos com equipes altamente capacitadas para garantir a discrição, pontualidade e eficiência, munidos de técnicas para manusear os mais modernos equipamentos e produtos de limpeza.</p>
                        <p className="font-semibold max-sm:text-lg text-2xl">
                        Recepção
                        </p>
                        <p className="px-6 pb-12 ">Nossa equipe possui habilidades técnicas para realizar a identificação, cadastramento e direcionamento de visitantes, triagem de correspondências, prestação de informações para usuários e visitantes, atendimento telefônico e direcionamento de chamadas, sempre com empatia e boa apresentação pessoal auxiliando no bom andamento do dia a dia corporativo.</p>
                        <p className="font-semibold max-sm:text-lg text-2xl">
                        Manobrista
                        </p>
                        <p className="px-6 pb-12 ">Comodidade e Segurança no Embarque e Desembarque de Seu Cliente.</p>
                        <p className="font-semibold max-sm:text-lg text-2xl">
                        Bombeiro Civil
                        </p>
                        <p className="px-6 pb-12 ">Bombeiros aptos e capacitados para atender as exigências que possam surgir no dia-a-dia, sempre com precisão, agilidade e o cuidado que a profissão exige.</p>
                        </div>
                </div>
            </div>
        </div>
    )
}