import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { dataSourceOptions } from 'db/data-source';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { InvoiceModule } from './invoice/invoice.module';
import { ProductModule } from './product/product.module';
import { ProductInvoiceModule } from './product_invoice/product_invoice.module';
import { SuppliesModule } from './supplies/supplies.module';
import { StocksModule } from './stocks/stock.module';
import { ProductCatagoriesModule } from './product_catagories/product_catagories.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(dataSourceOptions),
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    AuthModule,
    InvoiceModule,
    ProductModule,
    ProductInvoiceModule,
    SuppliesModule,
    StocksModule,
    ProductCatagoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
