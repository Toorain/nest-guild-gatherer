import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type GlobalDocument = GlobalItem & Document;

@Schema()
export class GlobalItem {
  @Prop()
  name: string;

  @Prop()
  code : string;

  @Prop()
  count: number;

  @Prop()
  goal : number;

  @Prop()
  priority : number;

  @Prop()
  value : number;

  @Prop()
  category : string;

  @Prop()
  archived : boolean;
}

export const GlobalSchema = SchemaFactory.createForClass(GlobalItem);

