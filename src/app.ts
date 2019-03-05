import {Aurelia} from 'aurelia-framework';
import {PLATFORM} from 'aurelia-pal';
import { Person } from 'models/person';

export class App {
  personList:Person[] = new Array<Person>();
  selectedPerson:Person = null;


  activate() {
    let person1 = new Person;
    person1.firstName = 'Max';
    person1.lastName = 'Müller';
    this.personList.push(person1);

    // Adding a person object in json format.
    this.personList.push({firstName:"Alexander", lastName: "Diendorfer"});
  }
  clearList(): void {
      this.personList.splice(0);
  }

  newPerson(): void {
    this.selectedPerson = new Person();
    
  }
  addPerson(): void {
    this.personList.push(this.selectedPerson);
    this.selectedPerson = null;
  }

  removePerson(person: Person): void {
    this.personList.splice(this.personList.indexOf(person),1);
  }

  removePersonByIndex(index:number) :void {
    this.personList.splice(index,1);
  }

}
