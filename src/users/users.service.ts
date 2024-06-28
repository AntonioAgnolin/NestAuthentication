import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './schemas/user.schema';
import { Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  //Método para criar um novo usuário
  async create(createUserDto: CreateUserDto): Promise<User> {
    createUserDto.password = await this.hashPass(createUserDto.password);
    const createdUser = await this.userModel.create(createUserDto);
    return createdUser;
  }

  //Método para buscar um usuários por ID
  async findById(id: string): Promise<User | null> {
    return this.userModel.findById(id).select('-password').exec();
  }

  //Método para buscar todos os usuários
  async findAll(): Promise<User[]> {
    return this.userModel.find().select('-password').exec();
  }

  //Método para encontrar um usuário pelo nome de usuário.
  async findUser(username: string): Promise<User | null> {
    return this.userModel.findOne({ name: username }).exec();
  }

  //Método para atualizar um usuário por ID
  async update(id: string, updateUserDto: UpdateUserDto): Promise<User | null> {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true }).exec();
  }

  //Método para remover um usuário por ID
  async remove(id: string): Promise<User | null> {
    return this.userModel.findByIdAndDelete(id).exec();
  }

  //Método que faz hash de uma senha usando bcrypt.
  private async hashPass(pass: string): Promise<string> {
    const saltRounds = 10;
    const hashedPass = await bcrypt.hash(pass, saltRounds);
    return hashedPass;
  }
}
