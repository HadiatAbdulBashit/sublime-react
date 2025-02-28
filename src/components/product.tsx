import { GiFlowerStar } from "react-icons/gi";
import { TbNorthStar } from "react-icons/tb";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import { Case } from "./ui/card-infinite-scroll";

const Product = () => {
  return (
    <div>
      <BackgroundGradientAnimation containerClassName='py-24'>
        <div className='my-4 container mx-auto'>
          <p className='text-base mb-4'>SUBLIME PRODUCTS</p>
          <div className='flex gap-20 justify-between'>
            <p className='text-5xl max-w-md'>Provide powerful solutions at all times.</p>
            <div className='flex flex-col justify-evenly'>
              <div className='flex text-2xl gap-4'>
                <TbNorthStar />
                <GiFlowerStar />
              </div>
              <p className='max-w-md'>
                Use Sublime to streamline your processes, save time and effort and increase your sales exponentially.
              </p>
            </div>
          </div>
        </div>
        <div className='py-12 flex flex-col gap-8'>
          <Case />
          <Case />
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default Product;
