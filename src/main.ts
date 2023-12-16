import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


const PORT = 3333;
async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  await app.listen(
    PORT, 
    () => console.log(`Server connect successfully .......!!!\nhttp://localhost:${PORT}`)
  );
}
bootstrap();
