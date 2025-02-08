/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import * as qs from 'qs';

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(AppModule,
        new FastifyAdapter({
            querystringParser: (str) => qs.parse(str),
        }),
    );
    app.enableCors();
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
