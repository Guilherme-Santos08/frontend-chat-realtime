'use client'

import { Button } from '@/components/ui/button'
import { io } from 'socket.io-client'

const socket = io('http://localhost:3333')

export default function Chat() {
  socket.on('connect', () => {
    console.log(socket.id) // x8WIv7-mJelg7on_ALbx
  })

  return (
    <div>
      <Button onClick={() => socket.connect()}>Connect</Button>
      <Button onClick={() => socket.disconnect()}>Disconnect</Button>
    </div>
  )
}
