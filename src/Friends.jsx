import { useEffect, useState } from 'react'
import './Friends.css'
import Friend from './Friend'
export default function Friends(){
    const [friend, friendCount] = useState([])
    useEffect(()=>{
         fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => friendCount(data))
    },[])
    return(
        <div className='friends'>
            <h1>Friends: {friend.length}</h1>
            {
                friend.map(friend => <Friend friend={friend} key={friend.id}> </Friend>)
            }
        </div>
    )
}