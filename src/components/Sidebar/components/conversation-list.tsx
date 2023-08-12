import { Avatar } from '@/components/avatar'
import { ScrollArea } from '@/components/ui/scroll-area'

export interface ConversationListProps {
  conversationList: Array<{
    name: string
    avatar: string
  }>
}

export function ConversationList({ conversationList }: ConversationListProps) {
  return (
    <ScrollArea className="h-[400px]">
      {conversationList.map((conversation, i) => (
        <a
          href=""
          className="flex gap-4 p-3 transition-colors hover:bg-secondary"
          key={i}
        >
          <Avatar src={conversation.avatar} />
          <div className="flex flex-col">
            <span className="font-bold text-md text-muted-foreground">
              {conversation.name}
            </span>
            <span className="text-xs text-green-500">Digitando...</span>
          </div>
        </a>
      ))}
    </ScrollArea>
  )
}
