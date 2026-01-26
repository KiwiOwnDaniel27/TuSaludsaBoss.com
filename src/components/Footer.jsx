import React from 'react'
import { contactInfo, footerLists, socialIcons } from '../constant/data';

const Footer = () => {
  return (
    <footer className="pt-14 pb-8">
        <div className="container">

            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1fr_0.7fr_0.7fr_0.7fr]">

                <div>

                    <div className="">
                        <img src="./assets/LOGO1.png" alt="foote logo" width={360} height={150} />    
                    </div>    

                    <div className="mt-8 space-y-4">
                        {contactInfo.map(item => (
                            <a href="#" key={item.id} className="flex items-center gap-1.5 hover:text-green-800
                            hover:underline transition-colors">
                                {<item.icon />}
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

                {footerLists.map(item => (
                    <div key={item.id} className="space-y-3">
                         <p>{item.title}</p>

                         <ul className="">
                            {item.links.map((link, index) => (
                                <li key={index}>
                                    <a href="#" className="hover:text-green-900 transition-colors"> {link.label}</a>
                                </li>
                            ))}
                         </ul>
                    </div>
                ))}

                <div>
                    <p className="text-lg font-semibold">Social Perfiles</p>
                    <div className="flex mt-5 gap-3">
                        {socialIcons.map(({id, icon: Icon, url}) => (
                            <a
                                key={id}
                                href={url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="primary-btn flex items-center justify-center">               
                                <Icon size={24} />
                    </a>
                    ))}
                </div>
                </div> 
            </div>
            <p className="mt-16 lg:mt-20 text-center">&copy; {new Date().getFullYear()}
                    TuSaludsaBoss <br />
                    Todos los derechos reservados
                </p>   
        </div>
    </footer>
  )
}

export default Footer;