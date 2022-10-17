import Link from 'next/link';
import React from 'react';

export default function AboutUs() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9">
        <img
          className="mt-9 h-[700px] w-[700px]"
          src="https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/62fb7cc0b584b058444cf216/webp/a656a150-930f-4a07-9566-42b9dcb95ea3-1366x1376.jpeg"
          alt="image"
        />
        <div className="flex align-middle my-auto">
          <h1 className="text-2xl font-semibold mx-auto">About Us</h1>
        </div>
      </div>
      <div className="mx-auto">
        <p className=" text-sm mt-7 text-justify mx-auto w-1/2">
          We are KOOVS - young and fresh and ever so happening! We are here to be a part of each
          of your communities! We have been around for about 10 years but at that time we
          weren’t this cool, now we are learning from the best I think we all can agree it’s a
          much needed make over for us! We have changed the way we look, the way we dress and
          definitely changed friend gangs ;
        </p>
        <p className="text-center text-lg font-extrabold mt-4">
          So come shop, learn, chill and do much more with us - the new KOOVS
        </p>
        <div className="border-t-2 border-gray-700 mt-28 my-14 mx-24" />
      </div>
    </div>
  );
}
