import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


const PORT = 3335;
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(
    PORT, 
    () => console.log(`POST SERVICE connect successfully .......\nhttp://localhost:${PORT}`)
  ); 
}
bootstrap();
