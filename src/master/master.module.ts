import { Module } from "@nestjs/common";
import { MasterService } from "./master.service";
import { MasterController } from "./master.controller";
import { AuthenticationModule } from "./authentication/authentication.module";

@Module({
  imports: [AuthenticationModule],
})
export class MasterModule {}
