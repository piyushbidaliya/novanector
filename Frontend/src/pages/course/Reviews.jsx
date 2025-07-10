import React from 'react'
import user1 from '../../assets/img1.jpg'
import user2 from '../../assets/img2.jpg'
import { IoIosStar } from 'react-icons/io';

const reviews = [
  {
    name: 'Eleanor Fant',
    date: '06 March, 2025',
    time: '08:20 AM',
    rating: 5,
    comment: 'Mauris non dignissim purus, ac commodo diam...',
    image: user1,
  },
  {
    name: 'Hailey White',
    date: '10 March, 2025',
    time: '10:25 AM',
    rating: 4,
    comment: 'Mauris non dignissim purus, ac commodo diam...',
    image: user2,
  },
  {
    name: 'Eleanor Fant',
    date: '06 March, 2025',
    time: '10:25 AM',
    rating: 5,
    comment: 'Mauris non dignissim purus, ac commodo diam...',
    image: user1,
  },
  {
    name: 'Hailey White',
    date: '10 March, 2025',
    time: '10:25 AM',
    rating: 4,
    comment: 'Mauris non dignissim purus, ac commodo diam...',
    image: user2,
  },
];

function Reviews() {
  return (
    <div className='py-6'>
      <div className="flex items-center gap-2 mb-4 px-4">
        <img src={user1} alt="user" className="w-10 h-10 rounded-full object-cover" />
        <input
          type="text"
          placeholder="Add a Comment..."
          className="w-full border-b border-gray-300 focus:outline-none py-2 px-2"
        />
      </div>

      {reviews.map((review, index) => (
    <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 mb-4">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          <img
            src={review.image}
            alt={review.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold">{review.name}</h3>
            <p className="text-sm text-gray-500">{review.date}</p>
          </div>
        </div>
        <p className="text-sm text-gray-400">{review.time}</p>
      </div>

      <div className="flex items-center text-yellow-400 text-lg mb-2">
        {Array.from({ length: review.rating }, (_, i) => (
          <IoIosStar key={i} />
        ))}
      </div>

      <p className="text-sm text-gray-700">{review.comment}</p>
    </div>
      ))}
    </div>
  )
}

export default Reviews
