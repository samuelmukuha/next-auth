"use client"
import React from 'react'
import Image from 'next/image'
import { signIn } from 'next-auth/react'

function SignInBtn() {
  return (
      <button onClick={()=>signIn("google")}
        className="flex items-center gap-4 shadow-xl rounded-lg pl-3">
        <Image src="/google-logo.jpeg" height={30} width={30} alt="google logo"/>
        <span className="bg-blue-500 px-3 py-4 text-white">Sign in With Google</span>  
      </button>
  )
}

export default SignInBtn
