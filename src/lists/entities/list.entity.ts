import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class List extends Document {
  @Prop({
    required: true
  })
  title: string;

  description: string;

  @Prop({
    default: false
  })
  state: boolean;
  
  createAt: number;
  updateAt?: number;
}

export const ListSchema = SchemaFactory.createForClass(List);