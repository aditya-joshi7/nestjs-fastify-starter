import { Controller, Get, Inject } from '@nestjs/common';
import { ICatProviderName } from 'src/common/constants/interface.constants';
import { ICatProvider } from '../interface/providerInterface/iCat.provider';
import { ApiTags } from '@nestjs/swagger';
@ApiTags('Cat')
@Controller('cat/v1')
export class CatController {
  constructor(
    @Inject(ICatProviderName)
    private readonly _catProvider: ICatProvider,
  ) {}

  @Get('/fetchAllCats')
  async fethAllCats(): Promise<String[]> {
    const reponse: Array<String> = await this._catProvider.findAllCats();
    return reponse;
  }
}
