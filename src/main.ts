import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { createSwagger } from "./common/setup/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  createSwagger(app);
  await app.listen(process.env.PORT || 3000);

}

bootstrap();
