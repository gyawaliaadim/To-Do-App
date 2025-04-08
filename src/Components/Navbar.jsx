import React from "react";

const Navbar=()=>{
    return(

        <nav className="h-max primaryBackgroundColor center w-full p-2">
            <ul className="flex justify-around items-center w-full font-bold">
                <li className="hover-style-heading px-5"><h2>Todo</h2></li>
                <li className="hover-style-heading px-5 flex items-center ">Made By - <h2>Aadim Gyawali</h2></li>
                <li className="hover-style-heading px-5 flex items-center max-[645px]:hidden">Tech Stack - <h2>HTML, Tailwind CSS, React</h2></li>
            </ul>
        </nav>
    )
}
export default Navbar;