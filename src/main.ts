import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/common/enums/transport.enum';
import * as compression from 'compression';
import * as helmet from 'helmet';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.connectMicroservice({
    transport: Transport.TCP,
    options: {
      retryAttempts: 20,
      retryDelay: 7000,
    },
  });
  app.use(compression());
  app.use(helmet());
  await app.startAllMicroservicesAsync();
  await app.listen(9504);
}
bootstrap();
