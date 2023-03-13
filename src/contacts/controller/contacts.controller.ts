import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { OContact } from '../interfaces/contact-optional.interface';
import { Contact } from '../interfaces/contact.interface';
import { ContactsService } from '../service/contacts.service';

@Controller('contacts')
export class ContactsController {

    constructor(private contactService: ContactsService){}

    @Get()
    getAllContacts(){
        return this.contactService.getContacts();
    }

    @Get(':id')
    getContact(@Param('id', ParseIntPipe) id: number){
        return this.contactService.getContact(id);
    }

    @Post()
    createNewContact(@Body() newContact: Contact){
        return this.contactService.createContact(newContact);
    }

    @Put(':id')
    updateContact(@Param('id', ParseIntPipe) id: number, @Body() contact: OContact){
        return this.contactService.updateContact(id, contact);
    }

    @Delete(':id')
    deleteContact(@Param('id', ParseIntPipe) id: number){
        return this.contactService.deleteContact(id);
    }
}
