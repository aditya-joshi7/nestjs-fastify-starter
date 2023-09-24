import { Injectable } from '@nestjs/common';
import { ICatRepository } from '../interface/repositoryInterface/iCat.repository';

@Injectable()
export class CatRepository implements ICatRepository {
  findAllCats = async (): Promise<String[]> => {
    return ['Billi', 'Lilli,', 'Milli'];
  };
}
