import { Body, Controller, Post, HttpCode, HttpStatus } from '@nestjs/common';
import { AuthService } from './auth.service';

//Controlador responsável pelas operações de autenticação.
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}
    //Endpoint para login de usuários
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>) {
        return this.authService.signIn(signInDto.username, signInDto.password);
    }
}