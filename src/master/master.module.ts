import { Module } from "@nestjs/common";
import { MasterService } from "./master.service";
import { MasterController } from "./master.controller";
import { AuthenticationModule } from "./authentication/authentication.module";
import { TicketModule } from "./ticket/ticket.module";

@Module({
  imports: [AuthenticationModule, TicketModule],
})
export class MasterModule {}
