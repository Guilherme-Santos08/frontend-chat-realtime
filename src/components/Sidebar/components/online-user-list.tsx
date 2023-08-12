import { Avatar } from '@/components/avatar'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'

export interface OnlineUserListProps {
  onlineUserList: Array<{ avatar: string }>
}

export function OnlineUserList({ onlineUserList }: OnlineUserListProps) {
  return (
    <ScrollArea>
      <div className="flex gap-2 pb-5">
        {onlineUserList.map((user, i) => (
          <Avatar src={user.avatar} key={i} />
        ))}
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  )
}
