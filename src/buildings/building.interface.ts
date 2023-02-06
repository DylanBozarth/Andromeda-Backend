import { Document } from 'mongoose';

export interface IBuilding extends Document {
  readonly name: string;
  readonly description: string;
  readonly cost: number;
}
