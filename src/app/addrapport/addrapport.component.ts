import { Component, OnInit } from '@angular/core';
import { RaruleService } from '../service/rarule.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addrapport',
  templateUrl: './addrapport.component.html',
  styleUrls: ['./addrapport.component.scss']
})
export class AddrapportComponent implements OnInit{
  reportForm!: FormGroup;

  rapport:any
  rule:any

  constructor(private raruleService: RaruleService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog) {}

    
  ngOnInit() {
    this.reportForm = this.formBuilder.group({
     
      idReport: [ '', Validators.required],
      idRule: [ '', Validators.required],
     })
    this.listrapport()
    this.listrule()
   
  }

  listrapport(){
    this.raruleService.getAllRaports().subscribe(
      data => {
        this.rapport = data;
        console.log(this.rapport); // Do something with the data
      },
      error => {
        console.log('Error retrieving param data:', error);
      }
    );

  }


  listrule(){
    this.raruleService.getAllRarles().subscribe(
      data => {
        this.rule = data;
        console.log(this.rule); // Do something with the data
      },
      error => {
        console.log('Error retrieving rule data:', error);
      }
    );

  }


  onDiscard(): void {
    this.dialog.closeAll();
  }

  onSubmit(): void {
    if (this.reportForm.invalid) {
      return;
    }
  
    const newReport = {

      
      idReport: this.reportForm.controls['idReport'].value,
      idRule: this.reportForm.controls['idRule'].value,

      
      
    };
  
    this.raruleService.addreport(newReport).subscribe(
      response => {
        console.log('New report added:', response);
        this.dialog.closeAll();
      //  this.list();
       
        
        
        
        // handle success
      },
      error => {
        console.error('Error adding rule:', error);
        // handle error
      }
      
    );
    
  }

}
