import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import { ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';
//import pdfFonts from 'pdfmake/build/vfs_fonts';
//pdfMake.vfs = pdfFonts.pdfMake.vfs;
import { jsPDF} from 'jspdf';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-billing-details',
  templateUrl: './billing-details.component.html',
  styleUrls: ['./billing-details.component.css']
})
export class BillingDetailsComponent implements OnInit {
  @ViewChild('htmlData') htmlData:ElementRef;
  customer_Id="";
  ngOnInit(): void {
    var id=this.route.snapshot.paramMap.get("id");
    this.customer_Id=id
  }
   selectedPencil: string = "1000";
  
 // selectedCountryControl = new FormControl(this.selectedCountry);

  selectedGum: string = "1";
  

  selectedColor: string = "1";
  
  selectedStand: string = "0";
  
  constructor(private httpClient: HttpClient,private route: ActivatedRoute) { }

  public saveData():void {
    var url=window.location.origin+"/customerData/"+this.customer_Id+"/"+this.selectedPencil+"/"
    +this.selectedGum+"/"+this.selectedColor+"/"+this.selectedStand+"/"+new Date();

    let objectMaterial={
      "pencil":this.selectedPencil,
      "gum":this.selectedGum,
      "color":this.selectedColor,
      "stand":this.selectedStand,
      "customer_id":this.customer_Id
    }
    this.httpClient.get(url).subscribe((data)=>{
      console.log(data);
      
     });
  }


  public downloadPDF():void {
    let DATA = this.htmlData.nativeElement;
    let doc = new jsPDF('p','pt', 'a4');

    let handleElement = {
      '#editor':function(element,renderer){
        return true;
      }
    };
    doc.fromHTML(DATA.innerHTML,15,15,{
      'width': 200,
      'elementHandlers': handleElement
    });

    doc.save('angular-demo.pdf');
  }
}
