import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { PrismaMasterService } from "../service/prisma/master.service";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("/api");

  const prismaService = app.get(PrismaMasterService);
  await prismaService.enableShutdownHooks(app);
  await app.listen(8000);
}
bootstrap();
