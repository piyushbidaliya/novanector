import React, { useEffect, useState } from 'react'
import newsDetails from '../../assets/newsDetails';
import { useParams } from 'react-router-dom';
import { FaRegClock, FaRegUser } from 'react-icons/fa6';
import { CiGlobe } from "react-icons/ci";
import { MdOutlineCategory, MdOutlineDateRange } from 'react-icons/md';
import NewsCard from '../../component/NewsCard';
import Heading from '../../component/ThunderHeading';

const newsInfoList = [
  { icon: <FaRegUser />, label: 'Instructor', value: 'Kevin Perry' },
  { icon: <MdOutlineDateRange />, label: 'Date', value: '20 May 2025' },
  { icon: <FaRegClock />, label: 'Duration', value: '30m 36s' },
  { icon: <MdOutlineCategory />, label: 'Category', value: 'Design' },
  { icon: <CiGlobe />, label: 'Language', value: 'English' },
];

const outcomes = [
  {
    text: "User-Centered Design (UCD)",
    subPoints: [
      "Focus on designing for the needs, goals, and behavior of your users.",
    ],
  },
  {
    text: "Visual Hierarchy",
    subPoints: [
      "Guide user attention through layout, typography, size, and color.",
    ],
  },
  {
    text: "Visual Hierarchy",
    subPoints: [
      "Guide user attention through layout, typography, size, and color.",
    ],
  },
  {
    text: "Consistency and Standards",
    subPoints: [
      "Maintain uniformity in UI elements for predictability and familiarity.",
    ],
  },
  {
    text: "Accessibility",
    subPoints: [
      "Design interfaces that are inclusive and usable for all users, including those with disabilities.",
    ],
  },
  {
    text: "Navigation and Information Architecture",
    subPoints: [
      "Organize content logically and create intuitive navigation flows.",
    ],
  },
  {
    text: "Simplicity and Clarity",
    subPoints: [
      "Minimize complexity—make interfaces easy to understand and interact with.",
    ],
  },

];

function NewsDetails() {
  const topThree = newsDetails.slice(0, 3)
  const { newsId } = useParams();
  const [news, setNews] = useState(null);

  useEffect(() => {
    const selected = newsDetails.find(news => String(news.id) === newsId);
    setNews(selected);
  }, [newsId]);
  return (
    <div className='px-4 md:px-12 lg:px-24 py-10 h-full'>
      {news ? (
        <>
          {/* banner */}
          <div className='h-[392px]'>
            <img src={news.image} alt="" className='w-full h-full rounded-[8px] object-cover' />
          </div>

          {/* right + left sidebar */}
          <div className='flex flex-col lg:flex-row gap-6 items-start py-4'>
            {/* left section */}
            <div className='w-full lg:w-3/4 space-y-6'>
              <h1 className='font-medium text-[28px]'>{news.title}</h1>
              <h3 className='font-medium text-[20px]'>Overview</h3>
              <ul className="list-disc px-4">
                {outcomes.map((outcome, index) => (
                  <li key={index} className="text-[#07A069] mb-2">
                    <p className="font-normal text-[18px] text-[#6F6F6F]">{outcome.text}</p>

                    {outcome.subPoints && (
                      <ul className="mt-1">
                        {outcome.subPoints.map((point, subIndex) => (
                          <li key={subIndex} className="text-[#6F6F6F] text-[16px] font-normal">
                            {point}
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>

            </div>
            {/* right section */}
            <div className='w-full lg:w-1/4 space-y-6'>

              {/* top 1 */}
              <div className='border border-[#E3E3E3] p-4 rounded-[8px] space-y-2'>
                <p className='font-normal text-[24px]'>News Information</p>
                {newsInfoList.map((item, index) => (
                  <div key={index}>
                    <div className='flex justify-between font-normal text-[16px] py-4'>
                      <div className='flex gap-2 items-center'>
                        {item.icon}
                        <p>{item.label}:</p>
                      </div>
                      <p>{item.value}</p>
                    </div>
                    {/* Divider except after last item */}
                    {index !== newsInfoList.length - 1 && (
                      <div className='border-b border-[#E3E3E3]'></div>
                    )}
                  </div>
                ))}
              </div>

            </div>
          </div>

          {/* news updated */}
          <div className='py-10'>
            <div className='flex justify-center flex-col items-center'>
              <Heading title="News" />
              <h1 className='font-medium text-[26px] md:text-[40px] pb-6'>News Updates</h1>
            </div>
            <div className='grid gird-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-center'>
              <NewsCard newsDetails={topThree} />
            </div>
          </div>
        </>
      ) : (
        <p>Loading course details...</p>

      )}

    </div>
  )
}

export default NewsDetails
