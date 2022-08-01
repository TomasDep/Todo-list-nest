import { PartialType } from "@nestjs/mapped-types";
import { IsOptional, IsString, IsUUID } from "class-validator";
import { CreateListDto } from "./create-list.dto";

export class UpdateListDto extends PartialType(CreateListDto) {
  @IsString()
  @IsUUID()
  @IsOptional()
  public id: string;
}