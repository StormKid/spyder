import { Injectable } from '@nestjs/common';
import { MongooseOptionsFactory, MongooseModuleOptions } from "@nestjs/mongoose";
@Injectable()
export class MonconfigService implements MongooseOptionsFactory {
    createMongooseOptions(): MongooseModuleOptions | Promise<MongooseModuleOptions> {
        const uri = "http://localhost:27017/local";
        return {
            uri,
            useNewUrlParser: true,
            dbName:'local',
        }
    }
}
