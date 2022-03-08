import { Injectable } from '@angular/core';
import { Subject, SubjectSubscriber } from '_rxjs@6.5.5@rxjs/internal/Subject';

@Injectable({
  providedIn: 'root'
})
export class CommunicateService {

  private subject = new Subject<string>();

  constructor() { }

  ob = this.subject.asObservable() 

  emit(msg){
    this.subject.next(msg); 
  }

}
