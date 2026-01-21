import React, {useState} from 'react';
import { RiCloseLine, RiMenuLine } from '@remixicon/react';
import { navItems } from '../constant/data';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  }
  return <header className='w-full'>
    <div className="container flex items-center justify-between border-b
    border-b-green-600">

        <a href="#">
          <img className="logo max-lg:hidden" src="/assets/LOGO1.png" alt="logo" width={700} height={100}/>
        </a>
        <a href="#">
          <img className="logo lg:hidden" src="/assets/LOGO2.png" alt="logo" width={700} height={100}/>
        </a>

        <nav className={`navbar ${isOpen ? "active" : " "}`}>

              <button className="absolute top-8 right-8" onClick={handleClick}>
                  <RiCloseLine size={39} />
              </button>

              <ul className="space-y-5 text-center">
                  {navItems.map((item) =>(
                    <li key={item.id}>
                      <a href="#" className="text:lg font-bold text-green-600">
                        {item.label}
                      </a>
                    </li>
                  ))}
              </ul>

              <button className="primary-btn mt-11 max-w-40 w-full">Acceso</button>
        </nav>

        <button className="barra lg:hidden" onClick={handleClick}>
                  <RiMenuLine/>
        </button>

        <div className="max-lg:hidden flex items-center gap-9">

          <ul className="max-lg:hidden space-x-10 flex items-center ">
                  {navItems.map(item =>(
                    <li key={item.id}>
                      <a href="#" className="hover:text-green-600 transition-colors font-medium text-lg">{item.label}</a>
                    </li>
                  ))}
          </ul>

          <button className="max-lg:hidden primary-btn">Acceso</button>
        </div>

    </div>
  </header>
    
  
}

export default Header;