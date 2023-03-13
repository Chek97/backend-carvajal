import { HttpException, Injectable, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ContactEntity } from '../entities/contact.entity';
import { OContact } from '../interfaces/contact-optional.interface';
import { Contact } from '../interfaces/contact.interface';

@Injectable()
export class ContactsService {

    constructor(@InjectRepository(ContactEntity) private contactRepository: Repository<ContactEntity>){}

    async createContact(contact: Contact){

        const contactExist = await this.contactRepository.findOne({
            where: {
                email: contact.email
            }
        });

        if(contactExist){
            return new HttpException("El contacto ya existe", HttpStatus.CONFLICT);
        }

        const newContact = this.contactRepository.create(contact);
        return this.contactRepository.save(newContact);
    }

    getContacts(){
        return this.contactRepository.find();
    }

    async getContact(id: number){
        const contactFound = await this.contactRepository.findOne({
            where: {
                id
            }
        });

        if(!contactFound){
            return new HttpException("El contacto no existe", HttpStatus.NOT_FOUND);
        }

        return contactFound;
    }

    async updateContact(id: number, contact: OContact){
        const contactFound = await this.contactRepository.findOne({
            where: {
                id 
            }
        });
        
        if(!contactFound){
            return new HttpException("El contacto no existe", HttpStatus.NOT_FOUND);
        }

        const contactUpdate = Object.assign(contactFound, contact);
        
        return this.contactRepository.save(contactUpdate);
        
    }

    async deleteContact(id: number){
        const contactFound = await this.contactRepository.findOne({
            where: {
                id 
            }
        });

        if(!contactFound){
            return new HttpException("El contacto no existe", HttpStatus.NOT_FOUND);
        }

        return this.contactRepository.delete({id});
    }
}
