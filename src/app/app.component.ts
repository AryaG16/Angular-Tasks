import { Component } from '@angular/core';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'task';

  // dynamicArr: any[] = [];
  arr = ['abhs', 'sgdjga'];
  arrFill(val: string) {
    this.arr.push(val);
  }

  //Form task 2
  formData: any = {};
  hobbyArr: string[] = [];
  addHobby(h: string) {
    for (let i = 0; i < this.hobbyArr.length; i++) {
      if (h === this.hobbyArr[i]) {
        this.hobbyArr = this.hobbyArr.filter((item) => item !== h);
        return;
      }
    }
    this.hobbyArr.push(h);
  }
  retrieveData(data: any) {
    // console.log(data);
    if (this.validateForm(data)) this.formData = data;

    // console.log(this.formData);
    this.formData.hobby = this.hobbyArr;
    // console.log(this.formData);
  }
  displayForm = false;
  showFormData() {
    this.displayForm = true;
    console.log(this.formData);
  }
  //->validation
  error = '';
  validateForm(data: any) {
    if (data.name.length <= 4) {
      this.error = 'Name Length Is small';
      return false;
    }
    // regexp = new RegExp('/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/');
    // if(regexp.test(data.email)){
    //   this.error="Invalid Email";
    // return false;
    // }
    if (this.hobbyArr.length === 0) {
      this.error = 'At least Select one Hobby.';
      return false;
    }
    if (data.college === '') {
      this.error = 'select a college';
      return false;
    }
    return true;
  }

  //Array of Objects task 3
  people: any[] = [
    {
      id: 0,
      sF: false,
      name: 'aryan',
      family_person: [
        { name: 'Dr.B', email: 'b@gmail.com', phone: 97654 },
        { name: 'Alp', email: 'alp@gmail.com', phone: 65423 },
        { name: 'Nand', email: 'nand@gmail.com', phone: 973214 },
      ],
    },
    {
      id: 1,
      sF: false,
      name: 'Shivam',
      family_person: [
        { name: 'dev', email: 'dev@gmail.com', phone: 94454 },
        { name: 'pap', email: 'pap@gmail.com', phone: 99954 },
        { name: 'mom', email: 'mom@gmail.com', phone: 90054 },
      ],
    },
  ];
  showFamily(id: number) {
    this.people[id].sF = !this.people[id].sF;
  }

  //Todo List CRUD, Task 4
  list: any[] = [];
  id = 0;
  addTask(item: string) {
    this.list.push({ id: this.id++, name: item });
  }

  removeTask(id: number) {
    this.list = this.list.filter((item) => item.id !== id);
  }
  showChangeField = false;
  editTask() {
    this.showChangeField = !this.showChangeField;
  }
  changeTask(newTask: any, id: number) {
    this.list[id].name = newTask;
    this.showChangeField = false;
  }

  //Reactive form, Task 5

  formLog = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });
  showRF2 = false;
  name: string = '';
  email: string = '';
  password: string = '';
  get name1() {
    return this.formLog.get('name');
  }
  get email1() {
    return this.formLog.get('email');
  }
  get pass1() {
    return this.formLog.get('password');
  }
  RF1Submit() {
    this.name = this.name1?.value || '';
    this.email = this.email1?.value || '';
    this.password = this.pass1?.value || '';
    this.showRF2 = true;
    this.name2?.setValue(this.name);
    this.email2?.setValue(this.email);
    this.pass2?.setValue(this.password);
    console.log(this.formLog);
    console.log(this.name1?.value);
    console.log(this.name);
  }

  // onlyRead=true;
  // setTimeout(() => {

  // }, 10000 );
  formShow = new FormGroup({
    name2: new FormControl(''),
    email2: new FormControl(''),
    password2: new FormControl(''),
  });

  get name2() {
    return this.formShow.get('name2');
  }
  get email2() {
    return this.formShow.get('email2');
  }
  get pass2() {
    return this.formShow.get('password2');
  }
}
