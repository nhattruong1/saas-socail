import { Module } from "@nestjs/common";
import { TenantModule } from "./tenant/tenant.module";
import { MasterModule } from "./master/master.module";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { ConfigModule } from "@nestjs/config";

@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ConfigModule.forRoot(), TenantModule, MasterModule],
})
export class AppModule {}
