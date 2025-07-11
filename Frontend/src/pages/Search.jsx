import { IoSearch } from 'react-icons/io5';
import CourseCard from '../component/CourseCard';
import courseDetails from '../assets/courseDetails';
import { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');

  const filteredList = courseDetails.filter(item =>
    item.title?.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className='px-4 md:px-12 lg:px-24 py-10 lg:py-18 h-full'>
      {/* Search Bar */}
      <div className='flex items-center gap-2 border-b border-[#E3E3E3]'>
        <IoSearch className='w-8 h-8' />
        <input
          type="text"
          placeholder='Search here'
          className='w-full outline-none font-normal text-[32px] text-[#3E3E3E]'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>

      {/* Search Result */}
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center py-10'>
        {filteredList.length > 0 ? (
          <CourseCard courseDetails={filteredList} />
        ) : (
          <p className='col-span-full text-center text-gray-500 text-xl'>No courses found.</p>
        )}
      </div>
    </div>
  );
}

export default Search;
