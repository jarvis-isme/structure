// /dto/register.dto

import { IsAscii, IsEmail, IsNotEmpty, IsNumberString, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({
    nullable: false,
  })
  @IsNotEmpty()
  @IsAscii()
  userName: string;

  @ApiProperty({
    nullable: false,
    minLength: 8,
    description: 'Password must be at least 8 characters',
  })
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @ApiProperty({})
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @ApiProperty({
    nullable: true,
  })
  @IsNumberString()
  phone: string;
}
