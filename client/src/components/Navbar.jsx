import { HiMenuAlt4 } from 'react-icons/hi';
import { AiOutlineClose } from 'react-icons/ai';
import logo from '../assets/images/logo.png'
import { useState } from 'react';

const NavbarItem = ({ title, classProps }) => (
  <li className={`mx-4 cursor-pointer ${classProps}`}>
    {title}
  </li>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);


  return (
    <nav className='w-full flex md:justify-center justify-between items-center p-4'>
      <div className='md:flex-[0.5] flex-initial justify-center items-center'>
        <img src={logo} alt='logo' className='w-32 cursor-pointer'/>
        <ul className='text-white md:flex hidden list-one flex-rowitesm-center flex-initial justify-between'>
          {["Market", "Exchange", "Tutorials", "Wallets"].map((item, i) => <NavbarItem title={item} key={item+i}/>)}
          <li className='bg-[#2952e3] px-7 py-2 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]'>
            Login
          </li>
        </ul>
        <div className='flex relative'>
          {toggleMenu ? (
            <AiOutlineClose/>
          ) : (
            <HiMenuAlt4/>
          )}
        </div>
      </div>
    </nav>
  )
}

export default Navbar