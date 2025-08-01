'use client';
import { Envelope, FacebookLogo, SkypeLogo, TwitterLogo } from '@phosphor-icons/react';
import Link from 'next/link'

export default function SocialNetworks() {
  return (
    <div className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-10">
          <Link href="mailto:#" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
            <Envelope size={24} />
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
            <FacebookLogo size={24} />
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
            <SkypeLogo size={24} />
          </Link>
          <Link href="#" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-blue-600">
            <TwitterLogo size={24} />
          </Link>
        </div>
      </div>
    </div>
  );
}