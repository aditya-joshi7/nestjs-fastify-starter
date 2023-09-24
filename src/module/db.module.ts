import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

const dbcreds = JSON.parse(process.env.DB_CREDS);
@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      imports: [],
      useFactory: async () => ({
        type: 'postgres',
        host: dbcreds.host,
        username: dbcreds.username,
        password: dbcreds.password,
        database: dbcreds.dbname,
        port: dbcreds.port,
        entities: [join(__dirname, '../db/domain/**', '*.{ts,js}')],
      }),
    }),
  ],
})
export class DBModule {}
