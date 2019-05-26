import { Module } from '@nestjs/common';
import { GetModule } from './get/get.module';
import { PostModule } from './post/post.module';
import { MonconfigService } from './monconfig/monconfig.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    GetModule,
    PostModule,
    MongooseModule.forRootAsync({ useClass: MonconfigService }),
  ],
  providers: [MonconfigService],
})
export class AppModule {}
