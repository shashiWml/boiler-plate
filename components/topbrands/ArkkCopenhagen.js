import React from "react";
import { AdjustmentsHorizontalIcon, ArrowDownIcon } from '@heroicons/react/24/Outline';
import { BookmarkIcon } from '@heroicons/react/24/outline';
import { BiDotsHorizontal, BiDotsVertical } from 'react-icons/bi';
import ArkkCopenhagenIcon from "./ArkkCopenhagenIcon";

const data = [
  {
    id: 1,
    icon:
    name:
  }
]
export default function ArkkCopenhagen() {
  return (
    <div>
      <div className="mx-auto mt-7">
        <h1 className="text-2xl font-bold text-center mx-auto">ARKK COPENHAGEN</h1>
      </div>
      <div className="border-b border-gray-400 mx-24 mt-7" />
      <div className="flex justify-between mx-24 mt-4">
        <div className="flex space-x-4">
          <ArkkCopenhagenIcon Icon={AdjustmentsHorizontalIcon} title="Filter" />
          <ArkkCopenhagenIcon Icon={ArrowDownIcon} title="Sort By" />
        </div>
        <div className="flex space-x-4">
          <p className="cursor-pointer text-sm">showing 10 styles</p>
          <ArkkCopenhagenIcon Icon={BiDotsVertical} title="2" />
          <ArkkCopenhagenIcon Icon={BiDotsHorizontal} title="4" />
        </div>
      </div>
    </div>
  )
}
