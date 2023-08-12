/* eslint-disable @next/next/no-img-element */
'use client'

export interface NavItemProps {
  title: string
  avatar: string
}

export function NavItem({ title, avatar }: NavItemProps) {
  return (
    <a
      href=""
      className="flex gap-3 px-3 py-2 transition-colors hover:bg-secondary"
    >
      <div className="relative rounded-full w-10">
        <img
          src={avatar}
          alt="Foto do Usuario"
          className="w-full h-full rounded-full object-cover"
        />
        <span className="absolute w-3 h-3 top-0 right-0 rounded-full bg-green-400 border"></span>
      </div>
      <div className="flex flex-col">
        <span className="font-medium text-muted-foreground">{title}</span>
        <span className="text-xs text-green-500">Digitando...</span>
      </div>
    </a>
  )
}
