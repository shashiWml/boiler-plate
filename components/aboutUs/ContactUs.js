import React from 'react';

export default function ContactUs() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-9">
        <img
          className="mt-9 h-[700px] w-[700px]"
          src="https://cdn3.storehippo.com/s/609230a6463cd1593a6b70f1/63072cf6ed8633105bf83e75/webp/contact-us-1366x1376.jpg"
          alt="image"
        />
        <div className="flex align-middle my-auto">
          <div className="space-y-2">
            <h1 className="text-2xl font-semibold text-center">Contact Us</h1>
            <p className="font-semibold mx-auto align-middle my-auto text-lg">
              Please leave your comments/feedback any time - care@koovs.com
            </p>
          </div>
        </div>
      </div>
      <div className="border-t-2 border-gray-700 mt-28 my-14 mx-24" />
    </div>

  );
}
