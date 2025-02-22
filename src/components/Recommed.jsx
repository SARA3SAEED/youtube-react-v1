import React from 'react';
import ListRecommend from '../components/ListRecommend';

export default function Recommed() {
  return (
    <div className="w-[60%] p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        
        
        <div className="flex items-center justify-between mb-4">
            <h5 className="text-xl font-bold leading-none text-gray-900 dark:text-white">
            Latest Videos
            </h5>
            <a
            href="#"
            className="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
            View all
            </a>
        </div>





        <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">
        <ListRecommend/>
        </ul>
        </div>


</div>

  )
}
