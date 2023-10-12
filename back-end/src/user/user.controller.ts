import { Controller, Body, Req, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { UpdateUserDto } from './dto/update.dto';

@Controller('updateuser')
export class UserController {
  constructor(private readonly loginService: UserService) {}

  @Patch()
  update(@Body() updateLoginDto: UpdateUserDto, @Req() request: Request) {
    const userId = request['user'];
    console.log(userId);

    return this.loginService.updateUser(userId, updateLoginDto);
  }

  /*
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.loginService.remove(+id);
  }
  */
}
