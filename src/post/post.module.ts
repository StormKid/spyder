import { Module, HttpModule } from '@nestjs/common';
import { PostService } from './post.service';

@Module({
  imports:[HttpModule],
  providers: [PostService]
})
export class PostModule {}
