import { Inject, Injectable } from '@nestjs/common';
import { ICatProvider } from '../interface/providerInterface/iCat.provider';
import { ICatRepositoryName } from 'src/common/constants/interface.constants';
import { ICatRepository } from '../interface/repositoryInterface/iCat.repository';

@Injectable()
export class CatProvider implements ICatProvider {
  constructor(
    @Inject(ICatRepositoryName)
    private readonly _catRepository: ICatRepository,
  ) {}

  findAllCats = async (): Promise<String[]> => {
    const listOfCats: Array<String> = await this._catRepository.findAllCats();
    return listOfCats;
  };
}
