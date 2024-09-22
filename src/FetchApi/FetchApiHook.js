import React, {useState, useEffect} from 'react'
import Profile from './Profile'
const FetchApiHook = props => {

  const [data, setData] = useState([])

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("http://localhost:39635/Profile")
      const data = await response.json()
      setData(data)
    }

    fetchData()
  }, [])

  return (
    <div>
      {/* {data && data.map((data) => displayProfile(data))} */}

      {data && data.map((data, index) => <Profile key={index} user={data} />)}

    </div>

  )

function displayProfile(data)
{
  return (
    <div>
      <div><h2>Name: {data.name}</h2></div>
      <div><img src={data.image} /></div>
      <div>Age: {data.age}</div>
    </div>
  )
}



}

export default FetchApiHook;
