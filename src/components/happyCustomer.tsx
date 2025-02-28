import { Separator } from "./ui/separator";

const HappyCustomer = () => {
  return (
    <div className='container mx-auto my-12'>
      <Separator />
      <div className='grid grid-cols-3 my-12'>
        <div className='flex flex-col justify-evenly'>
          <p className='text-4xl'>15,000+ happy customers.</p>
          <p>Using Sublime everyday and loving it!</p>
        </div>
        <div className='flex gap-4 justify-evenly col-span-2 text-center'>
          <div>
            <p className='text-6xl'>24K</p>
            <p className='uppercase'>trusted Reviews</p>
          </div>
          <div>
            <p className='text-6xl'>96%</p>
            <p className='uppercase'>customer satısfactıon</p>
          </div>
          <div>
            <p className='text-6xl'>32K</p>
            <p className='uppercase'>Expenses saved</p>
          </div>
        </div>
      </div>
      <Separator />
    </div>
  );
};

export default HappyCustomer;
