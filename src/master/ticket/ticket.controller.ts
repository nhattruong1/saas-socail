import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFile,
} from "@nestjs/common";
import { TicketService } from "./ticket.service";
import { CreateTicketDto } from "./dto/create-ticket.dto";
import { UpdateTicketDto } from "./dto/update-ticket.dto";
import { FileInterceptor } from "@nestjs/platform-express";

@Controller("master/ticket")
export class TicketController {
  constructor(private readonly ticketService: TicketService) {}

  @Post()
  create(@Body() createTicketDto: CreateTicketDto) {
    return this.ticketService.create(createTicketDto);
  }

  @Post("/attachment")
  @UseInterceptors(FileInterceptor("file"))
  uploadAttachment(@UploadedFile() file: Express.Multer.File) {
    return this.ticketService.uploadAttachment(file);
  }

  @Get()
  findAll() {
    return this.ticketService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.ticketService.findOne(+id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updateTicketDto: UpdateTicketDto) {
    return this.ticketService.update(+id, updateTicketDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.ticketService.remove(+id);
  }
}
