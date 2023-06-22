import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { RevnueStreamService } from '../service/revnue-stream.service';

@Component({
  selector: 'app-editrevenue',
  templateUrl: './editrevenue.component.html',
  styleUrls: ['./editrevenue.component.scss']
})
export class EditrevenueComponent implements OnInit{

  revenueForm!: FormGroup;

  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private revenueService: RevnueStreamService
  ) {}


  ngOnInit() {

    this.revenueForm = this.formBuilder.group({
      revenuestream: [this.data.revenuestream, Validators.required],
    });
    
  }

  
  onSubmit(): void {
    if (this.revenueForm.invalid) {
      return;
    }

    const updatedRevenue = {
      id: this.data.id,
      revenuestream: this.revenueForm.controls['revenuestream'].value,
    };

    this.revenueService.editrevenue(updatedRevenue.id,updatedRevenue).subscribe(
      response => {
        console.log(updatedRevenue)
        this.data=response
        console.log('Revenue updated:', response);
        this.dialog.closeAll();
        // Perform any additional actions after updating revenue
      },
      error => {
        console.error('Error updating revenue:', error);
        // Handle error
      }
    );
  }

  onCancel(): void {
    this.dialog.closeAll();
  }

}
