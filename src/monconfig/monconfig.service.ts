import { Injectable } from '@nestjs/common';
import { MongooseOptionsFactory, MongooseModuleOptions } from '@nestjs/mongoose';
@Injectable()
export class MonconfigService implements MongooseOptionsFactory {
    createMongooseOptions(): MongooseModuleOptions | Promise<MongooseModuleOptions> {
        const uri = 'mongodb://localhost:27017/';
        return {
            uri,
            useNewUrlParser: true,
            dbName: 'local',
        }
    }
}
