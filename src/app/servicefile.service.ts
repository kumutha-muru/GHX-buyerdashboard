import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { getAppoinmentReport, getRecentVisitors, getRecentVendorRegistrations, getVendorsByCustomer, 
  getVendorsPermission, getVendorRepsByCustomer, getRepsPermissions, getAppointmentRequestsPermissions }
   from './classfiles/classfile';
@Injectable({
  providedIn: 'root'
})
export class ServicefileService {

  constructor(public http:HttpClient) { }
  recentvisitors():Observable<getRecentVisitors[]>
  {
    const url='/assets/getRecentVisitors.json';
    return this.http.get<getRecentVisitors[]>(url);
  }
  recentvendorregistrations():Observable<getRecentVendorRegistrations[]>
  {
    const url='/assets/getRecentVendorRegistrations.json';
    return this.http.get<getRecentVendorRegistrations[]>(url);
  }
  appoinment():Observable<getAppoinmentReport[]>
  {
    const url='/assets/getAppointmentReport.json';
    return this.http.get<getAppoinmentReport[]>(url);
  }
  vendorbycustomer():Observable<getVendorsByCustomer[]>{
    const url='/assets/getVendorsByCustomer.json';
    return this.http.get<getVendorsByCustomer[]>(url);
  }
vendorpermissions():Observable<getVendorsPermission[]>{
  const url='/assets/getVendorsPermissions.json';
  return this.http.get<getVendorsPermission[]>(url);
}
vendorreps():Observable<getVendorRepsByCustomer[]>{
  const url='/assets/getVendorRepsByCustomer.json';
  return this.http.get<getVendorRepsByCustomer[]>(url);
}
repspermissions():Observable<getRepsPermissions[]>{
  const url='/assets/getRepsPermissions.json';
  return this.http.get<getRepsPermissions[]>(url);
}
appointmentrequestpermissions():Observable<getAppointmentRequestsPermissions[]>{
  const url='/assets/getAppointmentRequestsPermissions.json';
  return this.http.get<getAppointmentRequestsPermissions[]>(url);
}
}
