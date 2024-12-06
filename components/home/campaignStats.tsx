import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Plus } from 'lucide-react'

export default function CampaignStats() {
  return (
    <div className="relative bg-[#1A1A1A] px-4 py-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute right-0 top-0 grid grid-cols-3 gap-8 opacity-20">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className="h-24 w-24 rotate-45 transform bg-gradient-to-br from-[#FF0000] to-transparent"
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto relative">
        <div className="grid gap-8 md:grid-cols-2 items-center">
          {/* Campaign Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="aspect-[3/4] relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=400&width=300"
                  alt="Campaign billboard"
                  className="object-cover"
                  fill
                />
              </div>
            </div>
            <div className="space-y-4 pt-8">
              <div className="aspect-video relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=300"
                  alt="Bus stop campaign"
                  className="object-cover"
                  fill
                />
              </div>
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Poster campaign"
                  className="object-cover"
                  fill
                />
              </div>
            </div>
          </div>

          {/* Stats Content */}
          <div className="text-white space-y-6">
            <h2 className="text-4xl font-bold leading-tight">
              Nous avons à
              <br />
              notre actif
            </h2>
            <div className="flex items-baseline gap-2">
              <Plus className="h-12 w-12 text-white" />
              <span className="text-8xl font-bold">100</span>
            </div>
            <p className="text-2xl">Campagnes réussis</p>
            <Button
                variant="outline"
                size="lg"
                className="border border-white rounded-full bg-transparent p-8 mt-10"
              >
                Prendre rendez-vous
              </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

