import { PrismaMasterService } from "../../../service/prisma/master.service";
import { Injectable } from "@nestjs/common";
import { GetListTicketDto } from "./dto/get-ticket.dto";
import { Paging } from "../../../helper/common/interface.common";

@Injectable()
export class TicketStorage {
  constructor(private readonly prismaMaster: PrismaMasterService) {}

  async getTicket(params: GetListTicketDto): Promise<Paging<any>> {
    const [tickets, totalTicket] = await this.prismaMaster.$transaction([
      this.prismaMaster.ticket.findMany({
        where: {},
        skip: params.size * params.page,
        take: Number(params.size),
      }),
      this.prismaMaster.ticket.count({
        where: {},
      }),
    ]);

    const data: Paging<any> = {
      total: totalTicket,
      data: tickets,
    };

    return data;
  }
}
