import { Switch } from '@headlessui/react';
import React, { useState } from 'react';

export default function SizeGuidePage() {
  const [enabled, setEnabled] = useState(false);
  return (
    <div>
      <div>
        <h1 className="text-center font-semibold text-2xl">Women's Tops (Asian Sizing)</h1>
        <p className="text-center ml-36 mr-36 mt-7">
          The measurements on the size chart are body measurements. Find your correct size in the chart below. Scroll horizontally to see more sizes.
        </p>
        <div className="flex justify-between ml-36 mr-36 py-10 mt-16">
          <h1 className="text-left font-semibold">
            Size Chart
          </h1>
          <Switch
            checked={enabled}
            onChange={setEnabled}
            className={`${enabled ? 'bg-gray-400' : 'bg-gray-500'}
        relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full
        border-2 border-transparent transition-colors duration-200 ease-in-out
        focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
          >
            <span className="sr-only">
              Use Setting
            </span>
            <span
              aria-hidden="true"
              className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
          pointer-events-none inline-block h-[34px] w-[34px] transform
          rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
            />
            cm
          </Switch>
        </div>
        <div className="ml-36 mr-36">
          <h2 className="text-left text-lg">Fit Tips</h2>
          <p className="mt-5">
            If you're on the borderline between two sizes, order the smaller size for a tighter fit or the larger size for a looser fit. If your measurements for bust and waist correspond to two different suggested sizes, order the size indicated by your bust measurement.
          </p>
          <h2 className="text-left mt-4 py-3 text-lg">How To Measure</h2>
          <ul className="list-disc">
            <li>
              BUST: Measure around the fullest part of your bust, keeping the measuring tape horizontal.
            </li>
            <li>
              WAIST: Measure around the narrowest part of your waist (typically where your body bends side to side), keeping the tape horizontal.
            </li>
            <li>
              HIPS: Measure around the fullest part of your hips, keeping the tape horizontal.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
