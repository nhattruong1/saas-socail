import { Module } from "@nestjs/common";
import { TicketService } from "./ticket.service";
import { TicketController } from "./ticket.controller";
import { S3Client } from "../../../service/aws/s3.service";
import { TicketStorage } from "./ticket.storage";
import { PrismaMasterService } from "../../../service/prisma/master.service";

@Module({
  controllers: [TicketController],
  providers: [PrismaMasterService, TicketStorage, TicketService, S3Client],
})
export class TicketModule {}
