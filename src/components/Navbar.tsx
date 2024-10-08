import { Icons } from "./Icons";
import MaxWidthWrapper from "./MaxWidthWrapper";
import NavItems from "./NavItems";
import Cart from "./Cart";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
import Image from 'next/image'
import logo from '../../public/logo.png'
import { getSeverSideUser } from "@/lib/payload-utils";
import { cookies } from "next/headers";
import UserAccountNav from "./UserAccountNav";

const Navbar = async () => {
    const nextCookies = cookies()
    const { user } = await getSeverSideUser(nextCookies)
    

    return (
        <div className="bg-white sticky z-50 top-0 inset-x-0 h-16">
            <header className="relative bg-white">
                <MaxWidthWrapper>
                    <div className="border-b border-gray-200">
                        <div className="flex h-16 items-center">
                            {/* TODO: mobile nav */}
                            <div className="ml-4 flex lg:ml-0">
                                <Link href='/'>
                                    <Image src={logo} width={50} alt='logo'></Image>
                                    {/* <Icons.logo className="w-20" /> */}
                                </Link>
                            </div>

                            <div className="hidden z-50 lg:ml-8 lg:block lg:self-stretch">
                                <NavItems />
                            </div>

                            <div className="ml-auto flex items-center">
                                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:space-x-6">
                                    {user ? null : (<Link href="/sign-in"
                                        className={buttonVariants({ variant: "ghost" })}
                                    >Giriş Yap
                                    </Link>)}

                                    {user ? null : <span className="h-6 w-px bg-gray-200" aria-hidden="true" />}

                                    {user ? (
                                        <UserAccountNav user={user}/>
                                    ) : (
                                        <Link href="/sign-up" className={buttonVariants({ variant: 'ghost' })}>
                                            Hesap Oluştur
                                        </Link>)}

                                    {user ? (
                                        <span className="h-6 w-px bg-gray-200" aria-hidden="true" />) : null}

                                    {user ? null : (<div className="flex lg:ml-6">
                                        <span className="h-6 w-px bg-gray-200" aria-hidden="true" />
                                    </div>)}

                                    <div className="ml-4 flow-root lg:ml-6">
                                        <Cart />
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </MaxWidthWrapper>
            </header>
        </div>

    )
}

export default Navbar;