import { Component, ElementRef, Injector, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { RevnueStreamService } from '../service/revnue-stream.service';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AddrevenueComponent } from '../addrevenue/addrevenue.component';
import { EditrevenueComponent } from '../editrevenue/editrevenue.component';

@Component({
  selector: 'app-revenuestream',
  templateUrl: './revenuestream.component.html',
  styleUrls: ['./revenuestream.component.scss']
})
export class RevenuestreamComponent implements OnInit{
  
  revenuestream: any;

  revenueForm!: FormGroup;
  
  constructor(private revenueService: RevnueStreamService,private formBuilder: FormBuilder,private dialog: MatDialog) {}

  ngOnInit(): void {
  
    this.revenueService.getAllRevenue().subscribe(
      data => {
        this.revenuestream = data;
        console.log(this.revenuestream); // Do something with the data
      },
      error => {
        console.log('Error retrieving revenue data:', error);
      }
    );

    this.revenueForm = this.formBuilder.group({
      revenuestream: [ '', Validators.required],
      
    });

   
  }

  performDeleteRevenue(revenuestream: any) {
    console.log('Revenue object:', revenuestream);
  
    this.revenueService.deleteRevenueStream(revenuestream.id).subscribe(
      () => {
        console.log(revenuestream.id);
        this.ngOnInit();
      },
      error => {
        console.log('Error deleting revenue:', error);
        if (error.error instanceof ErrorEvent) {
          // Client-side error
          console.log('Client-side error:', error.error.message);
        } else {
          // Server-side error
          console.log('Server-side error:', error.status, error.error);
        }
      }
    );
  }
  openModal() {
    const dialogRef = this.dialog.open(AddrevenueComponent, {
      width: '500px',
      // Other dialog options...
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
      // Handle any actions after the modal is closed (e.g., process the result)
    });
  }


  openUpdateModal(revenuestream: any) {
    const dialogRef = this.dialog.open(EditrevenueComponent, {
      width: '500px',
      data: revenuestream,
      // Other dialog options...
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      // Handle any actions after the modal is closed (e.g., process the result)
    });
  }

 
}
