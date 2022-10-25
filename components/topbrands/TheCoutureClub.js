import { AdjustmentsHorizontalIcon, ArrowDownIcon, BookmarkIcon } from '@heroicons/react/24/outline';
import React from 'react';
import { BiDotsHorizontal, BiDotsVertical } from 'react-icons/bi';
import TheCoutureClubIcon from './TheCoutureClubIcon';

const data = [
  {
    id: 1,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f65f6b476422ef14664def/webp/ctre3dmultilogot-shirt-white2_800x-jpg-2-600x800.webp',
    image2: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f65f6b476422ef14664dec/webp/ctre3dmultilogot-shirt-white10_800x-jpg-2-600x800.webp',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'THE COUTURE CLUB',
    subHeading: 'CTRE 3D MULTI LOGO T-SHIRT',
    price: '2,990',
  },
  {
    id: 2,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f65f19f4010bee7a691fff/webp/dropcrotchlightweightshort-charcoal2_800x-jpg-600x800.webp',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f65f193ba2cdeee60a14f6/webp/dropcrotchlightweightshort-charcoal10_800x-jpg-600x800.webp',
    para1: 'ADD TO CART+',
    para2: '',
    para3: '',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'THE COUTURE CLUB',
    subHeading: 'DROP CROTCH LIGHTWEIGHT SHORT - CHARCOAL',
    price: '3,290',
  },
  {
    id: 3,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f65fd1f4010bee7a693361/webp/racerappliquebadgedgraphichoodie-black1_800x-jpg-2-600x800.webp',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f65fd1f4010bee7a69335e/webp/racerappliquebadgedgraphichoodie-black3_800x-jpg-2-600x800.webp',
    para1: 'ADD TO CART+',
    para2: 'XS',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'THE COUTURE CLUB',
    subHeading: 'WORLD SERIES APPLIQUE BADGED HOODIE - BLACK',
    price: '5,990',
  },
  {
    id: 4,
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
  },
  {
    id: 5,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f65e9e646a31ee1e3d717e/webp/shortsleevelightweightsweatshirt-charcoal2_800x-jpg-2-600x800.webp',
    image2: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f65e9e3ba2cdeee60a0dae/webp/shortsleevelightweightsweatshirt-charcoal3_800x-jpg-600x800.webp',
    para1: 'ADD TO CART+',
    para2: '',
    para3: '',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'THE COUTURE CLUB',
    subHeading: 'HEAVYWEIGHT TWINSET TSHIRT - CHARCOAL',
    price: '3,290',
  },
  {
    id: 6,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn1.storehippo.com/s/609230a6463cd1593a6b70f1/62f663fb3ba2cdeee60a874e/webp/23343f2cfde04c1c98a618a5b279639a-600x800.webp',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f663fb476422ef1466b237/webp/915ce8c235ae4933a31a35e6f0662227-600x800.webp',
    para1: 'ADD TO CART+',
    para2: 'XS',
    para3: '',
    para4: 'M',
    para5: 'L',
    para6: '',
    heading: 'THE COUTURE CLUB',
    subHeading: 'DISTRESS DETAIL SPADE PRINT HOODIE - OFFWHITE',
    price: '4,990',
  },
  {
    id: 7,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62fce0874b5dcf78432bbbd3/webp/shortsleevelightweightsweatshirt-stone_800x-jpg-600x800.webp',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62fce0874b5dcf78432bbbcc/webp/shortsleevelightweightsweatshirt-stone5_800x-jpg-600x800.webp',
    para1: 'ADD TO CART+',
    para2: '',
    para3: 'M',
    para4: 'L',
    para5: 'XL',
    para6: 'XXL',
    heading: 'THE COUTURE CLUB',
    subHeading: 'HEAVYWEIGHT TWINSET T-SHIRT - STONE',
    price: '3,290',
  },
  {
    id: 8,
    icon: <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />,
    image1: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f659413ba2cdeee6097a0f/webp/couturevarsityswimshortwithzips-white1_800x-jpg-600x800.webp',
    image2: 'https://cdn2.storehippo.com/s/609230a6463cd1593a6b70f1/62f65940476422ef1465851e/webp/tccm20262926_800x-jpg-600x800.webp',
    para1: 'ADD TO CART+',
    para2: 'XS',
    para3: 'S',
    para4: 'M',
    para5: 'L',
    para6: 'XL',
    heading: 'THE COUTURE CLUB',
    subHeading: 'VARSITY SWIM SHORT WITH ZIPS - WHITE',
    price: '2,990',
  },
];

export default function TheCoutureClub() {
  const renderData = (item) => {
    const {
      id, icon, image1, image2, para1, para2, para3, para4, para5, para6, heading, subHeading,
      price,
    } = item;
    return (
      <div className="col-span-3 py-10">
        <div className="relative w-96 h-96  text-white overflow-hidden cursor-pointer transition-all duration-700 card" key={id}>
          <div className="absolute inset-0  flex justify-center items-center  transition-all duration-100 delay-200 z-20 hover:opacity-0">
            <div className="">
              <div className="flex justify-end pr-4 relative top-8">
                {icon}
              </div>
              <img
                className="h-[300px] w-[300px]"
                src={image1}
                alt={heading}
              />
            </div>
          </div>
          <div className="absolute inset-0  flex justify-center items-center  transition-all z-10 card-back">
            <div className="relative">
              <div className="flex justify-end pr-4 relative top-8">
                {icon}
              </div>
              <img
                className="h-[300px] w-[300px]"
                src={image2}
                alt={heading}
              />
              <div className="bg-gray-50 relative bottom-4 text-gray-800">
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
    );
  };
  return (
    <div>
      <div className="mx-auto mt-7">
        <h1 className="text-2xl font-bold text-center mx-auto">THE COUTURE CLUB</h1>
      </div>
      <div className="border-b border-gray-400 mx-24 mt-7" />
      <div className="flex justify-between mx-24 mt-4">
        <div className="flex space-x-4">
          <TheCoutureClubIcon Icon={AdjustmentsHorizontalIcon} title="Filter" />
          <TheCoutureClubIcon Icon={ArrowDownIcon} title="Sort By" />
        </div>
        <div className="flex space-x-4">
          <p className="cursor-pointer text-sm">
            showing
            {' '}
            <b>74</b>
            {' '}
            styles
          </p>
          <TheCoutureClubIcon Icon={BiDotsVertical} title="2" />
          <TheCoutureClubIcon Icon={BiDotsHorizontal} title="4" />
        </div>
      </div>
      <div className="grid grid-cols-12 px-10">
        {data.map((item) => (
          renderData(item)
        ))}
        <div className="col-span-3 py-10">
          <div className="relative w-96 h-96  text-white overflow-hidden cursor-pointer transition-all duration-700 card">
            <div className="absolute inset-0  flex justify-center items-center  transition-all duration-100 delay-200 z-20 hover:opacity-0">
              <div className="">
                <div className="flex justify-end pr-4 relative top-8">
                  <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />
                </div>
                <img
                  className="h-[300px] w-[300px]"
                  src="https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f66209476422ef146688f2/webp/multilogographict-shirt-black1_800x-jpg-600x800.webp"
                  alt="image"
                />
              </div>
            </div>
            <div className="absolute inset-0  flex justify-center items-center  transition-all z-10 card-back">
              <div className="relative">
                <div className="flex justify-end pr-4 relative top-8">
                  <BookmarkIcon className="h-5 w-5 stroke-black stroke-2" />
                </div>
                <img
                  className="h-[300px] w-[300px]"
                  src="https://cdn4.storehippo.com/s/609230a6463cd1593a6b70f1/62f662093ba2cdeee60a5a2c/webp/multilogographict-shirt-black8_800x-jpg-2-600x800.webp"
                  alt="image"
                />
                <div className="bg-gray-50 relative bottom-4 text-gray-800">
                  <div className="flex justify-between">
                    <div>
                      <p className="cursor-pointer">ADD TO CART+</p>
                    </div>
                    <p className="cursor-pointer font-bold text-xs">XS</p>
                    <p className="cursor-pointer font-bold text-xs">S</p>
                    <p className="cursor-pointer font-bold text-xs">M</p>
                    <p className="cursor-pointer font-bold text-xs">L</p>
                    <p className="cursor-pointer font-bold text-xs">XL</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <h3 className="text-gray-500 text-center cursor-pointer text-sm pl-10">
            THE COUTURE CLUB
          </h3>
          <h3 className="text-center cursor-pointer text-sm pl-12">
            MULTI LOGO GRAPHIC T-SHIRT - BLACK
          </h3>
          <h4 className="text-center cursor-pointer text-sm pl-10">₹3,490</h4>
        </div>
      </div>
    </div>
  );
}
