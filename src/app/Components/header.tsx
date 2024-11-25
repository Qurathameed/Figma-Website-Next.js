import React from 'react';
import { BsPersonExclamation } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { FaRegHeart, FaSortAlphaUp } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { RxIconjarLogo } from "react-icons/rx";
import { ChairAltOutlined, ChairAltRounded, ChairAltSharp, ChangeCircle } from '@mui/icons-material';
import { FiCornerLeftUp } from 'react-icons/fi';
import { FcAlphabeticalSortingAz } from 'react-icons/fc';
import { LuSofa } from 'react-icons/lu';
import Link from 'next/link';

export default function Header() {
  return (
    <header className='bg-white w-full h-24 pt-4 mt-2'> {/* Change h-100 to h-24 for height */}
    <div className='flex justify-around gap-10 text-3xl font-semibold'> {/* Adjusted gap to a reasonable size */}
        <ul className='flex items-center gap-2'> {/* Added items-center for vertical alignment */}
            <li><LuSofa className='text-amber-700 mt-2 text-4xl' /></li>
            <li><h1 className="text-black font-bold text-4xl">Furniro</h1></li>
        </ul>
      <div className='flex justify-center gap-52 text-xl font-semibold mt-4 text-black'>
        <ul className='flex gap-20'>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/Shop">Shop</Link></li>
          <li><Link href="/About">About</Link></li>
          <li><Link href="/Contact">Contact</Link></li>
        </ul>
         <div className=' flex justify-end font-semibold text-2xl mt-2'>
            <ul className='flex gap-14'>
                <li><BsPersonExclamation className="bg-slate-50 text-black"/></li>
                <li><IoSearch className="bg-slate-50 text-black"/></li>
                <li><FaRegHeart className=" bg-slate-50 text-black"/></li>
                <li><MdOutlineShoppingCart className="bg-slate-50 text-black"/></li>
            </ul>
          </div>
        </div>
     </div>
  </header>
  );
}
