import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ContactsController } from './controller/contacts.controller';
import { ContactEntity } from './entities/contact.entity';
import { ContactsService } from './service/contacts.service';

@Module({
  imports: [TypeOrmModule.forFeature([ContactEntity])],
  controllers: [ContactsController],
  providers: [ContactsService]
})
export class ContactsModule {}
