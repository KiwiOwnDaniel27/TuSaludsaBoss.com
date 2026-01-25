import React from 'react'
import { contactInfo, footerLists } from '../constant/data';

const Footer = () => {
  return (
    <footer className="pt-14 pb-8">
        <div className="container">

            <div className="">

                <div className="">

                    <div className="">
                        <img src="./assets/LOGO1.png" alt="foote logo" width={360} height={150} />    
                    </div>    

                    <div className="">
                        {contactInfo.map(item => (
                            <a href="#" key={item.id}>
                                {<item.icon />}
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    </footer>
  )
}

export default Footer;