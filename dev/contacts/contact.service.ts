import {Injectable} from "angular2/core";
import {CONTACT} from "./mock-contact";

@Injectable()
export class ContactService {
  getContacts(){
    return Promise.resolve(CONTACT);
  }
}
