import "../output.css";
import logo from "../extras/logo.svg";

const Navbar = () => {
    return ( 
        <div className="w-screen flex justify-between items-center lg:px-36 md:px-16 px-4 py-2 fixed">
            <img src={logo} alt="logo" className="h-16 md:h-20"/>
            <button className="md:flex hidden no-underline rounded-lg text-white font-medium hover:text-[#7DEDDD] bg-black bg-opacity-60 hover:bg-black rounded-xl py-[10px] px-[30px]">Uni Paychek</button>
            <div className="flex md:hidden"><svg width="31" height="20" viewBox="0 0 31 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="31" height="2" fill="white"></rect><rect width="31" height="2" fill="white"></rect><rect width="31" height="2" fill="white"></rect><rect y="9" width="31" height="2" fill="white"></rect><rect y="9" width="31" height="2" fill="white"></rect><rect y="9" width="31" height="2" fill="white"></rect><rect y="18" width="31" height="2" fill="white"></rect><rect y="18" width="31" height="2" fill="white"></rect><rect y="18" width="31" height="2" fill="white"></rect></svg></div>
        </div>
     );
}
 
export default Navbar;