import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  messages: string[] = [];

  add(mess: string){
    this.messages.push(mess);
  }
  clear(){
    this.messages = [];
  }





}
