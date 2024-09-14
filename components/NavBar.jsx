"use client"
import React from 'react'
import Link from 'next/link'
import { signIn, signOut, useSession } from 'next-auth/react'

function NavBar() {
    const {status} = useSession();
  return (
    <div className="flex justify-between items-center shadow-md p-4 text-blue-700">
      <Link className="font-bold text-lg" href={'/'}>SamKush</Link>
      {status === 'authenticated' ?
            (<button onClick={()=> signOut("google")}
            className="bg-slate-900 px-6 rounded-md text-white py-2">
                Sign Out
                </button>
            ): (
            <button onClick={()=> signIn()}
            className="bg-slate-900 px-6 rounded-md text-white py-2">
                Sign In
            </button>)
    }

    </div>
  )
}

export default NavBar
