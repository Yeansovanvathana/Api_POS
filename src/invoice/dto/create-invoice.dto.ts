import { ApiProperty } from '@nestjs/swagger';

export class CreateInvoiceDto {
  
  @ApiProperty()
  total: number;

  @ApiProperty()
  is_paid: boolean;

  @ApiProperty()
  user_id: number;

}
