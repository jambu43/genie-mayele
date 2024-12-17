import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

function Header() {
  return (
    <header className="flex justify-between items-center p-4">
      <div className="flex items-center">
        <Link href="/">
          <Image
            src="/mayele-tech.jpg"
            alt="Genie Logo"
            width={100}
            height={100}
          />
        </Link>
        {/* <span className="ml-2 text-xl font-semibold">Genie Mayele</span> */}
      </div>
      <div className="flex items-center gap-2">
        <button className="bg-gray-100 px-3 py-1 rounded-full text-sm">
          <select name="" id="">
            <option value="">Lingala</option>
            <option value="">Français</option>
            <option value="">Anglais</option>
          </select>
        </button>
        <Link href="/params">
          <Button
            variant="ghost"
            size="icon"
            className="text-gray-600 rounded-[100%]"
          >
            <Menu className="w-6 h-6" />
          </Button>
        </Link>
      </div>
    </header>
  );
}

export default Header;
