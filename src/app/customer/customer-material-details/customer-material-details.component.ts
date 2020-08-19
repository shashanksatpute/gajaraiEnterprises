import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import { ActivatedRoute } from "@angular/router";
export interface PeriodicElement {
  pencil: string;
  color: string;
  gum: string;
  stand: string;
  _id:string;
  date:string
}

const ELEMENT_DATA: PeriodicElement[] = [

 ];
@Component({
  selector: 'app-customer-material-details',
  templateUrl: './customer-material-details.component.html',
  styleUrls: ['./customer-material-details.component.css']
})
export class CustomerMaterialDetailsComponent implements OnInit {

  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }
  displayedColumns: string[] = ['pencil', 'color', 'gum', 'stand',"date"];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  customer_Id="";
  ngOnInit(): void {
    var id=this.route.snapshot.paramMap.get("id");
    this.customer_Id=id
    var url=window.location.origin+"/customerData/"+id;
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
  
  buyMaterial(customerData:any){
    console.log("******* Customer Data",customerData)
  }
}
