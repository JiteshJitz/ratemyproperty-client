import React from 'react'
import Header from '../components/Header'
import Property_detail from '../components/Property_detail'
import { useRouter } from 'next/router'
import { useState,useEffect } from 'react'
const axios = require('axios')

export const getStaticProps = async () => {
  const res = await fetch(`http://34.218.112.35/property/6230e826bc9863506de7fafa`);
  const data = await res.json()

  return {
    props: {
      added_prop: data
    }
  }
}

const property = (added_prop) => {

  console.log(added_prop)

  const [key,setKey] = useState("")
  const [key2,setKey2] = useState("")
  const router = useRouter()
  const keyword = router.query.keyword

  const func = async() => {
  await axios.get('http://34.218.112.35/property/'+keyword)
  .then((response) => {
  setKey(response.data.data);
  }).catch((err)=>{
  console.log(err)
})
await axios.get('http://34.218.112.35/review/'+keyword)
.then((response) => {
setKey2(response.data);
}).catch((err)=>{
console.log(err)
})
}

  useEffect(() => {
    if(!key)
      func()
  });

  return (
    <div>
       <div className='bgimg4'>
    <div>
    <Header />
    </div>
        
        {key ? <Property_detail arr={key} rev={key2}/>: <div></div>}
    </div>
    </div>
   
  )
}

export default property