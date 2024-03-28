import Link from "next/link";
import { FaRegCopyright } from "react-icons/fa";
import {FaInstagram} from 'react-icons/fa';
import {FaFacebook} from 'react-icons/fa';
import { FaLinkedin } from "react-icons/fa";
import {FaXTwitter} from 'react-icons/fa6';

const styles = {
    footerText: 'text-sm text-white',
    socialIcons: 'text-lg text-white'
}

export function Footer (){
    return(
        <>
            <footer className="min-h-[60px] flex flex-col gap-3 lg:flex-row  lg:justify-between items-center bg-[#87A922] px-10">
                <ul className="flex flex-col items-center lg:flex-row gap-2 lg:gap-4 ">
                    <li className={`${styles.footerText}`}><Link href="#">Privacy Policy</Link></li>
                    <li className={`${styles.footerText}`}><Link href="#">Terms of Use</Link></li>
                    <li className={`${styles.footerText}`}><Link href="#">Cookie Policy</Link></li>
                    <li className={`${styles.footerText}`}><Link href="#">FAQ</Link></li>
                </ul>
                <ul className="flex gap-5">
                    <li className={`${styles.socialIcons}`}><Link href="#"><FaFacebook/></Link></li>
                    <li className={`${styles.socialIcons}`}><Link href="#"><FaInstagram/></Link></li>
                    <li className={`${styles.socialIcons}`}><Link href="#"><FaXTwitter/></Link></li>
                    <li className={`${styles.socialIcons}`}><Link href="#"><FaLinkedin/></Link></li>
                </ul>
                <div className="flex gap-2 items-center">
                    <FaRegCopyright className="text-white"/>
                    <span className={`${styles.footerText}`}>{new Date().getFullYear()}</span>
                    <p className={`${styles.footerText}`}>WFH Co. Limited</p>
                </div>
            </footer>
        </> 
    )
}