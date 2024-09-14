"use client"
import SignInBtn from './SignInBtn'
import { useSession } from 'next-auth/react'
import Image from 'next/image';

function UserInfo() {
    const {status, data:session} = useSession();
    if (status === 'authenticated') {
        return <div className="shadow-xl p-8 rounded-md flex flex-col gap-3 bg-slate-500">
            <Image className="rounded-full" src={session?.user?.image} alt="" width={60} height={60}/>
            <div>
                Name: <span className="font-bold">{session?.user?.name}</span>
            </div>
            <div>
                Email: <span className="font-bold">{session?.user?.email}</span>
            </div>
            </div>
    } else {
  return (
    <div>
      <SignInBtn/>
    </div>
  )
}
}

export default UserInfo
