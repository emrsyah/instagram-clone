import {signOut, useSession} from 'next-auth/react'

function MiniProfile() {
  const {data: session} = useSession()

  return (
    <div className="flex items-center justify-between mt-14 ml-10">
        <img src={session?.user?.image} 
        className="rounded-full border p-[2px] w-16 h-16"
        alt="" />

        <div className="flex-1 mx-4">
            <h2 className="font-semibold">{session?.user?.username}</h2>
            <h3 className="text-sm text-gray-400">ʕ •ᴥ•ʔ</h3>
        </div>

        <button className="text-blue-400 text-sm font-semibold"
        onClick={signOut}>
            Sign out
        </button>

    </div>
  )
}

export default MiniProfile