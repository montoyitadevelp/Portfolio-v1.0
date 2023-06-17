import { AiFillGithub } from 'react-icons/ai';
import { BsLinkedin } from 'react-icons/bs';
import { BsWhatsapp } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { HiOutlineMail } from 'react-icons/hi';



export const Footer = () => {
    return (
        <>
            <footer className="min-h-[60px] md:min-h-[50px]">
                <div className="container mx-auto">
                    <div className="flex flex-col md:flex-row md:justify-between md:ml-5 md:mr-5 items-center gap-y-5 py-16 md:py-8 lg:text-3xl md:pt-12  ">
                        <div>
                            <a href="mailto:montoyitaaa1022@gmail.com?subject=Im%20searching%20for%20working%20with%20your%20services!">
                                <HiOutlineMail
                                    size={35}
                                    className="hover:-translate-y-1.5 duration-500"
                                />
                            </a>
                        </div>


                        <div className="flex gap-x-5 items-center">
                            <a href="https://github.com/montoyitadevelp">
                                <AiFillGithub
                                    size={30}
                                    className="hover:-translate-y-1.5 duration-500"
                                />
                            </a>
                            <a href="https://www.linkedin.com/in/sim%C3%B3n-restrepo-montoya-071244249/">
                                <BsLinkedin
                                    size={30}
                                    className="hover:text-blue-600 hover:-translate-y-1.5 duration-500"
                                />
                            </a>
                            <a href="https://wa.link/ovx4sd">
                                <BsWhatsapp
                                    size={30}
                                    className="hover:text-green-700 hover:-translate-y-1.5 duration-500"
                                />
                            </a>
                            <a href="https://www.instagram.com/montoyitadev/">
                                <BsInstagram
                                    size={30}
                                    className="hover:text-purple-400 hover:-translate-y-1.5 duration-500"
                                />
                            </a>
                        </div>

                    </div>
                </div>
            </footer>
        </>
    )
}