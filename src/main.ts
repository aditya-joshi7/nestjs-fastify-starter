import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import { AppModule } from './module/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
  );
  const config = new DocumentBuilder()
    .setTitle('NestJS BoilerPlate')
    .setDescription('APIs for project')
    .setVersion('1.0')
    .addTag('boilerplate')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  await app.listen(process.env.PORT, '0.0.0.0', () => {
    console.log(`Application started on port ${process.env.PORT}`);
  });
}
bootstrap();
