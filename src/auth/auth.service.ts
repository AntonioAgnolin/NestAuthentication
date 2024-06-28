import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { User } from '../users/schemas/user.schema';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}
  //Realiza a autenticação de um usuário
  async signIn(username: string, pass: string): Promise<{ access_token: string }> {
    //Busca o usuário pelo nome de usuário
    const user = await this.usersService.findUser(username) as User & { _id: string };
    //Verifica se o usuário existe e se a senha está correta
    if (!user || !(await bcrypt.compare(pass, user.password))) {
      throw new UnauthorizedException();
    }
    //Cria o payload do JWT com o ID do usuário e o nome de usuário
    const payload = { sub: user._id, username: user.name };
    //Retorna o token de acesso JWT assinado
    return {
      access_token: await this.jwtService.signAsync(payload),
    };
  }
}
