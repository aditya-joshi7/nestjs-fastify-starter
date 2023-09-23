import { Module } from '@nestjs/common';
import { getEnvPath } from 'src/common/utilityFunction/configManager.common';
import { RestServiceUtils } from 'src/common/utilityFunction/restUtils.common';
import { ConfigModule } from '@nestjs/config';
import { join } from 'path';

const dest = join(__dirname, '../common/envs');
const envFilePath = getEnvPath(dest);
@Module({
  imports: [ConfigModule.forRoot({ envFilePath, isGlobal: true })],
  controllers: [],
  exports: [RestServiceUtils],
  providers: [RestServiceUtils],
})
export class CommonModule {}
