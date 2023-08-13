import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CardSignIn } from './card-sign-in'
import { CardSignUp } from './card-sign-up'

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Tabs defaultValue="sign-in" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="sign-in">Sign In</TabsTrigger>
          <TabsTrigger value="sign-up">Sign Up</TabsTrigger>
        </TabsList>
        <TabsContent value="sign-in">
          <CardSignIn />
        </TabsContent>
        <TabsContent value="sign-up">
          <CardSignUp />
        </TabsContent>
      </Tabs>
    </div>
  )
}
