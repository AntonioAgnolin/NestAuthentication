import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { Product, ProductSchema } from './schemas/product.schema';

//Este módulo fornece a configuração necessária para gerenciar produtos.
@Module({
  imports: [MongooseModule.forFeature([{ name: Product.name, schema: ProductSchema }])],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}

//Ele importa o esquema de produtos via MongooseModule.forFeature, 
//que permite a interação com a coleção 'products' no MongoDB.
//A controladora utiliza o serviço para manipular solicitações HTTP relacionadas a produtos.
//Serviço é responsável por executar operações CRUD no banco de dados MongoDB
//usando o esquema.