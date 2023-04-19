import { config } from 'dotenv';

import { NestFactory } from '@nestjs/core';
import { AppModule } from './global/modules/app.module';
import { setupPrisma } from './global/handlers/prisma.handler';
import { setupGlobalPipes } from './global/handlers/global-pipes.handler';
import { useContainer } from "class-validator";

async function bootstrap() {
  config();

  const app = await NestFactory.create(AppModule);

  app.enableCors();

  useContainer(app.select(AppModule), { fallbackOnErrors: true })

  const port = process.env.PORT || 3000

  await setupPrisma({ app })
  console.log('Setup Prisma')

  await setupGlobalPipes({ app })

  await app.listen(port);

  console.log(`App is running on port: ${port}`)
}
bootstrap();
