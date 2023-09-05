import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WebApiService } from './web-api.service';

var apiUrl ='http://localhost:8100';

var httpLink = {
  getAllEmployee: apiUrl + "/api/employee/getAllEmployee",
  deleteEmployeeById: apiUrl + "/api/employee/deleteEmployeeById",
  getEmployeeDetailsById: apiUrl + "/api/employee/getEmployeeDetailsById",
  saveEmployee: apiUrl + "/api/employee/saveEmployee"
}

@Injectable({
  providedIn: 'root'
})
export class HttpProviderService {

  constructor(private webApiService: WebApiService) { }

  public getAllEmployee(): Observable<any> {
    return this.webApiService.get(httpLink.getAllEmployee);    
  }

  public deleteEmployeeById(model: any): Observable<any> {
    return this.webApiService.post(httpLink.deleteEmployeeById + '?employeeId=' + model, "");
  }

  public getEmployeeDetailsById(model: any): Observable<any> {
    return this.webApiService.get(httpLink.getEmployeeDetailsById + '?employeeId=' + model);
  }

  public saveEmployee(model:any): Observable<any> {
    return this.webApiService.post(httpLink.saveEmployee, model);
  }
}
