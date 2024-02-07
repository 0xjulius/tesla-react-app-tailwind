import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <div className="flex justify-between items-center font-bold px-12 p-4 text-sm">
                <div>
                    <a href="#">
                        <img
                            className="h-6" // Adjust the height class to make the logo bigger, e.g., "h-6" for a larger size
                            src="https://imgs.search.brave.com/H3IsAELnqth7xZwVhHaSi2HhQL7DIk58JPIt3ux5lAk/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nby53aW5lL2Ev/bG9nby9UZXNsYSxf/SW5jLi9UZXNsYSxf/SW5jLi1Mb2dvbWFy/ayZXb3JkbWFyay1C/bGFjay1Mb2dvLndp/bmUuc3Zn.svg"
                            alt="Tesla logo"
                            style={{ height: '100px' }} // Alternatively, you can use inline styles to set the height directly
                        />
                    </a>
                </div>
                <div className="hidden lg:inline">
                    <ul className="flex justify-center hover:cursor-pointer">
                        <li className='py-1 px-3 hover:rounded hover:bg-black/5 animate__animated animate__fadeIn transition-color duration-300'><a href='#'>Model S</a></li>
                        <li className='py-1 px-3 hover:rounded hover:bg-black/5 animate__animated animate__fadeIn transition-color duration-300'><a href='#'>Model 3</a></li>
                        <li className='py-1 px-3 hover:rounded hover:bg-black/5 animate__animated animate__fadeIn transition-color duration-300'><a href='#'>Model X</a></li>
                        <li className='py-1 px-3 hover:rounded hover:bg-black/5 animate__animated animate__fadeIn transition-color duration-300'><a href='#'>Model Y</a></li>
                        <li className='py-1 px-3 hover:rounded hover:bg-black/5 animate__animated animate__fadeIn transition-color duration-300'><a href='#'>Solar Roof</a></li>
                        <li className='py-1 px-3 hover:rounded hover:bg-black/5 animate__animated animate__fadeIn transition-color duration-300'><a href='#'>Solar Panels</a></li>
                        <li className='py-1 px-3 hover:rounded hover:bg-black/5 animate__animated animate__fadeIn transition-color duration-300'><a href='#'>Powerwall</a></li>
                    </ul>
                </div>
                <div className="hidden lg:inline">
                    <ul className="flex justify-center hover:cursor-pointer">
                        <li className='py-1 px-3 hover:rounded hover:bg-black/5 animate__animated animate__fadeIn transition-color duration-300'><a href='#'>Shop</a></li>
                        <li className='py-1 px-3 hover:rounded hover:bg-black/5 animate__animated animate__fadeIn transition-color duration-300'><a href='#'>Account</a></li>
                        <li onClick={handleNav} className='py-1 px-3 hover:rounded hover:bg-black/5 animate__animated animate__fadeIn transition-color duration-300'>Menu</li>
                    </ul>
                </div>
                <div className="lg:hidden">
                    <button onClick={handleNav} className="inline-flex items-center rounded-md py-2 px-4 p-2 text-sm font-medium bg-black/5 shadow-sm hover:bg-black/10">
                        Menu
                    </button>
                </div>

                <div
                    className={
                        nav
                            ? "bg-white absolute right-0 top-0 w-80 h-full z-10"
                            : "fixed right-[-100%]"
                    }
                >
                    <div className="flex justify-end pr-8 pt-8">
                        <TfiClose onClick={handleNav} className="rounded p-1 hover:bg-black/5" size={28} />
                    </div>
                    <ul className="pt-8 px-6">
                        <a href="#"><li className='py-3 pl-3 hover:rounded hover:bg-black/5 transition-color duration-300'>Model S</li></a>
                        <a href="#"><li className='py-3 pl-3 hover:rounded hover:bg-black/5 transition-color duration-300'>Model 3</li></a>
                        <a href="#"><li className='py-3 pl-3 hover:rounded hover:bg-black/5 transition-color duration-300'>Model X</li></a>
                        <a href="#"><li className='py-3 pl-3 hover:rounded hover:bg-black/5 transition-color duration-300'>Model Y</li></a>
                        <a href="#"><li className='py-3 pl-3 hover:rounded hover:bg-black/5 transition-color duration-300'>Solar Roof</li></a>
                        <a href="#"><li className='py-3 pl-3 hover:rounded hover:bg-black/5 transition-color duration-300'>Solar Panels</li></a>
                        <a href="#"><li className='py-3 pl-3 hover:rounded hover:bg-black/5 transition-color duration-300'>Existing Inventory</li></a>
                        <a href="#"><li className='py-3 pl-3 hover:rounded hover:bg-black/5 transition-color duration-300'>Used Inventory</li></a>
                        <a href="#"><li className='py-3 pl-3 hover:rounded hover:bg-black/5 transition-color duration-300'>Trade-In</li></a>
                        <a href="#"><li className='py-3 pl-3 hover:rounded hover:bg-black/5 transition-color duration-300'>Demo Drive</li></a>
                        <a href="#"><li className='py-3 pl-3 hover:rounded hover:bg-black/5 transition-color duration-300'>Insurance</li></a>
                        <a href="#"><li className='py-3 pl-3 hover:rounded hover:bg-black/5 transition-color duration-300'>Cybertruck</li></a>
                        <a href="#"><li className='py-3 pl-3 hover:rounded hover:bg-black/5 transition-color duration-300'>Roadster</li></a>
                        <a href="#"><li className='py-3 pl-3 hover:rounded hover:bg-black/5 transition-color duration-300'>Semi</li></a>
                        <a href="#"><li className='py-3 pl-3 hover:rounded hover:bg-black/5 transition-color duration-300'>Charger</li></a>
                        <a href="#"><li className='py-3 pl-3 hover:rounded hover:bg-black/5 transition-color duration-300'>Commercial Energy</li></a>
                        <a href="#"><li className='py-3 pl-3 hover:rounded hover:bg-black/5 transition-color duration-300'>Utilities</li></a>
                        <a href="#"><li className='py-3 pl-3 hover:rounded hover:bg-black/5 transition-color duration-300'>Find Us</li></a>
                        <a href="#"><li className='py-3 pl-3 hover:rounded hover:bg-black/5 transition-color duration-300'>Support</li></a>
                        <a href="#"><li className='py-3 pl-3 hover:rounded hover:bg-black/5 transition-color duration-300'>Investor Relations</li></a>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
