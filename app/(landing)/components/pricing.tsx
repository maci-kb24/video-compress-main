import { Check } from "lucide-react";
import Link from "next/link";
import React from "react";

const Pricing = () => (
  <div className="px-6 lg:px-0" id="pricing">
    <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-4 mx-auto px-6 lg:px-0">
      <div className="flex flex-row md:flex-col border justify-between rounded-xl p-3 items-center">
        <div className="p-6">
          <p className="mb-3 text-xl md:text-3xl font-semibold">
            Free
          </p>
          <p className="text-gray-500 mb-6 text-sm md:text-base">
            Free forever, open-source video & image compression.
            <br className="hidden md:block" />
            Own your data, deploy anywhere.
          </p>
          <div>
            {free.map(({ id, name }) => (
              <div key={id} className="flex gap-2 mb-3 ">
                <Check className="w-4 text-black" />
                <p className="text-gray-500 text-sm">{name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/40  shadow-sm border text-center border-gray-200 rounded-2x p-10 rounded-2xl  w-full">
          <p className="font-semibold text-lg">Free</p>
          <div className="flex items-end justify-center pt-4 pb-8">
            <span className="text-4xl font-semibold">$0</span>
            <div>/month</div>
          </div>
          <Link
            href="/video"
            className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-950 to-zinc-950 rounded-lg text-white/90 px-3.5 py-2.5 relative text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-500 focus:ring-zinc-950 w-full flex text-center justify-center"
          >
            Get Started
          </Link>
          <p className="pt-4 text-xs">
            All of our code base is free and
            <br />
            open source.
          </p>
        </div>
      </div>
      <div className="flex flex-row md:flex-col border justify-between rounded-xl p-3 items-center">
        <div className="p-6">
          <p className="mb-3 text-xl md:text-3xl font-semibold">
            Standard
          </p>
          <p className="text-gray-500 mb-6 text-sm md:text-base">
            Standard plan, open-source video & image compression.
            <br className="hidden md:block" />
            Own your data, deploy anywhere.
          </p>
          <div>
            {standard.map(({ id, name }) => (
              <div key={id} className="flex gap-2 mb-3 ">
                <Check className="w-4 text-black" />
                <p className="text-gray-500 text-sm">{name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/40  shadow-sm border text-center border-gray-200 rounded-2x p-10 rounded-2xl w-full">
          <p className="font-semibold text-lg">Free,Forever</p>
          <div className="flex items-end justify-center pt-4 pb-8">
            <span className="text-4xl font-semibold">$5</span>
            <div>/month</div>
          </div>
          <Link
            href="/video"
            className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-950 to-zinc-950 rounded-lg text-white/90 px-3.5 py-2.5 relative text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-500 focus:ring-zinc-950 w-full flex text-center justify-center"
          >
            Get Started
          </Link>
          <p className="pt-4 text-xs">
            All of our code base is free and
            <br />
            open source.
          </p>
        </div>
      </div>
      <div className="flex flex-row md:flex-col border justify-between rounded-xl p-3 items-center">
        <div className="p-6">
          <p className="mb-3 text-xl md:text-3xl font-semibold">
            Professional
          </p>
          <p className="text-gray-500 mb-6 text-sm md:text-base">
            Professional plan, open-source video & image compression.
            <br className="hidden md:block" />
            Own your data, deploy anywhere.
          </p>
          <div>
            {professional.map(({ id, name }) => (
              <div key={id} className="flex gap-2 mb-3 ">
                <Check className="w-4 text-black" />
                <p className="text-gray-500 text-sm">{name}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-white/40  shadow-sm border text-center border-gray-200 rounded-2x p-10 rounded-2xl w-full">
          <p className="font-semibold text-lg">Free,Forever</p>
          <div className="flex items-end justify-center pt-4 pb-8">
            <span className="text-4xl font-semibold">$9</span>
            <div>/month</div>
          </div>
          <Link
            href="/video"
            className="bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-zinc-700 via-zinc-950 to-zinc-950 rounded-lg text-white/90 px-3.5 py-2.5 relative text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition ease-in-out duration-500 focus:ring-zinc-950 w-full flex text-center justify-center"
          >
            Get Started
          </Link>
          <p className="pt-4 text-xs">
            All of our code base is free and
            <br />
            open source.
          </p>
        </div>
      </div>
    </div> 
  </div>
);

const free = [
  { id: 1, name: "1GB file size" },
  { id: 2, name: "100 conversion minutes" },
  { id: 3, name: "1 file at a time" },
  { id: 3, name: "Ads included" },
];

const standard = [
  { id: 1, name: "10GB file size" },
  { id: 2, name: "1000 conversion minutes" },
  { id: 3, name: "5 file at a time" },
  { id: 3, name: "Ads free" },
]

const professional = [
  { id: 1, name: "100GB file size" },
  { id: 2, name: "10000 conversion minutes" },
  { id: 3, name: "10 file at a time" },
  { id: 3, name: "Ads free" },
]
export default Pricing;
