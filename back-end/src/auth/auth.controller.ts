import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto';
import { SignAuthDto } from './dto/sigin-auth.dto';
import { Public } from './common/decorators/public.decorator';

@Controller('login')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('register')
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Public()
  @Post()
  findOneUser(@Body() signAuthDto: SignAuthDto) {
    return this.authService.findOneUser(signAuthDto);
  }
}
