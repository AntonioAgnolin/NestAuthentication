import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

//Controlador responsável pelas operações relacionadas a produtos.
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  //Rota para criar um novo produto
  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    return this.productsService.create(createProductDto);
  }

  //Rota para obter todos os produtos
  @Get()
  async findAll() {
    return this.productsService.findAll();
  }

  //Rota para obter um produto por ID
  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.productsService.findById(id);
  }

  //Rota para atualizar um produto por ID
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productsService.update(id, updateProductDto);
  }

  //Rota para remover um produto por ID
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.productsService.remove(id);
  }
}
