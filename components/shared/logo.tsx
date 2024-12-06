import Image from "next/image"
import Link from "next/link"

type Props = {
    width?: number
    height?: number
}

function Logo({ width, height }: Props) {
    return (
        <div>
            <Link href="/">
                <Image src="/Logo.png" alt="logo" width={width || 100} height={height || 30} />
            </Link>
        </div>
    )
}

export default Logo