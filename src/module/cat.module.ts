import { Module } from '@nestjs/common';
import {
  ICatProviderName,
  ICatRepositoryName,
} from 'src/common/constants/interface.constants';
import { CommonModule } from './common.module';
import { CatProvider } from 'src/cat/provider/cat.provider';
import { CatRepository } from 'src/cat/repository/cat.repository';
import { CatController } from 'src/cat/controller/cat.controlle';

const catPvd = { provide: ICatProviderName, useClass: CatProvider };
const catRepo = { provide: ICatRepositoryName, useClass: CatRepository };

@Module({
  imports: [CommonModule],
  controllers: [CatController],
  exports: [],
  providers: [catPvd, catRepo],
})
export class CatModule {}
