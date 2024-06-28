import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from './schemas/user.schema';

//Este módulo fornece a configuração necessária para gerenciar usuários.
@Module({
  imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {}

//Importa o esquema do usuários por meio de MongooseModule.forFeature,
//permitindo interação com a coleção 'users' no MongoDB.
//O controlador utiliza o serviço para lidar com solicitações HTTP relacionadas aos usuários.
//Serviço é responsável por realizar operações CRUD no banco de dados MongoDB,
//usando o esquema de usuário definido.