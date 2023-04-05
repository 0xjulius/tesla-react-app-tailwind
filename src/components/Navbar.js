import React, { useState } from "react";
import { TfiClose } from "react-icons/tfi";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <div>
            <div className="flex justify-between items-center font-bold px-12 p-4 text-sm ">
                <div>
                    <a href="#">
                        <img
                            className="h-3"
                            src="data:image/svg+xml;base64,PHN2ZyBjbGFzcz0idGRzLWljb24gdGRzLWljb24tbG9nby13b3JkbWFyayB0ZHMtc2l0ZS1sb2dvLWljb24iIHZpZXdCb3g9IjAgMCAzNDIgMzUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTAgLjFhOS43IDkuNyAwIDAgMCA3IDdoMTFsLjUuMXYyNy42aDYuOFY3LjNMMjYgN2gxMWE5LjggOS44IDAgMCAwIDctN0gwem0yMzguNiAwaC02Ljh2MzQuOEgyNjNhOS43IDkuNyAwIDAgMCA2LTYuOGgtMzAuM1Ywem0tNTIuMyA2LjhjMy42LTEgNi42LTMuOCA3LjQtNi45bC0zOC4xLjF2MjAuNmgzMS4xdjcuMmgtMjQuNGExMy42IDEzLjYgMCAwIDAtOC43IDdoMzkuOXYtMjFoLTMxLjJ2LTdoMjR6bTExNi4yIDI4aDYuN3YtMTRoMjQuNnYxNGg2Ljd2LTIxaC0zOHpNODUuMyA3aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxMy44aDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3ptMCAxNC4xaDI2YTkuNiA5LjYgMCAwIDAgNy4xLTdINzguM2E5LjYgOS42IDAgMCAwIDcgN3pNMzA4LjUgN2gyNmE5LjYgOS42IDAgMCAwIDctN2gtNDBhOS42IDkuNiAwIDAgMCA3IDd6IiBmaWxsPSJjdXJyZW50Q29sb3IiLz48L3N2Zz4="
                            alt="Tesla logo"
                        />
                    </a>
                </div>
                <div className="hidden lg:inline">
                    <ul className="flex justify-center hover:cursor-pointer">
                        <li className='py-1 px-3 hover:rounded hover:bg-black/5 transition-color duration-300'><a href='#'>Model S</a></li>
                        <li className='py-1 px-3 hover:rounded hover:bg-black/5 transition-color duration-300'><a href='#'>Model 3</a></li>
                        <li className='py-1 px-3 hover:rounded hover:bg-black/5 transition-color duration-300'><a href='#'>Model X</a></li>
                        <li className='py-1 px-3 hover:rounded hover:bg-black/5 transition-color duration-300'><a href='#'>Model Y</a></li>
                        <li className='py-1 px-3 hover:rounded hover:bg-black/5 transition-color duration-300'><a href='#'>Solar Roof</a></li>
                        <li className='py-1 px-3 hover:rounded hover:bg-black/5 transition-color duration-300'><a href='#'>Solar Panels</a></li>
                        <li className='py-1 px-3 hover:rounded hover:bg-black/5 transition-color duration-300'><a href='#'>Powerwall</a></li>
                    </ul>
                </div>
                <div className="hidden lg:inline">
                    <ul className="flex justify-center hover:cursor-pointer">
                        <li className='py-1 px-3 hover:rounded hover:bg-black/5 transition-color duration-300'><a href='#'>Shop</a></li>
                        <li className='py-1 px-3 hover:rounded hover:bg-black/5 transition-color duration-300'><a href='#'>Account</a></li>
                        <li onClick={handleNav} className='py-1 px-3 hover:rounded hover:bg-black/5 transition-color duration-300'>Menu</li>
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
