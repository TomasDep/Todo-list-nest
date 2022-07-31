import { IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @MinLength(3)
  @MaxLength(10)
  username: string;
}
