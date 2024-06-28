import { PartialType } from '@nestjs/mapped-types';
import { CreateProductDto } from './create-product.dto';

//DTO para atualizar um produto existente.
export class UpdateProductDto extends PartialType(CreateProductDto) {}
