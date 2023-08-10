import { useEffect } from 'react'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3333')

export default function Home() {
  useEffect(() => {
    socket.on('connect', () => {
      console.log(socket.id) // x8WIv7-mJelg7on_ALbx
    })
    return () => {
      socket.disconnect()
    }
  }, [])

  return <div className="h-screen">teste</div>
}
