import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';

//Módulo principal do aplicativo NestJS.
@Module({
  imports: [ //Configura o Mongoose para se conectar ao MongoDB em execução localmente.
    MongooseModule.forRoot('mongodb://localhost/nest'), 
    UsersModule,
    AuthModule,
    ProductsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
