import { Injectable, UnauthorizedException, BadRequestException } from '@nestjs/common';
import { JwtService, JwtSignOptions } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { comparePassword } from 'src/utils/bcrypt';
import { cleanText } from 'src/utils/helper';
import { LoggerService } from '../logger/logger.service';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async login(data: LoginDto) {
    const { userName, password } = data;
    // const account = await this.accountModel.getOne({
    //   where: { userName },
    // });

    // if (!account) throw new UnauthorizedException();

    // const isPasswordMatch = comparePassword(password, account.password);
    // if (!isPasswordMatch) throw new UnauthorizedException();

    // const payload: AccountPayload = {
    //   id: account.id,
    //   userName: account.userName,
    // };

    return {
      // accessToken: this.signJwt(payload),
    };
  }

  // signJwt(payload: AccountPayload, options: JwtSignOptions = jwtOptions) {
  //   return this.jwtService.sign(payload, options);
  // }
}
