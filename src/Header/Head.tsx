import { Avatar } from "../data/Avatar"
import projectone from "../assets/img/project1.png"
import projecttwo from "../assets/img/project2.png"
import projectthree from "../assets/img/project3.png"
import { Code } from "../data/Code"


export const Header = () => {
    return (
        <>
            <div className="">
                <header className="flex flex-col md:items-end absolute w-[800px] mt-16 ml-[400px]  md:justify-between">
                    <div className="font-mono font-black text-6xl ">
                        <h1>Simón Restrepo Montoya</h1>
                    </div>
                    <div className="text-2xl text-end font-mono md:mt-10">
                        <p>I am a front-end developer who has adapted a constant learning criteria, during my process I find challenges that help me to find new application skills.</p>
                    </div>
                </header>
                <span className="sm:max-w-xl max-w-md sm:mt-8 sm:w-full sm:object-cover md:flex-row md:justify-between ">
                    <Avatar />
                </span>
            </div>

            <section className="section mt-96" id="work">
                <div className="container mx-auto">
                    
                    <div className="text-center text-4xl font-mono font-black md:mb-10 " >
                        <h1>Recent projects</h1>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-x-10 ">
                        <div className="flex-1 flex flex-col md:gap-y-12 mb-10 lg:mb-0">

                        </div>

                        <div className="flex flex-col md:flex-row md:justify-between md:ml-5 md:mr-5 items-center gap-y-5 py-16 md:py-8 lg:text-3xl font-mono font-black ">
                            <div className="hover:-translate-y-1.5 duration-500 ">
                                <a href="https://github.com/montoyitadevelp/Web-Dev-Hut-Open-Source">
                                    <Code />
                                </a>
                            </div>
                        </div>
                        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl h-full">
                            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300">
                            </div>

                            <img src={projectone} className=" group-hover:scale-125 transition-all duration-500" />

                            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                <span className="text-gradient text-white font-mono">
                                    Back-End | Front-End
                                </span>
                            </div>
                            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className=" text-3xl text-white font-mono">Web-Dev-Hut</span>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between md:ml-5 md:mr-5 items-center gap-y-5 py-16 md:py-8 lg:text-3xl font-mono font-black ">
                            <div className="hover:-translate-y-1.5 duration-500 ">
                                <a href="https://github.com/montoyitadevelp/all-app">
                                    <Code />
                                </a>

                            </div>
                        </div>

                        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl h-full">
                            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                            <img src={projecttwo} className=" group-hover:scale-125 transition-all duration-500 " />
                            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                <span className="text-gradient text-white font-mono">
                                    TypeScript | Tailwind
                                </span>
                            </div>
                            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className=" text-3xl text-white font-mono">API REST</span>
                            </div>
                        </div>
                        <div className="flex flex-col md:flex-row md:justify-between md:ml-5 md:mr-5 items-center gap-y-5 py-16 md:py-8 lg:text-3xl font-mono font-black ">
                            <div className="hover:-translate-y-1.5 duration-500 ">
                                <a href="https://github.com/montoyitadevelp/props-handlers">
                                    <Code />
                                </a>

                            </div>
                        </div>
                        <div className="group relative overflow-hidden border-2 border-white/50 rounded-xl h-full">
                            <div className="group-hover:bg-black/70 w-full h-full absolute z-40 transition-all duration-300"></div>
                            <img src={projectthree} className="group-hover:scale-125 transition-all duration-500 " />
                            <div className="absolute -bottom-full left-12 group-hover:bottom-24 transition-all duration-500 z-50">
                                <span className="text-gradient text-white font-mono">
                                    React
                                </span>
                            </div>
                            <div className="absolute -bottom-full left-12 group-hover:bottom-14 transition-all duration-700 z-50">
                                <span className=" text-3xl text-white font-mono">Hooks</span>
                            </div>

                        </div>


                    </div>

                </div>

            </section>

        </>
    )
}