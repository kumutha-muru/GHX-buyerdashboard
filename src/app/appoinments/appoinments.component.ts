import { Component, OnInit, ViewChild } from '@angular/core';
import { ServicefileService } from '../servicefile.service';
import { MatInput, MatSelect } from '@angular/material';

@Component({
  selector: 'app-appoinments',
  templateUrl: './appoinments.component.html',
  styleUrls: ['./appoinments.component.css']
})

export class AppoinmentsComponent implements OnInit {
  @ViewChild('fromInput', { read:MatInput,static:false}) fromInput: MatInput;
  @ViewChild('fromInput1', { read:MatInput,static:false}) fromInput1: MatInput;
  @ViewChild('fromInputo', { read:MatInput,static:false}) fromInputo: MatInput;
  @ViewChild('fromInputt', { read:MatInput,static:false}) fromInputt: MatInput;
  data: any = [];
  data1: any = [];
  obj: any;
  obj1: any;
  obj2: any;
  resetForm() {
    this.fromInput.value = '';
    this.fromInput1.value = '';
    this.fromInputo.value = '';
    this.fromInputt.value = '';
  }
   displayedColumns: string[] = ['actions', 'startdate/time', 'enddate/time', 'appoinment', 'company', 'user', 'email', 'staff', 'department', 'locations', 'subject', 'createdby', 'datetimecreated']
  displayedColumns1: string[] = ['checkbox','subject','status','startdate/time','enddate/time','recurrence','requester','company','submittedon','location','department','requestedstaff']
  constructor(public getvalue: ServicefileService) { }
  ngOnInit() {
    this.getvalue.appoinment().subscribe(data => {
    this.data = data;
      this.obj = this.data["VisionResponse"]
      this.obj1 = this.obj["AppointmentSummaryList"]
      console.log(this.obj1)
    });

    this.getvalue.appointmentrequestpermissions().subscribe(data1 => {
      this.data1 = data1;
        this.obj = this.data1["VisionResponse"]
        this.obj2 = this.obj["ApptRequestList"]
        console.log(this.obj2)
      });
     
      var wrapper1 = document.getElementById('wrapper1');
    var wrapper2 = document.getElementById('wrapper2');
    wrapper1.onscroll = function () {
      wrapper2.scrollLeft = wrapper1.scrollLeft;
    };
    wrapper2.onscroll = function () {
      wrapper1.scrollLeft = wrapper2.scrollLeft;
    };
        }
      }
