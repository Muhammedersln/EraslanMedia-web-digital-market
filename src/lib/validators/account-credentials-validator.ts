import { z } from 'zod'

export const AuthCredentialsValidator = z.object({
    email: z.string().email({message: 'Geçerli eposta.'}),
    password: z.string().min(8, { message: 'Şifreniz en az 8 karakter olmalıdır.' })
})

export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>