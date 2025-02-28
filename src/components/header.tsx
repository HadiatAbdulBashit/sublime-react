import logo from "@/assets/img/logo.png";
import logo1 from "@/assets/img/icon/1.png";
import NavHeader from "./nav-header";
import { Button } from "./ui/button";
import { FaFacebook, FaPinterest, FaTelegram } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";

const Header = () => {
  return (
    <>
      <div className='bg-black'>
        <div className='container mx-auto text-white py-2'>
          <div className='flex justify-between'>
            <div className='flex gap-2 items-center'>
              <img src={logo1} alt='mhee' className='h-4' />
              <p>The banner is to inform visitors of an important message</p>
            </div>
            <div className='flex gap-2 items-center'>
              <a href='https://facebook.com'>
                <FaFacebook />
              </a>
              <a href='https://pinterest.com'>
                <FaPinterest />
              </a>
              <a href='https://instagram.com'>
                <AiFillInstagram />
              </a>
              <a href='https://telegram.com'>
                <FaTelegram />
              </a>
            </div>
          </div>
        </div>
      </div>
      <header className='sticky top-0 left-0 py-4 z-20 bg-white'>
        <div className='container flex justify-between mx-auto items-center'>
          <img src={logo} alt='Logo' className='h-10' />
          <nav className='hidden lg:block'>
            <NavHeader />
          </nav>
          <div className='flex gap-4'>
            <Button variant={"ghost"}>Sign In</Button>
            <Button variant={"default"} className='rounded-full'>
              Sign up for free
            </Button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
