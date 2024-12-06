'use client'
import {
    NavigationMenu,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"

import Drawer from './drawer'
import { MENU } from "@/lib/constants";
import Logo from "../shared/logo";
import TransitionLink from "../transitions-link";


function Header() {

    return (
        <header className='bg-primary text-white sticky top-0 z-50'>
            <div className=" text-sm uppercase  py-3  container  flex  lg:justify-between items-center gap-20">
                <div>
                    <Logo />
                </div>
                <NavigationMenu className="hidden lg:flex" >
                    <NavigationMenuList className='gap-4'>
                        {
                            MENU.map((item, index) => {
                                
                                    return (
                                        <TransitionLink key={index} href={item.href} >
                                            <p className="uppercase">
                                                {item.label}
                                            </p>
                                        </TransitionLink>
                                    )

                            }
                            )

                        }
                    </NavigationMenuList>

                </NavigationMenu>
                <div className="lg:hidden">
                    <Drawer />
                </div>

            </div>
        </header>
    )
}

export default Header