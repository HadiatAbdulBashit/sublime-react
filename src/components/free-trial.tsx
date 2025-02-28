import { FaCheckCircle } from "react-icons/fa";
import { GiFlowerStar } from "react-icons/gi";
import { TbNorthStar } from "react-icons/tb";
import { Button } from "./ui/button";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";

const FreeTrial = () => {
  return (
    <BackgroundGradientAnimation>
      <div className='container mx-auto py-24'>
        <div className='my-4'>
          <div className='flex gap-20 justify-between flex-col md:flex-row'>
            <div>
              <p className='text-6xl max-w-md'>
                Start your <br /> 7-day free trial
              </p>
              <div className='flex gap-6 mt-4'>
                <div className='flex gap-2 items-center'>
                  <FaCheckCircle />
                  <p>Free 7-day trial</p>
                </div>
                <div className='flex gap-2 items-center'>
                  <FaCheckCircle />
                  <p>No credit card required</p>
                </div>
              </div>
            </div>
            <div className='flex flex-col justify-end gap-4'>
              <div className='flex text-2xl gap-4'>
                <TbNorthStar />
                <GiFlowerStar />
              </div>
              <div className='flex gap-8 items-center'>
                <Button size={"lg"} className='rounded-full h-full py-4'>
                  Learn More
                </Button>
                <div>
                  <p>4.80/5</p>
                  <p>From 300+ Customer Reviews</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
};

export default FreeTrial;
