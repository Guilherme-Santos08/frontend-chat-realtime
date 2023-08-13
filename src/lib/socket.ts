import { io } from 'socket.io-client'
const SERVER = process.env.NEXT_PUBLIC_API_URL as string

export const socket = io(SERVER, { transports: ['websocket'] })
