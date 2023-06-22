import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RevnueStreamService } from '../service/revnue-stream.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addrevenue',
  templateUrl: './addrevenue.component.html',
  styleUrls: ['./addrevenue.component.scss']
})
export class AddrevenueComponent implements OnInit{
  revenuestream: any;

  revenueForm!: FormGroup;

  constructor(private revenueService: RevnueStreamService,private formBuilder: FormBuilder,private dialog: MatDialog) {}


  ngOnInit() {

    this.revenueForm = this.formBuilder.group({
      revenuestream: [ '', Validators.required],
      
    });
  }

  onSubmit(): void {
    if (this.revenueForm.invalid) {
      return;
    }
  
    const newRevenue = {
      revenuestream: this.revenueForm.controls['revenuestream'].value,
      
    };
  
    this.revenueService.addrevenue(newRevenue).subscribe(
      response => {
        console.log('New revenue added:', response);
        this.dialog.closeAll();
      //  this.list();
       
        
        
        
        // handle success
      },
      error => {
        console.error('Error adding revenue:', error);
        // handle error
      }
      
    );
    
  }

  onDiscard(): void {
    this.dialog.closeAll();
  }

}
