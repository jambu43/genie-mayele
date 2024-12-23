import React from 'react'
import { Home, Compass, Clock } from 'lucide-react'
import Link from 'next/link'

function Footer() {
  return (
    <nav className="flex justify-around py-2 border-t">
        <button className="flex flex-col items-center">
         <Link href='/' className="flex flex-col items-center">
         <Home className="h-6 w-6" />
         <span className="text-xs mt-1">Home</span>
         </Link>
        </button>
        <button className="flex flex-col items-center text-gray-400">
          <Link href='/explore' className="flex flex-col items-center">
          <Compass className="h-6 w-6" />
          <span className="text-xs mt-1">Explore</span>
          </Link>
        </button>
        <button className="flex flex-col items-center text-gray-400">
         <Link href='/recents' className="flex flex-col items-center">
         <Clock className="h-6 w-6" />
         <span className="text-xs mt-1">Recents</span>
         </Link>
        </button>
      </nav>
  )
}

export default Footer
