import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

//DTO para criar um novo produto.
export class CreateProductDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}
