import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { JoblistModule } from './joblist/joblist.module';
import { JobdetailModule } from './jobdetail/jobdetail.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: "postgres",
      password : "ROOT",
      database : "dans_startup",
      entities : [],
      autoLoadEntities: true,
      synchronize : false

    }),
    UsersModule,
    AuthModule,
    JoblistModule,
    JobdetailModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
