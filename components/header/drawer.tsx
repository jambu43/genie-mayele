'use client'
import { useState } from "react"
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import { MENU } from "@/lib/constants";
import Logo from "../shared/logo";

import TransitionLink from "../transitions-link";



function Drawer() {
    const [open, setOpen] = useState(false)
    return (
        <Sheet open={open} onOpenChange={setOpen} >
            <SheetTrigger>
                <Menu />
            </SheetTrigger>
            <SheetContent side={'left'} className='bg-primary text-white uppercase'>
                <SheetHeader className='text-left items-start space-y-4'>
                    <SheetTitle>
                        <Logo />
                    </SheetTitle>
                    {

                        MENU.map((item, index) => {
                            return (

                                <TransitionLink key={index} href={item.href}  >
                                    <span className="uppercase" onClick={() => setOpen(false)}>
                                        {item.label}
                                    </span>

                                </TransitionLink>
                            )


                        })

                    }

                </SheetHeader>
            </SheetContent>
        </Sheet>

    )
}

export default Drawer