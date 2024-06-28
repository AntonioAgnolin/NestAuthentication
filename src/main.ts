import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

//Esta função serve como ponto de entrada para iniciar o servidor NestJS.
async function bootstrap() {
  const app = await NestFactory.create(AppModule); //Cria uma instância da aplicação
  app.useGlobalPipes(new ValidationPipe()); //Aplica um ValidationPipe global
  await app.listen(3000); //Inicia o servidor e escuta na porta 3000
}
bootstrap(); //Inicia a função de inicialização