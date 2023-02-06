import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Building {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  imageSrc: string;

  @Prop()
  cost: number;
}

export const BuildingSchema = SchemaFactory.createForClass(Building);
