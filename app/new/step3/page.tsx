import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface IconOption {
  id: string;
  emoji: string;
  label: string;
}

export default function CreateAssistant() {
  const icons: IconOption[] = [
    { id: "1", emoji: "💼", label: "Briefcase" },
    { id: "2", emoji: "🏓", label: "Ping pong" },
    { id: "3", emoji: "👨‍💼", label: "Business person" },
    { id: "4", emoji: "🤑", label: "Money face" },
    { id: "5", emoji: "🔥", label: "Fire" },
    { id: "6", emoji: "😺", label: "Party cat" },
    { id: "7", emoji: "🎯", label: "Target" },
    { id: "8", emoji: "🧬", label: "DNA" },
    { id: "9", emoji: "😈", label: "Devil" },
    { id: "10", emoji: "🧩", label: "Puzzle" },
    { id: "11", emoji: "✍️", label: "Writing" },
    { id: "12", emoji: "🤔", label: "Thinking" },
    { id: "13", emoji: "🥑", label: "Avocado" },
    { id: "14", emoji: "✈️", label: "Airplane" },
    { id: "15", emoji: "🤓", label: "Nerd face" },
    { id: "16", emoji: "👽", label: "Alien" },
    { id: "17", emoji: "🤖", label: "Robot" },
    { id: "18", emoji: "🍾", label: "Bottle" },
    { id: "19", emoji: "🤔", label: "Thinking" },
    { id: "20", emoji: "🎰", label: "Slot machine" },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="p-4">
        <Button variant="ghost" size="icon" className="text-gray-700">
          <ArrowLeft className="h-6 w-6" />
        </Button>
      </div>

      {/* Progress Bar */}
      <div className="px-4 mb-6">
        <div className="h-1 rounded-full bg-gray-200">
          <div className="h-1 rounded-full bg-emerald-400 w-2/3" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4">
        <p className="text-gray-500 text-sm mb-1">Create an Assistant</p>
        <h1 className="text-2xl font-semibold mb-6">
          Choose an icon for your assistant
        </h1>

        <div className="grid grid-cols-4 gap-4 mb-8">
          {icons.map((icon) => (
            <Button
              key={icon.id}
              variant="outline"
              className="aspect-square p-0 flex items-center justify-center bg-gray-50 border-0 hover:bg-gray-100 rounded-full text-2xl"
              aria-label={icon.label}
            >
              {icon.emoji}
            </Button>
          ))}
        </div>
      </div>

      {/* Create Button */}
      <div className="p-4">
        <Link href="/">
          <Button className="w-full bg-black hover:bg-emerald-500 text-white font-medium h-12">
            Create Assistant
          </Button>
        </Link>
      </div>
    </div>
  );
}
