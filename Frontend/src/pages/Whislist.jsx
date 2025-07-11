import React from 'react';
import Heading from '../component/ThunderHeading';
import CourseCard from '../component/CourseCard';
import { useCart } from '../context/CartContext'; // assuming context is stored here

function Whislist() {
  const { wishlistItems } = useCart(); // get wishlist from context

  return (
    <section className='px-4 md:px-12 lg:px-24 py-10 lg:py-18 h-full'>
      <div className='flex justify-center flex-col items-center'>
        <h1 className='font-medium text-[26px] md:text-[40px]'>Wishlist</h1>
        <p className='text-[16px] font-normal text-[#6F6F6F] text-center px-4 md:px-24 pb-10'>
          Your wishlist is your personal space to save the courses that interest you most. Easily keep track of what you want to learn next and 
          come back anytime to continue your journey when you're ready.
        </p>
        <Heading title="Our Wishlist" />
        <h1 className='font-medium text-[26px] md:text-[40px] pb-6'>Your Learning Wishlist Hub</h1>
      </div>

      {wishlistItems.length > 0 ? (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center'>
          <CourseCard courseDetails={wishlistItems} />
        </div>
      ) : (
        <p className='text-center text-gray-500 text-lg'>No courses added to wishlist yet.</p>
      )}
    </section>
  );
}

export default Whislist;
