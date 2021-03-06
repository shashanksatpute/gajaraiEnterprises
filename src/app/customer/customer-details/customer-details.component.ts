import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
export interface PeriodicElement {
  name: string;
  mobno: string;
  machine: string;
  _id:string;
  customer_id:string
}

const ELEMENT_DATA: PeriodicElement[] = [

 ];
@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }
  displayedColumns: string[] = ['customer_id','name', 'mobno', 'machine','actions'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  ngOnInit(): void {
    var url=window.location.origin+"/customerData";
   this.httpClient.get(url).subscribe((data)=>{
    console.log(data);
    this.dataSource=data['records']
   });

    console.log("***************************",url)

  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  
  onUpdate(customerData:any){
    console.log("******* Customer Data",customerData)
  }

}

