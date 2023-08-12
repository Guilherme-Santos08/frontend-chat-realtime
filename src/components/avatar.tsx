import {
  AvatarImage,
  Avatar as AvatarComponent,
  AvatarFallback,
} from './ui/avatar'

interface AvatarProps {
  src: string
}

export function Avatar({ src }: AvatarProps) {
  return (
    <AvatarComponent>
      <AvatarImage src={src} />
      <AvatarFallback>DZ</AvatarFallback>
      <div className="absolute w-3 h-3 top-0 right-0 rounded-full bg-green-400 border"></div>
    </AvatarComponent>
  )
}
