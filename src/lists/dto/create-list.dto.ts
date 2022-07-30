import { IsString } from "class-validator";

export class CreateListDto {
  @IsString()
  public readonly title: string;

  @IsString()
  public readonly tasks: string;
}