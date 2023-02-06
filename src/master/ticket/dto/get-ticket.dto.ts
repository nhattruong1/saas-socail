import { IsEnum, IsInt, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { PriorityType } from "../../../../helper/common/enum.common";

export class GetListTicketDto {
  @IsInt()
  @Type(() => Number)
  @IsNotEmpty()
  readonly page: number;

  @IsInt()
  @Type(() => Number)
  @IsNotEmpty()
  readonly size: number;

  @IsEnum(PriorityType)
  @IsNotEmpty()
  readonly priority: PriorityType;

  @IsNotEmpty()
  readonly status: number;
}
