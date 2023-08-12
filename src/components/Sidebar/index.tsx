/* eslint-disable @next/next/no-img-element */
import { ScrollArea, ScrollBar } from '../ui/scroll-area'
import { NavItem } from './nav-item'

export function Sidebar() {
  return (
    <aside className="flex flex-col border-r">
      <header className="flex items-center gap-4 px-4 py-5 border-b">
        <div className="rounded-full w-12">
          <img
            src="https://github.com/guilherme-santos08.png"
            alt="Foto do Usuario"
            className="w-full h-full rounded-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm">Guilherme Ribeiro</p>
          <span className="text-xs text-muted-foreground">My Account</span>
        </div>
      </header>

      <div className="mt-6 px-4">
        <h2 className="font-bold">Online now</h2>
        <div className="mt-2">
          {/* Use o componente ScrollArea com orientação horizontal */}
          <ScrollArea>
            <div className="flex gap-2 pb-5">
              {Array.from({ length: 9 }).map((_, i) => (
                <div className="relative rounded-full w-10" key={i}>
                  <img
                    src="https://api.multiavatar.com/Starcrasher.png"
                    alt="Foto do Usuario"
                    className="w-full h-full rounded-full object-cover"
                  />
                  <span className="absolute w-3 h-3 top-0 right-0 rounded-full bg-green-400 border"></span>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>

      <nav className="mt-2">
        <h2 className="px-3 font-bold">Messages</h2>
        <div className="mt-2">
          <ScrollArea className="h-[400px]">
            {Array.from({ length: 12 }).map((_, i) => (
              <NavItem
                title="Guilherme"
                avatar="https://api.multiavatar.com/Starcrasher1.png"
                key={i}
              />
            ))}
          </ScrollArea>
        </div>
      </nav>
    </aside>
  )
}
