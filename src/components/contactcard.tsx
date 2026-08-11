'use client';
import React from 'react';
import Image from 'next/image';

interface Person {
  id: number;
  name: string;
  role: string;
  phone: string;
  image: string;
}

const people: Person[] = [
  {
    id: 1,
    name: "Tatvika",
    role: "Point of contact",
    phone: "+91 93807 97698",
    image: "/images/OTImages/Tatvika.jpg",
  },
  {
    id: 2,
    name: "Akash",
    role: "Point of contact",
    phone: "+91 70192 25918",
    image: "/images/OTImages/Akash.png",
  },
];

const Card = () => {
  return (
    <div className="flex flex-col gap-4">
      {people.map((person) => (
        <div
          key={person.id}
          className="group flex items-center gap-4 rounded-2xl border border-slate-700/50 bg-slate-900/60 p-4 backdrop-blur-sm transition-all duration-300 hover:border-slate-600 hover:bg-slate-800/70 sm:p-5"
        >
          <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-2 ring-slate-700 transition-all duration-300 group-hover:ring-cyan-400 sm:h-16 sm:w-16">
            <Image
              src={person.image}
              alt={`${person.name}`}
              fill
              sizes="64px"
              className="object-cover"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="truncate text-base font-semibold text-slate-100">{person.name}</div>
            <div className="text-xs uppercase tracking-wider text-slate-500">{person.role}</div>
          </div>

          <a
            href={`tel:${person.phone.replace(/\s+/g, '')}`}
            className="flex shrink-0 items-center gap-2 rounded-full border border-slate-600 bg-slate-800/80 px-3 py-2 font-mono text-xs text-slate-200 tabular-nums transition-colors duration-300 hover:border-cyan-400 hover:text-cyan-300 sm:px-4 sm:text-sm"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5 shrink-0">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.46.57 3.58a1 1 0 0 1-.25 1.01l-2.2 2.2Z" />
            </svg>
            <span className="hidden sm:inline">{person.phone}</span>
            <span className="sm:hidden">Call</span>
          </a>
        </div>
      ))}
    </div>
  );
};

export default Card;
