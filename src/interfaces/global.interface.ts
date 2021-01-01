import { Document } from 'mongoose';

export class GlobalInterface extends Document {
  readonly name : string;
  readonly code : string;
  readonly count: number;
  readonly goal : number;
  readonly priority : number;
  readonly value : number;
  readonly category : string;
  readonly archived : boolean;
}
