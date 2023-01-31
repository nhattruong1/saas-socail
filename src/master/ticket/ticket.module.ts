import { Module } from "@nestjs/common";
import { TicketService } from "./ticket.service";
import { TicketController } from "./ticket.controller";
import { S3Client } from "../../../service/aws/s3.service";

@Module({
  controllers: [TicketController],
  providers: [TicketService, S3Client],
})
export class TicketModule {}
