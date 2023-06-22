import { Component, OnInit } from '@angular/core';
import { RaruleService } from '../service/rarule.service';
import { AddraruleComponent } from '../addrarule/addrarule.component';
import { MatDialog } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddparamComponent } from '../addparam/addparam.component';
import { AddrapportComponent } from '../addrapport/addrapport.component';
import { EditraruleComponent } from '../editrarule/editrarule.component';
import { EditparamComponent } from '../editparam/editparam.component';
import { EditreportComponent } from '../editreport/editreport.component';

@Component({
  selector: 'app-rarule',
  templateUrl: './rarule.component.html',
  styleUrls: ['./rarule.component.scss']
})
export class RaruleComponent implements OnInit{

  rarule:any
  params:any
  report:any

  raruleForm!: FormGroup;


  constructor(private formBuilder: FormBuilder,private raruleService: RaruleService,private dialog: MatDialog){}

  
  ngOnInit() {
    this.listrarules()
    this.listparams()
    this.listraports()

    this.raruleForm = this.formBuilder.group({
      nom: [ '', Validators.required],
      description: [ '', Validators.required],
      type: [ '', Validators.required],
      idDomain: [ '', Validators.required],
      idrevenue: [ '', Validators.required],
      
    });
   
  }

  listrarules(){
    this.raruleService.getAllRarles().subscribe(
      data => {
        this.rarule = data;
        console.log(this.rarule); // Do something with the data
      },
      error => {
        console.log('Error retrieving rarule data:', error);
      }
    );

  }

  performDeleteRarule(rarule: any) {
    console.log('Revenue object:', rarule.id);
  
    this.raruleService.deleteRarule(rarule.id).subscribe(
      () => {
        console.log(rarule.id);
        this.listrarules();
      },
      error => {
        console.log('Error deleting rarule:', error);
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

  listparams(){
    this.raruleService.getAllParams().subscribe(
      data => {
        this.params = data;
        console.log(this.params); // Do something with the data
      },
      error => {
        console.log('Error retrieving rarule data:', error);
      }
    );

  }

  performDeleteParam(params: any) {
    console.log('params object:', params.id);
  
    this.raruleService.deleteParam(params.id).subscribe(
      () => {
        console.log(params.id);
        this.listparams();
      },
      error => {
        console.log('Error deleting params:', error);
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


  listraports(){
    this.raruleService.getAllReports().subscribe(
      data => {
        this.report = data;
        console.log(this.report); // Do something with the data
      },
      error => {
        console.log('Error retrieving rarule data:', error);
      }
    );

  }


  performDeleteReport(report: any) {
    console.log('params object:', report.id);
  
    this.raruleService.deleteReport(report.id).subscribe(
      () => {
        console.log(report.id);
        this.listraports()
      },
      error => {
        console.log('Error deleting report:', error);
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


  openModalAddRarule() {
    const dialogRef = this.dialog.open(AddraruleComponent, {
      width: '500px',
      // Other dialog options...
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
      // Handle any actions after the modal is closed (e.g., process the result)
    });
  }

  openModalAddParam() {
    const dialogRef = this.dialog.open(AddparamComponent, {
      width: '500px',
      // Other dialog options...
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
      // Handle any actions after the modal is closed (e.g., process the result)
    });
  }


  openModalAddReport() {
    const dialogRef = this.dialog.open(AddrapportComponent, {
      width: '500px',
      // Other dialog options...
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
      // Handle any actions after the modal is closed (e.g., process the result)
    });
  }


  openUpdateModalrarule(rarule: any) {
    const dialogRef = this.dialog.open(EditraruleComponent, {
      width: '500px',
      data: rarule,
      // Other dialog options...
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      // Handle any actions after the modal is closed (e.g., process the result)
    });
  }


  openUpdateModalparam(param: any) {
    const dialogRef = this.dialog.open(EditparamComponent, {
      width: '500px',
      data: param,
      // Other dialog options...
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      // Handle any actions after the modal is closed (e.g., process the result)
    });
  }


  openUpdateModalrep(rep: any) {
    const dialogRef = this.dialog.open(EditreportComponent, {
      width: '500px',
      data: rep,
      // Other dialog options...
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      // Handle any actions after the modal is closed (e.g., process the result)
    });
  }


}
