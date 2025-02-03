import { Item } from "@radix-ui/react-select";
import Link from "next/link";
import {FaYoutube, FaInstagram, FaFacebook} from 'react-icons/fa'

const socials = [
    { icons: <FaYoutube />, path: "https://www.youtube.com/@psico.rochadelpriscila" },
    { icons: <FaInstagram />, path: "https://www.instagram.com/psico.priscila_rochadel?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" },
    { icons: <FaFacebook />, path: "https://www.facebook.com/priscila.rochadel" },
]

const Social = ({containerStyle, iconStyles}) => {
    return (
        <div className={containerStyle}>
            {socials.map((item, index) => {
                return (
                    <Link key={index} href={item.path} className={iconStyles}>
                        {item.icons}
                    </Link>
                );
            })}
        </div>
    );
};

export default Social;