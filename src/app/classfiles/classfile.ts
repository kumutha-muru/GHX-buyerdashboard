export class getRecentVisitors{
  firstName:string;
  lastName:string;
  legalBusinessName:string;
  signedInOnLocal:string;
}

export class getAppoinmentReport{
  startTime:String;
  endTime:string;
  legalNameForReportDisplay:string;
  repsForReportDisplay:String;
  repsEmailForDisplay:string;
  buyersDetailsForDisplay:string;
  vendorsDetailsForDisplay:string;
  locationForDisplay:string;
  departmentForDisplay:String;
  subject:String;
  createdBy:string;
  createdOn:string;
}

export class getRecentVendorRegistrations{
  VisionResponse:string;
  legalName:String;
  createdOn:String;
}

export class getVendorsByCustomer{
  legalName:string;
  dbaName:string;
  indDocumentComplAlertCde:string;
  governmentComplAlertCode:string;
  location:string;
}

export class getVendorsPermission{
  legalName:String;
  dbaName:String;
}

export class getVendorRepsByCustomer{
  firstName:String;
  lastName:string;
  legalName:string;
  workPhone:string;
  userId:string;
  reqStatusForReport:string;
  indGovernmentComplAlertCde:string;
  location:string;
  gracePeriod:string;
}

export class getRepsPermissions{
  firstName:String;
  lastName:string;
  legalName:string;
  workPhone:string;
  userId:string;
}

export class getAppointmentRequestsPermissions{
  description:string;
  startTime :string;
  endTime :string;
  freq:string;
  legalName:string;
  createdOn:string;
  locationForDisplay:string;
  departmentName:string;
  requestedStaff:string;
}