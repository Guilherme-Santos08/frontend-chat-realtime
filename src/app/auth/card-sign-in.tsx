'use client'

import { nanoid } from 'nanoid'

import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { socket } from '@/lib/socket'
import { FormEvent, useState } from 'react'
import { api } from '@/lib/axios'

export function CardSignIn() {
  const userId = nanoid()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmitForm = async (event: FormEvent) => {
    event.preventDefault()

    try {
      await api.post('/session', {
        password,
        email,
      })
    } catch {
      console.log('ue')
    }
  }

  return (
    <Card>
      <form onSubmit={handleSubmitForm}>
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Login to your account</CardTitle>
          <CardDescription>
            Enter your username below to login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          {/* <div className="grid grid-cols-2 gap-6">
          <Button variant="outline">
            <Github className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button variant="outline">
            <Chrome className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div> */}
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="test@example.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="*********"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full">Login</Button>
        </CardFooter>
      </form>
    </Card>
  )
}
