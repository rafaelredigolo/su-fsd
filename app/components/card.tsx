import React from 'react';
export const Card = ({item, index}) => {
    return <li className='flex justify-between gap-x-6 py-5' key={index.toString()}>
        <div className="shrink-0">
            <p className="text-sm leading-6 text-white-900">{item.fileName}</p>
            <p className="mt-1 text-xs leading-5 text-gray-500">
                Created At <time dateTime={item.createdAt}>{item.createdAt}</time>
            </p>
        </div>
    </li>
}
