import * as React from "react";
import Link from "next/link";
import {MdKeyboardArrowDown} from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import {MdClose} from "react-icons/md";
import {CiSearch} from "react-icons/ci";
import { FaGlobe } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import {CiHeart} from "react-icons/ci";
import {CiShoppingCart} from "react-icons/ci";
import {HiMenuAlt3} from "react-icons/hi";


const styles ={
    navText: "text-gray-200",
    navIcon: "text-2xl text-white"
}



export function NavBar (){
    const [showDropDown, setShowDropDown] = React.useState(true);
    const [showNav, setShowNav] = React.useState(true);
    const [dropDown, setDropDown] = React.useState(true);

    return(

        <>
            <nav className="min-h-[60px] bg-[#114232] md:flex flex justify-between items-center border-b border-amber-500 px-3 lg:px-10">
                <ul className="md:flex hidden gap-5">
                    <li><Link className={`${styles.navText} hover:border-b`} href="#">Home</Link></li>
                    <li><Link className={`${styles.navText} hover:border-b`} href="#">Showroom</Link></li>
                    <li><Link className={`${styles.navText} hover:border-b`} href="#">Contact Us</Link></li>
                    <li><Link className={`${styles.navText} hover:border-b`} href="#">About Us</Link></li>
                </ul>
                
                <div>
                    <Link className="flex items-center gap-1" href="#">
                        <h1 className={`text-3xl ${styles.navText}`}>WFH</h1>
                        <FaStar className={`${styles.navIcon}`}/>                
                    </Link>
                </div>

                {/* for mobile */}
                <div className="flex justify-end items-center text-gray-200 text-3xl md:hidden">
                    <HiMenuAlt3 onClick={()=> setShowNav(false)} className={`${showNav ? 'flex' : 'hidden'} md:hidden`} />
                    <MdClose onClick={()=> setShowNav(true)} className={`${!showNav ? 'flex' : 'hidden'} `}/>
                </div>
                {/* for mobile */}



                <div className="md:flex hidden gap-4">
                    <blockquote className="flex items-center">
                        <FaGlobe className={`${styles.navIcon}`} />
                        <span className={`${styles.navText}`}>English</span>
                        <MdKeyboardArrowDown onClick={()=> setShowDropDown(false)} className={`${showDropDown ? 'flex' : 'hidden'} ${styles.navIcon}`}/>
                        <MdKeyboardArrowUp onClick={()=> setShowDropDown(true)} className={`${!showDropDown ? 'flex' : 'hidden'} ${styles.navIcon}`}/>
                    </blockquote>
                    <blockquote className="flex items-center">
                        <span className={`${styles.navText}`}>Nigeria</span>
                        <MdKeyboardArrowDown onClick={()=> setDropDown(false)} className={`${dropDown ? 'flex' : 'hidden'} ${styles.navIcon}`}/>
                        <MdKeyboardArrowUp onClick={()=> setDropDown(true)} className={`${!dropDown ? 'flex' : 'hidden'} ${styles.navIcon}`}/>
                    </blockquote>
                    <ul className="flex gap-1">
                        <li><Link className={`${styles.navIcon}`} href="#"><CiSearch/></Link></li>
                        <li><Link className={`${styles.navIcon}`} href="#"><CiHeart/></Link></li>
                        <li><Link className={`${styles.navIcon}`} href="#"><CiShoppingCart/></Link></li>
                    </ul>
                </div>
            </nav>
            
            {/* Dropdown on nav */}
            <div className={`${!showDropDown ? 'flex' : 'hidden'} absolute z-20 right-2 max-sm   top-[46px] border rounded-md shadow-lg bg-slate-300 px-5`}>
                <ul className="flex flex-col gap-4">
                    <li><Link href="#">French</Link></li>
                    <li><Link href="#">Arabic</Link></li>
                    <li><Link href="#">Igbo</Link></li>
                    <li><Link href="#">Yoruba</Link></li>
                    <li><Link href="#">Hausa</Link></li>
                </ul>
            </div>

            <div className={`${!dropDown ? 'flex' : 'hidden'} flex justify-end`}>
                    <ul>
                        <li><Link href="#">USA</Link></li>
                        <li><Link href="#">Great Britain</Link></li>
                        <li><Link href="#">UAE</Link></li>
                        <li><Link href="#">France</Link></li>
                    </ul>
                
            </div>
            {/* Dropdown on nav */}
            


            {/* Mobile nav */}
            <div className={`${!showNav ? 'flex' : 'hidden'} bg-[#87A922] lg:hidden flex flex-col justify-center items-center text-2xl absolute z-10 w-full `}>
                <ul className="flex flex-col items-center ">
                    <li><Link className={`text-white hover:border-b`} href="#">Home</Link></li>
                    <li><Link className={`text-white hover:border-b`} href="#">Showroom</Link></li>
                    <li><Link className={`text-white hover:border-b`} href="#">Contact Us</Link></li>
                    <li><Link className={`text-white hover:border-b`} href="#">About Us</Link></li>
                </ul>
                <ul className="flex gap-3 items-center py-3">
                    <li><Link className={`text-white`} href="#"><CiSearch/></Link></li>
                    <li><Link className={`text-white`} href="#"><CiHeart/></Link></li>
                    <li><Link className={`text-white`} href="#"><CiShoppingCart/></Link></li>
                </ul>
                <div className="flex gap-3">
                    <blockquote className="flex items-center">
                        <FaGlobe className={`text-[#114232]`} />
                        <span className={`text-white`}>English</span>
                        <MdKeyboardArrowDown onClick={()=> setShowDropDown(false)} className={`${showDropDown ? 'flex' : 'hidden'} text-white`}/>
                        <MdKeyboardArrowUp onClick={()=> setShowDropDown(true)} className={`${!showDropDown ? 'flex' : 'hidden'} text-white`}/>
                    </blockquote>
                    <blockquote className="flex items-center">
                        <span className={`text-white`}>USA</span>
                        <MdKeyboardArrowDown className={`text-white`}/>
                    </blockquote>
                </div>
            </div>
        
        </>

        
    )
}