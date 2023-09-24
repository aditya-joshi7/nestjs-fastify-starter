import { Module } from '@nestjs/common';
import { CommonModule } from './common.module';
import { CatModule } from './cat.module';
//import { DBModule } from './db.module';

@Module({
  imports: [CommonModule, CatModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
