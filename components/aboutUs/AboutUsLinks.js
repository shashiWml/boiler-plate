import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

const links = [
  {
    id: 1,
    name: 'Privacy Policy',
    value: 'privacy-policy',
    href: '/privacy-policy',
  },
  {
    id: 2,
    name: 'Careers',
    value: 'careers',
    href: '/careers',
  },
  {
    id: 3,
    name: 'Contact Us',
    value: 'contact-us',
    href: '/contact-us',
  },
  {
    id: 4,
    name: 'About Us',
    value: 'about-us',
    href: '/about-us',
  },
];

export default function AboutUsLinks() {
  const router = useRouter();
  return (
    <div>
      <div>
        <h1 className="text-center text-3xl font-semibold mt-7">ABOUT US</h1>
      </div>
      <div>
        <ul className="flex justify-center ml-3 space-x-6 mt-6">
          {links.map((item) => {
            const {
              id, name, value, href,
            } = item;
            return (
              <li className="text-center text-lg items-center" key={id}>
                <Link href={href}>
                  <a className={`${router.asPath.includes(value) ? 'underline' : ''} "hover:text-purple-500 hover:border-b hover:border-gray-800"`}>
                    {name}
                  </a>
                </Link>
              </li>
            );
          })}
        </ul>
        {/* <ul className="flex justify-center ml-3 space-x-6 mt-6">
          <Link href="/privacy-policy">
            <li className="text-center text-lg items-center">
              <a href="#" className="hover:text-purple-500 hover:border-b hover:border-gray-800">Privacy Policy</a>
            </li>
          </Link>
          <Link href="/careers">
            <li className="text-center text-lg items-center">
              <a href="#" className="hover:text-purple-500 hover:border-b hover:border-gray-800">Careers</a>
            </li>
          </Link>
          <Link href="/contact-us">
            <li className="text-center text-lg items-center">
              <a href="#" className="hover:text-purple-500 hover:border-b hover:border-gray-800">ContactUs</a>
            </li>
          </Link>
          <li className="text-center text-lg items-center">
            <a href="#" className="hover:text-purple-500 hover:border-b hover:border-gray-800 ">AboutUs</a>
          </li>
        </ul> */}
      </div>
    </div>
  );
}
