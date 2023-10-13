import z from 'zod';

export const RegisterSchema = z
  .object({
    username: z.string().min(3, 'Deve conter no minimo 3 letras'),
    email: z.string().email('insira um email valido'),
    password: z
      .string()
      .min(8, { message: 'Deve conter no minimo 8 caracteres' })
      .regex(
        /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/gm,
        'Deve conter letra maiuscula e caracter especial',
      ),
    confirmPassword: z.string().min(1, 'confirme a senha'),
  })
  .refine(({ password, confirmPassword }) => password === confirmPassword, {
    message: 'A senha não corresponde',
    path: ['confirmPassword'],
  });
