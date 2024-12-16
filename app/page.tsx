import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <>
      {/* Tools */}
      <div className="flex justify-between px-4 py-2">
        {[
          "New",
          "Logo Creator",
          "Signature Creator",
          "Image Generator",
          "Study Helper",
        ].map((tool, index) => (
          <div key={tool} className="flex flex-col items-center">
            <div
              className={`w-14 h-14 rounded-full flex items-center justify-center ${
                index === 0 ? "bg-gray-200" : "bg-teal-100"
              }`}
            >
              {index === 0 ? "+" : "🤖"}
            </div>
            <span className="text-xs mt-1 text-center">{tool}</span>
          </div>
        ))}
      </div>

      {/* Featured Card */}
      <Card className="mx-4 my-2 overflow-hidden">
        <Image
          src="/mayele-smart.jpg"
          alt="2025 New Year"
          width={400}
          height={200}
          className="w-full"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">
            Radiant Resolutions, Welcome 2025
          </h2>
          <p className="text-sm text-gray-600">
            Embrace Change and New Adventures
          </p>
        </div>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-2 gap-4 p-4">
        {[
          { icon: "🖼️", label: "Image Generator" },
          { icon: "🌐", label: "Ask Web" },
          { icon: "📄", label: "Ask PDF" },
          { icon: "🔍", label: "Image Analyzer" },
        ].map((action) => (
          <button
            key={action.label}
            className="flex flex-col items-center justify-center bg-gray-100 p-4 rounded-lg"
          >
            <span className="text-2xl mb-2">{action.icon}</span>
            <span className="text-sm">{action.label}</span>
          </button>
        ))}
      </div>

      {/* Message Input */}
      <div className="mt-auto p-4 flex items-center">
        <Input placeholder="Write a message" className="flex-grow mr-2" />
        <Button size="icon">
          <Image src="/send-icon.svg" alt="Send" width={24} height={24} />
        </Button>
      </div>
    </>
  );
}
