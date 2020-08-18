import { Component, OnInit,AfterViewInit,ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator } from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
export interface PeriodicElement {
  pencil: string;
  color: string;
  gum: string;
  stand: string;
  _id:string;
}

const ELEMENT_DATA: PeriodicElement[] = [

 ];
@Component({
  selector: 'app-inventory-details',
  templateUrl: './inventory-details.component.html',
  styleUrls: ['./inventory-details.component.css']
})
export class InventoryDetailsComponent implements OnInit ,AfterViewInit{
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private httpClient: HttpClient) { }
  displayedColumns: string[] = ['pencil', 'color', 'gum', 'stand'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  ngOnInit(): void {
    var url=window.location.origin+"/rawMaterial";
   this.httpClient.get(url).subscribe((data)=>{
    console.log(data);
    this.dataSource=data['items']
   });
  
    console.log("***************************",url)

  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}
