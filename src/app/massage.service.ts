import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MassageService {

  constructor() { }

  massages: Array<string> = [];

  addMassage(massage: string): void{
    this.massages.push(massage);
  }

  clear(): void{
    this.massages = [];
  }

}
