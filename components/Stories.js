import { useEffect, useState } from "react"
import {randUser} from '@ngneat/falso'
import Story from "./Story"
import { useSession } from "next-auth/react"

function Stories() {
    const [users, setUsers] = useState([])
    const {data: session} = useSession()

    useEffect(()=>{
        const suggestion = randUser({length: 20})
        setUsers(suggestion)
    },[])

  return (
    <div className="flex space-x-2 p-6 bg-white mt-6 border-gray-200 border rounded-sm
    overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
        {session &&(
          <Story img={session.user.image} username={session.user.username}/>
        )}
        {users.map(user=>(
            <Story 
            key={user.id} 
            username={user.firstName} 
            img={user.img}
            />
        ))}
    </div>
  )
}

export default Stories