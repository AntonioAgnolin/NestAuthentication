import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

//Módulo de autenticação que gerencia as funcionalidades de login e proteção de rotas.
@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [ 
    UsersModule, //Importa o módulo de usuários para utilizar o serviço de usuários na autenticação
    JwtModule.register({ //Configura o módulo JWT com opções globais, incluindo a chave secreta e o tempo de expiração do token
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' }, //Tokens expiram em 60 segundos
    }),
  ],
  exports: [AuthService], //Exporta AuthService para ser usado em outros módulos
})
export class AuthModule {}