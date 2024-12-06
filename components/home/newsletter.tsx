import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import Link from "next/link";
import { Instagram, Linkedin, Phone, MapPin, Mail } from "lucide-react";

export default function Newsletter() {
  return (
    <div className="min-h-screen bg-gradient-to-br  text-white relative overflow-hidden">
      {/* Light effect */}
      <div className="absolute top-0 left-0 w-full h-full bg-[url('/background-1.png')] bg-cover "></div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-5xl font-bold mb-4">
            Que la lumière soit sur votre marque
          </h2>
          <p className="text-xl mb-2">
            Chaque marque a un potentiel prêt à briller. Et la vôtre ? Avec
            OohMyPub, passez de l&apos;ombre à l&apos;éclat.
          </p>
          <p className="text-lg font-semibold">Abonnez-vous!</p>
          <p className="text-sm">
            Ne manquez pas nos astuces marketing chaque mois.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-8 max-w-2xl mx-auto">
          <form className="flex flex-col sm:flex-row gap-4">
            <Input
              type="text"
              placeholder="Prénom"
              className="flex-1 border-red-500 focus:ring-red-500"
            />
            <Input
              type="text"
              placeholder="Nom"
              className="flex-1 border-red-500 focus:ring-red-500"
            />
            <Input
              type="email"
              placeholder="Email"
              className="flex-1 border-red-500 focus:ring-red-500"
            />
            <Button
              type="submit"
              className="bg-red-500 hover:bg-red-600 text-white"
            >
              S&apos;inscrire
            </Button>
          </form>
        </div>

        <footer className=" py-8 mt-16 relative z-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-between items-start">
              <div className="mb-8 md:mb-0">
                <Image src="/logo.svg" alt="OohMyPub" width={120} height={40} />
                <div className="flex items-center mt-4">
                  <Phone className="w-4 h-4 mr-2" />
                  <span>+24381305034</span>
                </div>
                <div className="flex items-center mt-2">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>3, Av Cadeco, Kinshasa/Gombe</span>
                </div>
                <div className="flex items-center mt-2">
                  <Mail className="w-4 h-4 mr-2" />
                  <span>m.janclytale@oohmypub.com</span>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Nos Services</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="#">Location des supports media</Link>
                  </li>
                  <li>
                    <Link href="#">Imprimerie</Link>
                  </li>
                  <li>
                    <Link href="#">Rédaction de stratégie</Link>
                  </li>
                  <li>
                    <Link href="#">Marketing des réseaux sociaux</Link>
                  </li>
                  <li>
                    <Link href="#">Marketing des contenus</Link>
                  </li>
                  <li>
                    <Link href="#" className="text-red-500">
                      Voir plus
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap justify-between items-center">
              <div className="flex space-x-4">
                <Link href="#" className="text-sm">
                  Mention légale
                </Link>
                <Link href="#" className="text-sm">
                  Politique de confidentialité
                </Link>
                <Link href="#" className="text-sm">
                  Sécurité
                </Link>
                <Link href="#" className="text-sm">
                  FAQ
                </Link>
              </div>
              <div className="flex space-x-4 mt-4 md:mt-0">
                <Link href="#" aria-label="TikTok">
                  <Image
                    src="/tiktok-icon.svg"
                    alt="TikTok"
                    width={24}
                    height={24}
                  />
                </Link>
                <Link href="#" aria-label="Instagram">
                  <Instagram className="w-6 h-6" />
                </Link>
                <Link href="#" aria-label="LinkedIn">
                  <Linkedin className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
