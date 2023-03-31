import { Component, OnInit  } from '@angular/core';
import { Employee } from 'src/app/models/employee.model';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {
employees: Employee[] = [];
  // {
  //   id: '5ghgghhghdt567hr-6456hfknvutu-67577hnfhj',
  //   name: 'Harsh Patel',
  //   email: 'hp22@gmail.com',
  //   phone: 9712050025,
  //   salary: 100000,
  //   department: 'Information Technology'
  // },
  // {
  //   id: '5gf6yhygf876-cxcv344437859-hgdg435vncj',
  //   name: 'Zeel Chavada',
  //   email: 'zc21@gmail.com',
  //   phone: 9923055178,
  //   salary: 120000,
  //   department: 'Accounts'
  // },
  // {
  //   id: 'fgdgr45464gff7-fgrygebdy78-7366hnfmcgdn',
  //   name: 'Smit Patel',
  //   email: 'Sp20@gmail.com',
  //   phone: 7621015957,
  //   salary: 150000,
  //   department: 'Humang n Resources'
  // }


constructor(private employeesService: EmployeesService) { }

ngOnInit(): void{
  // this.employees.push()
  this.employeesService.getAllEmployees()
  .subscribe({
    next: (employees) => {
      // console.log(employees);
      this.employees = employees;
    },
    error: (response) => {
      console.log(response);
    }
  });
}

}
