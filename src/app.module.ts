import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContactsModule } from './contacts/contacts.module';
import { ContactEntity } from './contacts/entities/contact.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: "contact-list",
      entities: [ContactEntity],
      synchronize: true
    }),
    ContactsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
