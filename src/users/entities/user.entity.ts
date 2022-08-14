import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document, now } from 'mongoose';

@Schema()
export class User extends Document {
  @Prop({ index: true })
  name: string;
  @Prop({ unique: true, index: true })
  username: string;
  @Prop({ index: true })
  password: string;
  @Prop({ default: now() })
  createAt: number;
  @Prop({ default: now() })
  updateAt?: number;
}

export const UserSchema = SchemaFactory.createForClass(User);
