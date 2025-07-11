import React from 'react'
import CartItems from '../component/CartItems'
import courseDetails from '../assets/courseDetails';
import CourseCard from '../component/CourseCard';

function Cart() {
  const topThree = courseDetails.slice(0, 3);

  return (
    <section className='px-4 md:px-12 lg:px-24 py-10 lg:py-18 h-full'>
        <div className=''>
            <h1 className='font-semibold text-[48px] leading-[100%] tracking-normal pb-6'>Shopping Cart</h1>
          <CartItems/>
        </div>
        <div className='py-[30px] px-4 sm:px-10 md:px-24 font-[Manrope] flex flex-col'>
          <p className='font-bold text-[18px] leading-[100%] tracking-normal text-[#1C4ED9] pb-2 text-center uppercase'>Explore Recommended Courses</p>
          <h1 className='font-semibold text-[48px] leading-[100%] tracking-normal text-[#292929] pb-2 text-center'>You Might Also Like</h1>
          <p className='font-normal text-[18px] leading-[100%] tracking-normal text-[#6F6F6F] pb-10 text-center'>Discover personalized course recommendations curated to match your interests and learning goals.</p>
        </div>
        <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center'>
          <CourseCard courseDetails={topThree}/>
        </div>
    </section>
  )
}

export default Cart
