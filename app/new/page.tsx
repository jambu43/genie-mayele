import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function CreateAssistant() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Content */}
      <div className="flex-1 px-4 pt-4">
        <p className="text-gray-500 text-sm mb-1">Create an Assistant</p>
        <h1 className="text-2xl font-semibold mb-6">Name Your Assistant</h1>

        <div className="relative">
          <Input
            placeholder="Recipe Creator"
            className="border-black focus-visible:ring-black text-lg h-14 px-4"
          />
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-20 right-4">
        <Link href="/new/step2">
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
