import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Printer,
  FileText,
  Share2,
  FileEdit,
  LayoutDashboard,
} from "lucide-react";

const services = [
  {
    title: "Location des supports media",
    icon: LayoutDashboard,
    content:
      "Description détaillée de nos services de location de supports média",
  },
  {
    title: "Imprimerie",
    icon: Printer,
    content: "Description détaillée de nos services d'imprimerie",
  },
  {
    title: "Rédaction de stratégie",
    icon: FileText,
    content: "Description détaillée de nos services de rédaction de stratégie",
  },
  {
    title: "Marketing des réseaux sociaux",
    icon: Share2,
    content:
      "Description détaillée de nos services de marketing des réseaux sociaux",
  },
  {
    title: "Marketing des contenus",
    icon: FileEdit,
    content: "Description détaillée de nos services de marketing des contenus",
  },
];

export default function Services() {
  return (
    <div className="bg-[#FF0000] px-4 py-16 text-white md:px-6 lg:px-8 mt-10">
      <div className="container mx-auto">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="space-y-8">
            <h2 className="text-4xl font-bold leading-tight">
              Nous offrons un éventail complet de services.
            </h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="outline" size="lg" className="border border-white rounded-full bg-white text-black p-8 mt-10">
              Tout voir ici
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border border-white rounded-full bg-transparent p-8 mt-10"
              >
                Prendre rendez-vous
              </Button>
            </div>
          </div>
          <div className="bg-[#FF1111] rounded-3xl p-6">
            <Accordion type="single" collapsible className="space-y-4">
              {services.map((service, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border-b border-white/20"
                >
                  <AccordionTrigger className="flex items-center gap-4 text-lg hover:no-underline [&[data-state=open]>div]:rotate-45">
                    <service.icon className="h-6 w-6" />
                    {service.title}
                    <div className="ml-auto h-6 w-6 rounded-full border border-white flex items-center justify-center transition-transform duration-200">
                      +
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/80 pt-4">
                    {service.content}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
}
