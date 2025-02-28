import logo from "@/assets/img/logo.png";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <div className='container mx-auto mt-8'>
      <div className='my-8 flex justify-between'>
        <div className='flex flex-col gap-4 flex-shrink justify-center'>
          <img src={logo} alt='Logo' className='w-36' />
          <p>
            Powering business to streamline <br /> processes and grow sales.
          </p>
          <Button className='rounded-full w-fit' variant={"outline"}>
            (01) 0000 0000{" "}
          </Button>
        </div>
        <div className='flex gap-12 text-gray-600'>
          <nav className='flex flex-col gap-4'>
            <h3 className='uppercase font-semibold'>Product</h3>
            <a href='#'>Home</a>
            <a href='#'>About</a>
            <a href='#'>Pricing</a>
            <a href='#'>Blog</a>
            <a href='#'>Contact</a>
          </nav>
          <nav className='flex flex-col gap-4'>
            <h3 className='uppercase font-semibold'>Features</h3>
            <a href='#'>Blog Detail</a>
            <a href='#'>Login</a>
            <a href='#'>Sign Up</a>
            <a href='#'>404 Page</a>
          </nav>
        </div>
      </div>
      <Separator />
      <div className='flex justify-between py-8'>
        <p>Copyright ©2023 Flowbase.co</p>
        <div className='flex gap-4'>
          <a href='#'>Legal</a>
          <Separator orientation='vertical' />
          <a href='#'>Terms & Conditions</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
