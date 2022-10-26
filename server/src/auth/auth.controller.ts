import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user.dto';


@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @Post('/login')
  async registration(@Body() userDto: CreateUserDto) {
    return await this.authService.registration(userDto)
  }

  @Post('/registration')
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto);
  }
}
