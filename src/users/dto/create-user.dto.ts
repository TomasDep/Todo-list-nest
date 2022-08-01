import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  name: string;
  
  @IsString()
  @MinLength(3)
  @MaxLength(10)
  username: string;
  
  @IsString()
  @MinLength(3)
  @MaxLength(12)
  password: string;
}
