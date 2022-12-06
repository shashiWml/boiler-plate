import { AdjustmentsHorizontalIcon, ArrowDownIcon, BookmarkIcon } from '@heroicons/react/24/Outline';
import Link from 'next/link';
import React from 'react';
import { BiDotsHorizontal, BiDotsVertical } from 'react-icons/bi';
import TshirtIcon from './TshirtIcon';

const data = [
  {
    id: 1,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/63622721d28419f97e1c30dc/webp/koovs_20oct22-0248-1-600x800.jpg',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/635d339f738d1d6ce8e3691b/webp/koovs_20oct22-0208-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'Essentials By Koovs',
    subHeading: 'ALBIN T-SHIRT - Iced Coffee',
    price: '990',
    href: '',
  },
  {
    id: 2,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/635d343ea6f6396c943073ae/webp/koovs_20oct22-1704-600x800.jpg',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/635d343e23e0226c260c64f3/webp/koovs_20oct22-1687-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'Essentials By Koovs',
    subHeading: 'ALBIN T-SHIRT - Navy Blazer',
    price: '990',
    href: '',
  },
  {
    id: 3,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f66209476422ef146688f2/webp/multilogographict-shirt-black1_800x-jpg-600x800.webp',
    image2: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f662093ba2cdeee60a5a2c/webp/multilogographict-shirt-black8_800x-jpg-2-600x800.webp',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'THE COUTURE CLUB',
    subHeading: 'MULTI LOGO GRAPHIC T-SHIRT BLACK',
    price: '3,490',
    href: '',
  },
  {
    id: 4,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f65f6b476422ef14664def/webp/ctre3dmultilogot-shirt-white2_800x-jpg-2-600x800.webp',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f65f6b476422ef14664dec/webp/ctre3dmultilogot-shirt-white10_800x-jpg-2-600x800.webp',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'THE COUTURE CLUB',
    subHeading: 'CTRE 3D MULTI LOGO T-SHIR',
    price: '2,990',
    href: '',
  },
  {
    id: 5,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f6603e476422ef14666140/webp/varsityprintrelaxedfitt-shirt-acidwash5_3928e3da-5ebb-4fcb-b777-d0c6361897d2_800x-jpg-3-600x800.webp',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f6603ef4010bee7a693c29/webp/varsityprintrelaxedfitt-shirt-acidwash7_800x-jpg-2-600x800.webp',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'THE COUTURE CLUB',
    subHeading: 'VARSITY PRINT RELAXED T-SHIRT - ACID WASH',
    price: '3,990',
    href: '',
  },
  {
    id: 6,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f65e9e646a31ee1e3d717e/webp/shortsleevelightweightsweatshirt-charcoal2_800x-jpg-2-600x800.webp',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f65e9e3ba2cdeee60a0dae/webp/shortsleevelightweightsweatshirt-charcoal3_800x-jpg-600x800.webp',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'THE COUTURE CLUB',
    subHeading: 'HEAVYWEIGHT TWINSET TSHIRT - CHARCOAL',
    price: '3,290',
    href: '',
  },
  {
    id: 7,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/635293710c78660e4beea3e0/webp/e0f2ec4e-b322-4d1a-9153-03e8fa7077e1-600x800.webp',
    image2: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/635293721640f70ebea0483e/webp/3472ac2f-5512-4521-ba7a-d75cfd22b754-600x800.webp',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'NIKE',
    subHeading: 'Nike Dri-FIT ADV A.P.S. Short-Sleeve Fitness Top',
    price: '3,895',
    href: '',
  },
  {
    id: 8,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/635d22a3b51bff294c25e7f7/webp/koovs_20oct22-1333-600x800.jpg',
    image2: 'https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/635d22a3d6c56d29aa40e2fa/webp/koovs_20oct22-1303-600x800.jpg',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'Essentials By Koovs',
    subHeading: 'BRIAN TEE - Black Beauty',
    price: '790',
    href: '',
  },
];

export default function Tshirt() {
  const renderData = (item) => {
    const {
      id, image1, image2, icon, heading, subHeading, price, para1,
      para2, para3, para4, para5, para6, href,
    } = item;
    return (
      <div className="group col-span-6  md:col-span-3 mx-2" key={id}>
        <Link href={href}>
          <a>
            <div>
              <div className="">
                <div className="flex justify-end pr-6 relative top-8">
                  {icon}
                </div>
                <img
                  src={image1}
                  alt="Image notfound"
                  onMouseOver={(e) => e.currentTarget.src = image2}
                  onMouseOut={(e) => e.currentTarget.src = image1}
                  className=" mx-auto my-auto transition ease-in-out duration-700
                   w-[300px] h-[300px]"
                />

                <div className="opacity-0 group-hover:opacity-100 bg-gray-50 relative bottom-4 text-gray-800">
                  <div className="flex justify-between">
                    <div>
                      <p className="cursor-pointer">{para1}</p>
                    </div>
                    <p className="cursor-pointer font-bold text-xs">{para2}</p>
                    <p className="cursor-pointer font-bold text-xs">{para3}</p>
                    <p className="cursor-pointer font-bold text-xs">{para4}</p>
                    <p className="cursor-pointer font-bold text-xs">{para5}</p>
                    <p className="cursor-pointer font-bold text-xs">{para6}</p>
                  </div>
                </div>
              </div>
              <div className="py-1 cursor-pointer">
                <h3 className="text-gray-500 text-center cursor-pointer text-sm pl-10">
                  {heading}
                </h3>
                <h3 className="text-center cursor-pointer text-sm pl-12">
                  {subHeading}
                </h3>
                <h4 className="text-center cursor-pointer text-sm pl-10">
                  ₹
                  {price}
                </h4>
              </div>
            </div>
          </a>
        </Link>
      </div>
    );
  };

  return (
    <div className="pl-12 pr-12 ">
      <div className="mx-auto mt-7">
        <h1 className="text-2xl font-bold text-center mx-auto">T-SHIRT</h1>
      </div>
      <div className="border-b border-gray-400 mx-24 mt-7" />
      <div className="flex justify-between mx-24 mt-4">
        <div className="flex space-x-4">
          <TshirtIcon Icon={AdjustmentsHorizontalIcon} title="Filter" />
          <TshirtIcon Icon={ArrowDownIcon} title="Sort By" />
        </div>
        <div className="flex space-x-4">
          <p className="cursor-pointer">
            showing
            {' '}
            <b>104</b>
            {' '}
            styles
          </p>
          <TshirtIcon Icon={BiDotsVertical} title="2" />
          <TshirtIcon Icon={BiDotsHorizontal} title="4" />
        </div>
      </div>
      <div className="grid grid-cols-12">
        {data.map((item) => (
          renderData(item)
        ))}
      </div>
    </div>
  );
}
