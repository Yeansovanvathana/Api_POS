import { ApiProperty } from '@nestjs/swagger';

export class CreateProductCatagoriesDto {
  @ApiProperty()
  name: string;
}
