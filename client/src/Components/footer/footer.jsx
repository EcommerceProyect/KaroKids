import React from 'react'
import logo from '../../assets/karokidslogo.png'
import { FaFacebook, FaYoutube, FaWhatsapp, FaInstagram } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
        <footer className="px-3 pt-4 lg:px-9 border-t-2 bg-primary flex justify-center flex-col bottom-0 w-full">
            <div className=" grid gap-10 row-gap-6 mb-8 sm:grid-cols-1 lg:grid-cols-3 mt-2 p-3 h-auto">

                <div className="grid justify-center self-center">
                    <a href="#" className=" justify-self-center inline-flex items-center">
                        <img src={logo} alt="logo" className="h-20 w-auto relative " />
                    </a>
                    <div className="lg:max-w-xl pt-10">
                        <h2 className="font-bold text-xl text-center text-textDark hover:text-accents transition-colors duration-300 cursor-pointer">
                            ¿Quiénes somos?
                        </h2>
                    </div>
                    <div className="mt-6 lg:max-w-xl">
                        <h2 className="font-bold text-xl text-center text-textDark hover:text-accents   transition-colors duration-300 cursor-pointer">
                            Preguntas frecuentes
                        </h2>
                    </div>
                </div>
                <div className="self-center">
                    <div className="flex flex-col gap-2 text-sm text-center items-center ">
                        <p className="font-bold text-2xl tracking-wide text-textDark  ">Contacto</p>
                        <div className="inline-flex gap-3 ">
                            <FaFacebook href="#" className='text-textDark hover:text-accents h-12 text-4xl cursor-pointer hover:scale-110 duration-300' />
                            <FaInstagram href="#" className='text-textDark hover:text-accents h-12 text-4xl cursor-pointer hover:scale-110 duration-300' />
                            <FaYoutube href="#" className='text-textDark hover:text-accents h-12 text-4xl cursor-pointer hover:scale-110 duration-300' />
                            <FaWhatsapp href="#" className='text-textDark hover:text-accents h-12 text-4xl cursor-pointer hover:scale-110 duration-300' />
                            <FiMail href="#" className='text-textDark hover:text-accents h-12 text-4xl cursor-pointer hover:scale-110 duration-300' />
                        </div>
                    </div>
                    <div className="flex flex-col gap-2  text-sm text-center items-center mt-5">
                        <p className="font-bold text-2xl tracking-wide text-textDark">Ubicación</p>
                        <div className="inline-flex gap-3 ">
                            <p className='text-xl'>Centro comercial Unión Plaza local 219 Medellín - Colombia</p>
                        </div>
                    </div>
                </div>

                <div className="flex h-auto">
                    <div href="#" className="flex w-full min-w-xl justify-center">
                        <iframe
                            className="h-full w-full"
                            title="Ubicación Empresa"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15864.375307437494!2d-75.5666826!3d6.2513668!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e4429b51180aafb%3A0xb2cf48372f793f5f!2sKAROKIDS!5e0!3m2!1ses-419!2sec!4v1702363692904!5m2!1ses-419!2sec"
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>

        </footer>

  )
}

export default Footer
