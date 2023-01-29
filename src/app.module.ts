import { Module } from "@nestjs/common";
import { TenantModule } from "./tenant/tenant.module";
import { MasterModule } from "./master/master.module";

@Module({
  imports: [TenantModule, MasterModule],
})
export class AppModule {}
