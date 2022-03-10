import { useEffect, useState } from "react"
import {randUser} from '@ngneat/falso'
import Story from "./Story"

function Stories() {
    const [users, setUsers] = useState([])

    useEffect(()=>{
        const suggestion = randUser({length: 20})
        setUsers(suggestion)
    },[])

  return (
    <div className="flex space-x-2 p-6 bg-white mt-6 border-gray-200 border rounded-sm
    overflow-x-scroll scrollbar-thin scrollbar-thumb-black">
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