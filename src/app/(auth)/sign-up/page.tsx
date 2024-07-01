"use client";
import { Icons } from '@/components/Icons'
import Image from 'next/image'
import logo from '../../../../public/logo.png'
import Link from 'next/link'
import { Button, buttonVariants } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { AuthCredentialsValidator, TAuthCredentialsValidator } from '@/lib/validators/account-credentials-validator'
import { trpc } from '@/trpc/client'

const Page = () => {



    const { register, handleSubmit, formState: { errors } } = useForm<TAuthCredentialsValidator>({
        resolver: zodResolver(AuthCredentialsValidator),
    })

    const {mutate,isLoading} =trpc.auth.createPayloadUser.useMutation({})


    const onSubmit = ({ email, password }: TAuthCredentialsValidator) => {
        mutate({email,password})
    }

    return (
        <>
            <div className="container relative flex pt-20 flex-col items-center justify-center lg:px-0">
                <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                    <div className="flex flex-col items-center space-y-2 text-center ">
                        <Image src={logo} width={100} alt='logo'></Image>
                        {/* <Icons.logo className="w-12 h-12" /> */}
                        <h1 className='text-2xl font-bold'>
                            Hesap Oluştur
                        </h1>

                        <Link className={buttonVariants({
                            variant: "link",
                            className: "text-muted-foreground text-orange-700 gap-1.5"
                        })} href="/sign-in">
                            Zaten bir hesabınız var mı? Giriş yapın
                            <ArrowRight className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className='grid gap-6'>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className='grid gap-2'>
                                <div className='grid gap-1 py-2'>
                                    <Label htmlFor='email' >E-Mail</Label>
                                    <Input
                                        {...register('email')}
                                        className={cn({
                                            "focus-visible:ring-red-500": errors.email
                                        })}
                                        placeholder='you@example.com' />
                                </div>
                                <div className='grid gap-1 py-2'>
                                    <Label htmlFor='password'>Şifre</Label>
                                    <Input
                                        {...register('password')}
                                        type='password'
                                        className={cn({
                                            "focus-visible:ring-red-500": errors.password
                                        })}
                                        placeholder='Şifre' />
                                </div>

                                <Button>Kayıt Ol</Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Page
