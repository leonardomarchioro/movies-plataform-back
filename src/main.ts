import { config } from 'dotenv';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './global/modules/app.module';
import { setupPrisma } from './global/handlers/prisma.handler';
import { setupGlobalPipes } from './global/handlers/global-pipes.handler';


async function bootstrap() {
  config();

  const app = await NestFactory.create(AppModule);

  const port = process.env.PORT || 3000

  await setupPrisma({ app })
  console.log('Setup Prisma')

  await setupGlobalPipes({ app })

  await app.listen(port);

  console.log(`App is running on port: ${port}`)
}
bootstrap();
