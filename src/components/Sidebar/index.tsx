import {
  ConversationList,
  ConversationListProps,
} from './components/conversation-list'
import {
  OnlineUserList,
  OnlineUserListProps,
} from './components/online-user-list'

const conversationList: ConversationListProps['conversationList'] = Array.from(
  { length: 15 },
  (_, index) => ({
    name: `Name ${index + 1}`,
    avatar: `https://api.multiavatar.com/Starcrasher${index + 1}.png`,
  })
)

const onlineUserList: OnlineUserListProps['onlineUserList'] = Array.from(
  { length: 15 },
  (_, index) => ({
    avatar: `https://api.multiavatar.com/Starcrasher${index + 1}.png`,
  })
)

export function Sidebar() {
  return (
    <aside className="max-h-screen flex flex-col border-r">
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

      <div className="mt-6 px-4 space-y-3">
        <h2 className="font-bold">Online now</h2>
        <OnlineUserList onlineUserList={onlineUserList} />
      </div>

      <nav className="mt-2 space-y-3">
        <h2 className="px-3 font-bold">Messages</h2>
        <ConversationList conversationList={conversationList} />
      </nav>
    </aside>
  )
}
