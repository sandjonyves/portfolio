import Image from 'next/image';
import React from 'react';

type Props = {
  image: string;
  title: string;
  description: string;
  href: string;
};

export default function CardProject({ image, title, description, href }: Props) {
  return (
    <div className="">
      <Image
        className="rounded-t-lg w-[80%] h-64 ml-10"
        src={image}
        alt={`Project: ${title}`}
        width={200}
        height={100}
      />

      <div className="pt-2">
        <a href="#">
          <h5 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-300 dark:text-white">
            {title}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        <a
          href={href}
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
