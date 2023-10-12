import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { UpdateUserDto } from './dto/update.dto';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  updateUser(id: string, updateUserDto: UpdateUserDto) {
    return this.prisma.user.update({
      where: { id: id },
      data: { ...updateUserDto },
    });
    /*
  remove(id: number) {
    return `This action removes a #${id} login`;
  }
  */
  }
}
