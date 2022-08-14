import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

import { Document, now } from 'mongoose';

@Schema()
export class List extends Document {
  @Prop({ required: true, index: true })
  title: string;
  @Prop({ required: true, index: true })
  tasks: string;
  @Prop({ default: false, index: true })
  state: boolean;
  @Prop({ default: now() })
  createAt: number;
  @Prop({ default: now() })
  updateAt?: number;
}

export const ListSchema = SchemaFactory.createForClass(List);
