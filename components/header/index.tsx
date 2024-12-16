
import Image from "next/image";


function Header() {

    return (
        <header className="flex justify-between items-center p-4">
        <div className="flex items-center">
          <Image src="/mayele-tech.jpg" alt="Genie Logo" width={100} height={100} />
          {/* <span className="ml-2 text-xl font-semibold">Genie Mayele</span> */}
        </div>
        <button className="bg-gray-100 px-3 py-1 rounded-full text-sm">
          GPT-4o Mini ▼
        </button>
      </header>
    )
}

export default Header