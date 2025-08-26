// import { useState } from 'react';
// import { NavLink } from "react-router-dom";
// import { logo } from "../assets/images";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const closeMenu = () => {
//     setIsMenuOpen(false);
//   };

//   return (
//     <header className='flex justify-between items-center sm:px-16 px-8 py-4 max-w-5xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0 p-2'>
//       <NavLink to='/'>
//         <img src={logo} alt='logo' className='w-18 h-18 sm:w-40 sm:h-40 object-contain p-4' />
//       </NavLink>

//       {/* Desktop Navigation */}
//       <nav className='hidden md:flex text-md gap-7 font-large text-xl'>
//         <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-black" }>
//           About
//         </NavLink>
//         <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
//           Projects
//         </NavLink>
//         <a 
//           href="https://10zpwk-n0.myshopify.com"
//           target="_blank"
//           rel="noopener noreferrer"
//           className="text-black hover:text-blue-600 transition-colors duration-200"
//         >
//           Shop
//         </a>
//         <NavLink to='/Contact' className={({ isActive }) => isActive ? "text-blue-600" : "text-black"}>
//           Contact
//         </NavLink>
//       </nav>

//       {/* Mobile Menu Button */}
//       <button 
//         className='md:hidden flex flex-col justify-center items-center w-8 h-8 focus:outline-none'
//         onClick={toggleMenu}
//         aria-label="Toggle menu"
//       >
//         <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
//         <span className={`block w-6 h-0.5 bg-black mt-1 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
//         <span className={`block w-6 h-0.5 bg-black mt-1 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
//       </button>

//       {/* Mobile Navigation Menu */}
//       <nav className={`md:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
//         <div className='flex flex-col py-4'>
//           <NavLink 
//             to='/about' 
//             className={({ isActive }) => `px-8 py-3 text-lg border-b border-gray-100 ${isActive ? "text-blue-600" : "text-black"} hover:bg-gray-50`}
//             onClick={closeMenu}
//           >
//             About
//           </NavLink>
//           <NavLink 
//             to='/projects' 
//             className={({ isActive }) => `px-8 py-3 text-lg border-b border-gray-100 ${isActive ? "text-blue-600" : "text-black"} hover:bg-gray-50`}
//             onClick={closeMenu}
//           >
//             Collections
//           </NavLink>
//           <a
//             href="https://10zpwk-n0.myshopify.com"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="px-8 py-3 text-lg border-b border-gray-100 text-black hover:bg-gray-50"
//             onClick={closeMenu}
//           >
//             Shop
//           </a>
//           <NavLink 
//             to='/Contact' 
//             className={({ isActive }) => `px-8 py-3 text-lg ${isActive ? "text-blue-600" : "text-black"} hover:bg-gray-50`}
//             onClick={closeMenu}
//           >
//             Contact
//           </NavLink>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


import { logo } from "../assets/images";
import { Fragment, useState } from 'react'
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  TabGroup,
  TabPanel,
  TabPanels,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'


const navigation = {
  categories: [
    {
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt: 'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt: 'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt: 'Model wearing minimalist watch with black wristband and white watch face.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-category-04.jpg',
          imageAlt: 'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },
      ],
    },
    {
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
          imageAlt: 'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
          imageAlt: 'Model wearing light heather gray t-shirt.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
          imageAlt:
            'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc: 'https://tailwindcss.com/plus-assets/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
          imageAlt: 'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
        },
      ],
    },
  ],
  pages: [
    // { name: 'About', href: '/About' },
    // { name: 'Contact', href: '/Contact' },
    
  ],
}

const Navbar = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className="bg-transparent">
      {/* Mobile menu */}
      <Dialog open={open} onClose={setOpen} className="relative z-40 lg:hidden">
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-black/25 transition-opacity duration-300 ease-linear data-[closed]:opacity-0"
        />
        <div className="fixed inset-0 z-40 flex">
          <DialogPanel
            transition
            className="relative flex w-full max-w-l transform flex-col overflow-y-auto bg-blue-300 pb-12 shadow-xl transition duration-300 ease-in-out data-[closed]:-translate-x-full"
          >
            <div className="flex px-4 pb-2 pt-5">
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="relative -m-2 inline-flex items-center justify-center rounded-md p-2 text-black"
              >
                <span className="absolute -inset-0.5" />
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="size-10" />
              </button>
            </div>

            {/* Links */}
            <TabGroup className="mt-2">
           
              <TabPanels as={Fragment}>
                {navigation.categories.map((category) => (
                  <TabPanel key={category.name} className="space-y-12 px-4 py-6">
                    <div className="grid grid-cols-2 gap-x-4 gap-y-10">
                      {category.featured.map((item) => (
                        <div key={item.name} className="group relative">
                          <img
                            alt={item.imageAlt}
                            src={item.imageSrc}
                            className="aspect-square w-full rounded-md bg-white object-cover group-hover:opacity-75"
                          />
                          <a href={item.href} className="mt-6 block text-sm sm:text-4xl font-medium text-gray-900">
                            <span aria-hidden="true" className="absolute inset-0 z-10" />
                            {item.name}
                          </a>
                          <p aria-hidden="true" className="mt-1 text-sm sm:text-2xl text-white font-bold">
                            Shop now
                          </p>
                        </div>
                      ))}
                    </div>
                  </TabPanel>
                ))}
              </TabPanels>
            </TabGroup>

            <div className="space-y-6 border-t border-gray-200 px-4 py-6 font-xl sm:font-4xl">
              {navigation.pages.map((page) => (
                <div key={page.name} className="flow-root">
                  <a href={page.href} className="-m-2 block p-2 text-xl sm:text-4xl font-medium text-gray-900">
                    {page.name}
                  </a>
                </div>
              ))}
            </div>
   <div className="px-4 font-xl sm:font-2xl">
              <a
            href="https://10zpwk-n0.myshopify.com"
            target="_blank"
            rel="noopener noreferrer"
            className="-m-2 block p-2 text-xl sm:text-4xl font-medium text-gray-900"
          >
            Shop
          </a>
              </div>
        
         
          </DialogPanel>
        </div>
      </Dialog>

      <header className="relative">
        <nav aria-label="Top">
       

          {/* Secondary navigation */}
          <div className="bg-black py-0 sm:py-4">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
              <div className="">
                <div className="flex h-10 items-center justify-between">
                  {/* Logo (lg+) */}
                  <div className="hidden lg:flex lg:flex-1 lg:items-center">
                    <a href="/">
              
                      <img
                        alt="logo"
                        src={logo}
                        className="h-12 w-auto"
                      />
                    </a>
                  </div>

                  <div className="hidden h-full lg:flex">
                    {/* Flyout menus */}
                    <PopoverGroup className="inset-x-0 bottom-0 px-4">
                      <div className="flex h-full justify-center space-x-8 ">
                        {navigation.categories.map((category) => (
                          <Popover key={category.name} className="flex">
                            <div className="relative flex">
                              <PopoverButton className="group relative flex items-center justify-center text-xl sm:text-2xl font-medium text-gray-300 transition-colors duration-200 ease-out hover:text-orange-600 data-[open]:text-indigo-600">
                                {category.name}
                                <span
                                  aria-hidden="true"
                                  className="absolute inset-x-0 -bottom-px z-30 h-0.5 transition duration-200 ease-out group-data-[open]:bg-indigo-600"
                                />
                              </PopoverButton>
                            </div>
                            <PopoverPanel
                              transition
                              className="absolute inset-x-0 top-full z-20 w-full bg-red sm:text-2xl text-md font-medium text-gray-500 transition data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                              {/* Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow */}
                              <div aria-hidden="true" className="absolute inset-0 top-1/2 bg-transparent shadow" />
                              <div className="relative bg-transparent">
                                <div className="mx-auto max-w-7xl px-8">
                                  <div className="grid grid-cols-4 gap-x-8 gap-y-10 py-16">
                                    {category.featured.map((item) => (
                                      <div key={item.name} className="group relative">
                                        <img
                                          alt={item.imageAlt}
                                          src={item.imageSrc}
                                          className="aspect-square w-full rounded-md bg-transparent object-cover group-hover:opacity-75"
                                        />
                                        <a href={item.href} className="mt-4 block font-medium sm:text-2xl text-gray-900">
                                          <span aria-hidden="true" className="absolute inset-0 z-10" />
                                          {item.name}
                                        </a>
                                        <p aria-hidden="true" className="mt-1 sm:text-2xl font-medium">
                                          Shop now
                                        </p>
                                      </div>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </PopoverPanel>
                          </Popover>
                        ))}
                        {navigation.pages.map((page) => (
                          <a
                            key={page.name}
                            href={page.href}
                            className="flex items-center text-l font-medium sm:text-2xl text-gray-700 hover:text-gray-800"
                          >
                            {page.name}
                          </a>
                        ))}
                      </div>
                    </PopoverGroup>
                  </div>

                  {/* Mobile menu and search (lg-) */}
                  <div className="flex flex-1 items-center lg:hidden p-2">
                    <button
                      type="button"
                      onClick={() => setOpen(true)}
                      className="-ml-2 rounded-md bg-transparent p-2 text-gray-100 "
                    >
                      <span className="sr-only">Open menu</span>
                      <Bars3Icon aria-hidden="true" className="size-16" />
                    </button>

        
                  </div>

                  {/* Logo (lg-) */}
                  <a href="/" className="lg:hidden ">
                    <span className="sr-only">Your Company</span>
                    <img
                      alt="logo"
                      src={logo}
                      className="h-18 w-auto"
                    />
                  </a>

                 
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar;