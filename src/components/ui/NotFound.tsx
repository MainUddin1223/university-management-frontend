'use client'

import Image from "next/image"
import notFoundImg from '@/assets/404.png'
import { useRouter } from "next/navigation"

const NotFound = () => {
    const router = useRouter()

    setTimeout(() => {
        router.back()
    },3000)

  return (
      <div style={{display:"flex",height:"100vh",alignItems:"center",justifyContent:"center"}}>
          <Image src={notFoundImg } width={500} alt="not_found"/>
      </div>
  )
}

export default NotFound