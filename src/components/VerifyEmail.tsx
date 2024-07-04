"use client";

import { trpc } from "@/trpc/client";
import { Loader2, XCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";
interface VerifyEmailProps {
  token: string
}

const VerifyEmail = ({ token }: VerifyEmailProps) => {

  const { data, isLoading, isError } =
    trpc.auth.verifyEmail.useQuery({
      token,
    })

  if (isError) {
    return (<div className="flex flex-col items-center gap-2">
      <XCircle className="h-8 w-8 text-red-500" />
      <h3 className="font-semibold text-xl">Bir problem Oluştu.</h3>
      <p className="text-muted-foreground text-md">
        Bu jeton geçersiz veya süresi dolmuş olabilir.
        Lütfen tekrar deneyin.
      </p>
    </div>
    )
  }

  if (data?.success) {
    return (
      <div className="flex h-full flex-col items-center justify-center">
        <div className="relative mb-4 h-60 w-60 text-muted-foreground">
          <Image src={'/fox-sent-email.png'} fill alt="fox sent email" />
        </div>

        <h3 className="font-semibold text-2xl">Artık Hazırsınız!</h3>
        <p className="text-muted-foreground text-center mt-1">
          Doğrulama yaptığınız için teşekkürler
        </p>
        <Link className={buttonVariants({ className: "mt-4" })} href='/sign-in'>Giriş Yap</Link>
      </div>
    )
  }

  if (isLoading) {
    return (<div className="flex flex-col items-center gap-2">
      <Loader2 className="animate-spin h-8 w-8 text-orange-600" />
      <h3 className="font-semibold text-xl">
        Onaylanıyor...
      </h3>
      <p className="text-muted-foreground text-md">
        E-postanızı doğruluyoruz.
      </p>
    </div>)
  }
}

export default VerifyEmail
