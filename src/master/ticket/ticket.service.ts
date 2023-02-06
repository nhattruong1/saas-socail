import { Injectable } from "@nestjs/common";
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { UpdateTicketDto } from "./dto/update-ticket.dto";
import { S3Client } from "../../../service/aws/s3.service";
import { TicketStorage } from "./ticket.storage";
import { GetListTicketDto } from "./dto/get-ticket.dto";

@Injectable()
export class TicketService {
  constructor(private readonly s3: S3Client, private readonly ticketStorage: TicketStorage) {}
  create(createTicketDto: CreateTicketDto) {
    return "This action adds a new ticket";
  }

  findAll(params: GetListTicketDto) {
    return this.ticketStorage.getTicket(params);
  }

  findOne(id: number) {
    return `This action returns a #${id} ticket`;
  }

  update(id: number, updateTicketDto: UpdateTicketDto) {
    return `This action updates a #${id} ticket`;
  }

  remove(id: number) {
    return `This action removes a #${id} ticket`;
  }

  uploadAttachment(file: Express.Multer.File) {
    return this.s3.upload(file, "temp");
  }
}
