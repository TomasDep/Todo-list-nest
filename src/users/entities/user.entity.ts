import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document } from "mongoose";

@Schema()
export class User extends Document {
  name: string;
  
  @Prop({
    unique: true,
    index: true
  })
  username: string;
  
  password: string;
  
  createAt: number;
  updateAt?: number;
}

export const UserSchema = SchemaFactory.createForClass(User);