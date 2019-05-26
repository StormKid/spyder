import { Module, HttpModule } from '@nestjs/common';
import { GetService } from './get.service';

@Module({
  imports : [HttpModule],
  providers: [GetService]
})
export class GetModule {}
