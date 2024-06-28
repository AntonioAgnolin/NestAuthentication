import { IsEmail, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsNotEmpty({ message: 'Nome é requerido' })
  name: string;

  @IsEmail({}, { message: 'Email deve ser um endereço válido' })
  @IsNotEmpty({ message: 'Email é requerido' })
  email: string;

  @IsString()
  @MinLength(12, { message: 'Senha deve ter ao menos 12 caracteres' })
  password: string;
}
