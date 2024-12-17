import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";

export default function CreateAssistant() {
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
          <div className="h-1 rounded-full bg-emerald-400 w-1/3" />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-4">
        <p className="text-gray-500 text-sm mb-1">Create an Assistant</p>
        <h1 className="text-2xl font-semibold mb-6">
          How would you like this assistant to help you?
        </h1>

        <div className="relative">
          <Textarea
            placeholder="Create healthy meal recipes"
            className="min-h-[120px] border-black focus-visible:ring-black text-lg resize-none"
          />
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-20 right-4">
        <Link href="/new/step3">
          <Button
            size="icon"
            className="w-14 h-14 rounded-full bg-black hover:bg-emerald-500 shadow-lg"
          >
            <ArrowRight className="h-6 w-6" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
