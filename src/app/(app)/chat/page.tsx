'use client'

import { Button } from '@/components/ui/button'
import { socket } from '@/lib/socket'

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
