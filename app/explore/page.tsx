// import { cn } from "@/lib/utils"
import { Card } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, GraduationCapIcon as Graduation, Calculator, Image, Palette, Pen, PenTool } from 'lucide-react'

interface MenuItem {
  title: string
  description: string
  icon: React.ReactNode
  isPro?: boolean
}

export default function Explore() {
  const menuItems: MenuItem[] = [
    {
      title: "Language Tutor",
      description: "Master new languages with personalized guidance.",
      icon: <BookOpen className="w-6 h-6 text-primary" />,
    },
    {
      title: "Study Helper",
      description: "Your companion for smarter study sessions.",
      icon: <Graduation className="w-6 h-6 text-primary" />,
    },
    {
      title: "Math Solver",
      description: "Solve any math problem with step-by-step guidance.",
      icon: <Calculator className="w-6 h-6 text-primary" />,
      isPro: true,
    },
    {
      title: "Image Generator",
      description: "Create stunning visuals in seconds.",
      icon: <Image className="w-6 h-6 text-primary" />,
      isPro: true,
    },
    {
      title: "Tattoo Artist",
      description: "Design unique tattoos tailored to your vision.",
      icon: <PenTool className="w-6 h-6 text-primary" />,
      isPro: true,
    },
    {
      title: "Designer",
      description: "Bring your creative ideas to life with professional designs.",
      icon: <Palette className="w-6 h-6 text-primary" />,
      isPro: true,
    },
    {
      title: "Signature Creator",
      description: "Design a distinctive signature that represents you.",
      icon: <Pen className="w-6 h-6 text-primary" />,
      isPro: true,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-background">
      {/* Top Navigation */}
      <Tabs defaultValue="education" className="w-full border-b">
        <TabsList className="w-full justify-start h-16 px-4 bg-background">
          <TabsTrigger 
            value="education" 
            className="data-[state=active]:bg-primary/10 data-[state=active]:text-primary"
          >
            Education
          </TabsTrigger>
          <TabsTrigger value="art">Art & Design</TabsTrigger>
          <TabsTrigger value="writing">Writing</TabsTrigger>
          <TabsTrigger value="production">Production</TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Menu Items */}
      <div className="flex-1 p-4 space-y-3">
        {menuItems.map((item, index) => (
          <Card key={index} className="flex items-center p-4 cursor-pointer hover:bg-accent">
            <div className="relative">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                {item.icon}
              </div>
              {item.isPro && (
                <div className="absolute -bottom-1 -right-1 bg-amber-500 text-xs font-bold px-1.5 rounded-full text-white">
                  PRO
                </div>
              )}
            </div>
            <div className="ml-4 flex-1">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          </Card>
        ))}
      </div>

    </div>
  )
}

