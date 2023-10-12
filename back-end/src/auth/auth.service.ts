import {
  Injectable,
  UnauthorizedException,
  NotFoundException,
} from '@nestjs/common';
import { CreateAuthDto } from './dto/create-auth.dto';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { SignAuthDto } from './dto/sigin-auth.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private jwt: JwtService,
  ) {}

  async create(createAuthDto: CreateAuthDto) {
    const pass_Bcrypt = bcrypt.hashSync(createAuthDto.password, 10);

    createAuthDto.password = pass_Bcrypt;

    const user = await this.prisma.user.findUnique({
      where: { email: createAuthDto.email },
    });

    if (user != null) throw new UnauthorizedException();

    const newUser = await this.prisma.user.create({
      data: { ...createAuthDto },
    });

    const payload = { sub: newUser.id, username: newUser.username };
    return { access_token: await this.jwt.signAsync(payload) };
  }

  async findOneUser(signAuthDto: SignAuthDto) {
    const user = await this.prisma.user.findUnique({
      where: { email: signAuthDto.email },
      select: {
        id: true,
        username: true,
        password: true,
      },
    });

    if (user === null) throw new NotFoundException();

    const pass_Bcrypt = bcrypt.compareSync(signAuthDto.password, user.password);

    if (!pass_Bcrypt) throw new UnauthorizedException();

    const payload = { sub: user.id, username: user.username };
    return { access_token: await this.jwt.signAsync(payload) };
  }
}
