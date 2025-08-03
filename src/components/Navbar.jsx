import { NavLink } from "react-router-dom";
import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='flex justify-between items-center sm:px-16 px-8 py-4 max-w-5xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0 p-2 justify-left'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain p-4' />
      </NavLink>
      <nav className='flex text-md gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Projects
        </NavLink>
         <NavLink to='/shop' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Shop
        </NavLink>
         <NavLink to='/Contact' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
          Contact
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;