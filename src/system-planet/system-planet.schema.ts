import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import mongoose from "mongoose";
import { Building } from "src/buildings/building.schema";


export interface StoredResource {
    ownership: string /// userId
    amount: number
    resourceType: string // resourceId
}

export interface Resource {
    name: string
    maxQuantity: number
    quantityUsed: number
    rateOfUse: number
    reusable: boolean
}

@Schema()
export class SystemPlanet {
    @Prop({ descriptions: 'planet name' })
     name: string 
    @Prop({ descriptions: 'userID' })
    ownership: string
    @Prop({ descriptions: 'random generated Resources with random amounts and rate of use' })
    resources: Resource[] 
    @Prop({ descriptions: 'resources that have been mined' })
    storedResouces: StoredResource[]
    @Prop({ type: [mongoose.Schema.Types.ObjectId], ref: 'Building',  descriptions: 'buildings' })
    buildings: Building[]
}

export const SystemPlanetSchema = SchemaFactory.createForClass(SystemPlanet);




// interface System {
// systemStar: string
// systemName: string
// systemPlanets: SystemPlanet[]
// cords: string
// hanger: string
// }

// interface SystemPlanet {
// name: string // planet name
// ownership: string // userID
// resources: Resource[] // random generated Resources with random amounts and rate of use
// storedResouces: SotoredResource[] // resources that have been mined
// buildings: string[]
// }
// interface Resource {
// name: string
// maxQuantity: number
// quantityUsed: number
// rateOfUse: number
// reusable: boolean
// }

// interface StoredResource {
// ownership: string /// userId
// amount: number
// resourceType: string // resourceId
// health: number // f