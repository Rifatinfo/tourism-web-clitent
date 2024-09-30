import { useState } from "react";
import { IoClose } from "react-icons/io5";
import { RiMenuAddFill } from "react-icons/ri";

const Navbar = () => {
    const Links = [
        { name: 'Home', link: '/' },
        { name: 'All Tourists Spot', link: '/all-tourists-sport' },
        { name: 'Add Tourists Spot', link: '/add-tourists-spot' },
        { name: 'My List', link: '/my-list' }
    ];

    const [open, setOpen] = useState(false);

    return (
        <div>
            <div className=" w-full bg-transparent top-0 left-0">
                <div className="md:flex items-center justify-between  py-4 md:px-10 px-7">
                    <div className="font-bold text-2xl cursor-pointer flex items-center text-gray-800">
                        React Nav
                    </div>
                    {/* React icon nav */}
                    <div
                        onClick={() => setOpen(!open)}
                        className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
                    >
                        {open ? <IoClose /> : <RiMenuAddFill />}
                    </div>
                    <ul
                        className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}
                    >
                        {Links.map((link, index) => (
                            <li key={index} className="md:ml-8 text-xl md:my-0 my-7">
                                <a href={link.link} className="text-gray-800 hover:text-gray-400 duration-500">{link.name}</a>
                            </li>
                        ))}

                    </ul>
                    <button className="hidden md:inline-block md:px-6 md:bg-purple-600 md:py-3 md:rounded-lg lg:rounded-xl text-white">
                        SignIn
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Navbar;