import logo from '@/assets/logo.png';
import { Phone, Mail } from 'lucide-react'

export const Footer = () => {
    return (
        <footer className="flex flex-col items-start px-10 mb-8 md:px-15 lg:px-20 xl:px-35">
            <div className="flex flex-col w-full max-w[450px] m-auto border-b border-uaipy-primary mb-4 md:flex-row md:justify-between md:items-center">
                <div className="md:w-full md:max-w-1/2 lg:max-w-2/5 xl:max-w-1/3">
                    <img src={logo} className="w-full max-w-28" alt="" />
                    <p className="mb-8 mt-5 text-sm lg:text-base">Falar um pouquinho mais do projeto rapidinho só pra ficar daora o rodapé e tals, podemos puxar mais pro pessoal aqui eu acho, motivações e afins :)</p>
                </div>
                <div>
                    <p className="border-l border-black px-[12px] uppercase">Entre em contato conosco</p>
                    <address className="flex flex-col items-start mb-8 mt-4 not-italic">
                        <a href="" className="text-uaipy-primary mb-[10px] flex items-center">
                            <Phone size={24} color="#000" strokeWidth={1.5} />
                            <p className="ml-[10px]">(34) 9 9999-9999</p>
                        </a>
                        <a href="" className="flex items-center">
                            <Mail size={24} color="#000" strokeWidth={1.5} />
                            <p className="ml-[10px]">uai.py@email.com</p>
                        </a>
                    </address>
                </div>
            </div>
            <p className="text-center italic m-auto text-sm">Copyright ©2024 UAI.py. Todos os direitos reservados.</p>
        </footer>
    )
}