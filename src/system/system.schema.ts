import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose, { HydratedDocument } from "mongoose";
import { SystemPlanet } from "../system-planet/system-planet.schema";

export type SystemDocument = HydratedDocument<System>;

@Schema()
export class System {
    @Prop()
     systemStar: string;
        
    @Prop()
        systemName: string;

    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'SystemPlanet'})
        systemPlanets: SystemPlanet[]

    @Prop()
        cords: string;
    
    @Prop()
        hanger: string;
}

export const SystemSchema = SchemaFactory.createForClass(System);

