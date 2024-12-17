'use client'

import { MessageSquare,} from 'lucide-react'
import { Card } from "@/components/ui/card"


interface ChatMessage {
  id: string
  content: string
  timestamp: string
  date: string
}

export default function Recent() {
  const messages: ChatMessage[] = [
    {
      id: "1",
      content: "Donne-moi le processus de développement d'un projet qui prése...",
      timestamp: "13:44",
      date: "10 Dec 2024"
    },
    {
      id: "2",
      content: "Application de signalement pour la police.",
      timestamp: "13:44",
      date: "10 Dec 2024"
    },
    {
      id: "3",
      content: "Demande d'informations pour collaboration.",
      timestamp: "09:35",
      date: "10 Dec 2024"
    },
    {
      id: "4",
      content: "Positionnement stratégique de Mayele.",
      timestamp: "15:04",
      date: "09 Dec 2024"
    },
    {
      id: "5",
      content: "Dossier de performance pour LiveRoom.",
      timestamp: "10:06",
      date: "09 Dec 2024"
    },
    {
      id: "6",
      content: "Coût vs qualité pour Moya.",
      timestamp: "14:13",
      date: "07 Dec 2024"
    },
    {
      id: "7",
      content: "Cahier des charges pour Mova.",
      timestamp: "06:13",
      date: "06 Dec 2024"
    },
  ]

  return (

      <div className="flex-1 overflow-auto p-4 space-y-3">
        {messages.map((message) => (
          <Card 
            key={message.id}
           className="flex items-center p-4 cursor-pointer hover:bg-accent"
          >
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-emerald-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                <MessageSquare className="w-4 h-4 text-emerald-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold">{message.content}</p>
                <p className="text-sm text-muted-foreground">
                  {message.date} - {message.timestamp}
                </p>
              </div>
            </div>
          </Card>
        ))}
      </div>

  )
}

