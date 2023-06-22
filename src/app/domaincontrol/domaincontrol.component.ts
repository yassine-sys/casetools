import { Component, OnInit } from '@angular/core';
import { DomaincontrolService } from '../service/domaincontrol.service';
import { MatDialog } from '@angular/material/dialog';
import { AdddomainComponent } from '../adddomain/adddomain.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EditdomComponent } from '../editdom/editdom.component';


@Component({
  selector: 'app-domaincontrol',
  templateUrl: './domaincontrol.component.html',
  styleUrls: ['./domaincontrol.component.scss']
})
export class DomaincontrolComponent implements OnInit{

  domaincontrol:any
  showForm = false;
  domainForm!: FormGroup;

  constructor( private formBuilder: FormBuilder,
    private domService: DomaincontrolService,
    private dialog: MatDialog) {}
  ngOnInit() {
    this.domainForm = this.formBuilder.group({
      domain: [ '', Validators.required],
      
    });

    this.domService.getAllDomainControl().subscribe(
      data => {
        this.domaincontrol = data;
        console.log(this.domaincontrol); // Do something with the data
      },
      error => {
        console.log('Error retrieving revenue data:', error);
      }
    );
    
  }

  performDeleteDomain(domaincontrol: any) {
    console.log('Revenue object:', domaincontrol.id);
  
    this.domService.deleteDomainControl(domaincontrol.id).subscribe(
      () => {
        console.log(domaincontrol.id);
        this.ngOnInit();
      },
      error => {
        console.log('Error deleting domaincontrol:', error);
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

  hideForm(): void {
    this.showForm = false;
  }

  openModal() {
    const dialogRef = this.dialog.open(AdddomainComponent, {
      width: '500px',
      // Other dialog options...
    });
  
    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit()
      // Handle any actions after the modal is closed (e.g., process the result)
    });
  }

  openUpdateModal(domain: any) {
    const dialogRef = this.dialog.open(EditdomComponent, {
      width: '500px',
      data: domain,
      // Other dialog options...
    });

    dialogRef.afterClosed().subscribe(result => {
      this.ngOnInit();
      // Handle any actions after the modal is closed (e.g., process the result)
    });
  }
  

}
