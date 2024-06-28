import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

//Define a interface que combina a classe Product e o Document do Mongoose.
export type ProductDocument = Product & Document;

//Define o esquema do Mongoose usando a decoradora @Schema.
@Schema()
export class Product {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  price: number;
}

//Cria e exporta o esquema do Mongoose para a classe Product usando SchemaFactory.
export const ProductSchema = SchemaFactory.createForClass(Product);
