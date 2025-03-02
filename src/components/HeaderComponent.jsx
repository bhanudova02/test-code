import { CiSearch } from "react-icons/ci";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";

export function HeaderComponent() {
    return (
        <header className="fixed top-0 w-full bg-white z-50">
            <div className="py-2 p-2 md:px-6 shadow flex justify-between">
                <img src="logo.png" width="100%" alt="logo" className="w-20 object-contain md:w-28" />
            
                <div className="hidden md:flex items-center ">
                    <ul className="flex items-center gap-4 font-medium">
                        <li>Home</li>
                        <li>Shop</li>
                        <li>Cart</li>
                        <li>Contact Us</li>
                        <li>
                            <Link to="/login">
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="flex md:hidden items-center justify-center">
                    <Sidebar />
                </div>
            </div>

        </header>
    )
}