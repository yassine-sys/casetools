import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RaruleService } from '../service/rarule.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-editreport',
  templateUrl: './editreport.component.html',
  styleUrls: ['./editreport.component.scss']
})
export class EditreportComponent implements OnInit{

  reportForm!: FormGroup;

  rapport:any
  rule:any

  constructor(private raruleService: RaruleService,
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: any,

    private dialog: MatDialog) {}


  ngOnInit() {

    this.reportForm = this.formBuilder.group({
     
      idReport: [ this.data.idReport, Validators.required],
      idRule: [ this.data.idRule, Validators.required],
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

  onSubmit(): void {
    if (this.reportForm.invalid) {
      return;
    }

    const updatedreport = {
      id: this.data.id,
      idReport: this.reportForm.controls['idReport'].value,
      idRule: this.reportForm.controls['idRule'].value,
    };

    this.raruleService.editreport(updatedreport.id,updatedreport).subscribe(
      response => {
        console.log(updatedreport)
        this.data=response
        console.log('Domain updated:', response);
        this.dialog.closeAll();
        // Perform any additional actions after updating revenue
      },
      error => {
        console.error('Error updating Domain:', error);
        // Handle error
      }
    );
  }

  onCancel(): void {
    this.dialog.closeAll();
  }



}
