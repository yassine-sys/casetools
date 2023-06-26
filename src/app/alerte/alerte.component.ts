import { Component, OnInit, ViewChild } from '@angular/core';
import { AlerteService } from '../service/alerte.service';
import { FormBuilder } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { RowDetailsDialogComponent } from '../row-details-dialog/row-details-dialog.component';

@Component({
  selector: 'app-alerte',
  templateUrl: './alerte.component.html',
  styleUrls: ['./alerte.component.scss']
})
export class AlerteComponent implements OnInit{

alerts:any
pageSlice: any;
selectedRowData: any;


@ViewChild(MatPaginator) paginator!: MatPaginator ;



constructor( private formBuilder: FormBuilder,
  private alertService:AlerteService ,
  private dialog: MatDialog) {}

  ngOnInit() {

    this.listalert()

  }


  listalert(){
    this.alertService.getAllAlerts().subscribe(
      data => {
        this.alerts = data;
        this.pageSlice = this.alerts.slice(0, 10);
        console.log(this.alerts); // Do something with the data
      },
      error => {
        console.log('Error retrieving revenue data:', error);
      }
    );

  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    this.pageSlice = this.alerts.slice(startIndex, startIndex + event.pageSize);
  }

  openRowDetails(rowData: any) {
    this.selectedRowData = rowData;
  }

  openRowDetailsDialog() {
    if (this.selectedRowData) {
      const dialogConfig = new MatDialogConfig();
      dialogConfig.data = this.selectedRowData;

      // Open the dialog
      const dialogRef = this.dialog.open(RowDetailsDialogComponent, dialogConfig);

      // Handle dialog close event
      dialogRef.afterClosed().subscribe(result => {
        // Handle any actions after dialog is closed, if needed
      });
    }
  }

  closeAlert() {
    if (this.selectedRowData) {
      const alertId = this.selectedRowData.id; // Replace 'id' with the actual property name of the alert ID
  
      const updatedAlert = {
        status: 'closed' // Replace 'status' with the actual property name of the status field
      };
  
      this.alertService.closealert(alertId, updatedAlert).subscribe(
        response => {
          console.log('Alert closed successfully:', response);
          this.ngOnInit()
          // Perform any additional actions or update the UI as needed
        },
        error => {
          console.log('Error closing alert:', error);
          // Handle the error and display an error message if needed
        }
      );
    }
  }




}
