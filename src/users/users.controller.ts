import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { AuthGuard } from 'src/auth/auth.guard';

//Controlador responsável pelas operações relacionadas a usuários.
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  //Rota para criar um novo usuário
  @Post()
  async create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);
    return this.usersService.create(createUserDto);
  }

  //Rota para obter todos os usuários
  @Get()
  async findAll() {
    return this.usersService.findAll();
  }

  //Rota para obter um usuário por ID
  @UseGuards(AuthGuard)
  @Get(':id')
  async findById(@Param('id') id: string) {
    return this.usersService.findById(id);
  }

  //Rota para atualizar um usuário por ID
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  //Rota para remover um usuário por ID
  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}