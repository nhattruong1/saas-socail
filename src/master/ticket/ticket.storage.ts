import { PrismaMasterService } from "../../../service/prisma/master.service";

export class TicketStorage {
  constructor(private readonly prismaMaster: PrismaMasterService) {}

  getTicket() {
    const data = this.prismaMaster.ticket.findMany();
    return data;
  }
}
