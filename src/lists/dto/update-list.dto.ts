import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateListDto {
  @IsString()
  @IsUUID()
  @IsOptional()
  public readonly id?: string;

  @IsString()
  @IsOptional()
  public readonly title?: string;

  @IsString()
  @IsOptional()
  public readonly tasks?: string;
}