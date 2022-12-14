import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css'],
})
export class EmployeeDetailsComponent implements OnInit {
  id: number;
  employee: Employee;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private employeeService: EmployeeService
  ) {}

  ngOnInit() {
    this.employee = new Employee();

    this.id = this.route.snapshot.params['id'];
    this.employeeService.getEmployee(this.id).subscribe(
      (data) => {
        this.employee = data[0];
      },
      (error) => console.log(error)
    );
  }
  list() {
    this.router.navigate(['employees']);
  }
}
