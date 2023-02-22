import { Document } from 'mongoose';

export interface IBuilding extends Document {
  readonly name: string;
  readonly description: string;
  readonly imageSrc: string;
  readonly cost: number;
  readonly techLevel: number;
}
