import z from 'zod';

export const LoginSchema = z.object({
  email: z.string().email('insira um email valido'),
  password: z
    .string()
    .min(8, { message: 'Deve conter no minimo 8 caracteres' }),
});
