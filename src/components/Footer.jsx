import { FaFacebook, FaInstagram, FaPhone, FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

export function Footer() {
    return (
        <div>
            <div className="bg-gray-900 text-white p-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-4 lg:gap-0">
                    <div className="mb-4 md:mb-0">
                        <h2 className="text-lg font-semibold">Contact Us</h2>
                        <p className="flex items-center"> <IoMdMail /><b>Email: &nbsp;</b> example@email.com</p>
                        <p className="flex items-center"> <FaPhone /><b>Phone: &nbsp;</b>  +123 456 7890</p>
                    </div>

                    <div className="mb-4 md:mb-0">
                        <h2 className="text-lg font-semibold">Follow Us</h2>
                        <div className="flex space-x-4">
                            <a href="#" className="hover:text-blue-500 flex items-center">Instagram <FaInstagram /> </a>
                            <a href="#" className="hover:text-blue-500 flex items-center">Facebook <FaFacebook /> </a>
                            <a href="#" className="hover:text-blue-500 flex items-center">Twitter <FaTwitter /></a>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg font-semibold">Legal</h2>
                        <ul>
                            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
                            <li><a href="#" className="hover:underline">Refund Policy</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="bg-gray-800 text-white text-center p-2 font-semibold">
                Copyright © 2024 - All right reserved
            </div>
        </div>
    )
}