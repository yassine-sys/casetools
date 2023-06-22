import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { DomaincontrolService } from '../service/domaincontrol.service';
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-adddomain',
  templateUrl: './adddomain.component.html',
  styleUrls: ['./adddomain.component.scss']
})
export class AdddomainComponent implements OnInit{
  domaincontrol:any
  domain:any
  domainForm!: FormGroup;
  constructor(
    private domService: DomaincontrolService,
     private formBuilder: FormBuilder,
    private dialog: MatDialog,private router:Router
   ) { }

    ngOnInit() {
      this.list()
      

    this.domainForm = this.formBuilder.group({
      domain: [ '', Validators.required],
      
    });

    

  }

  list(){
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


  onSubmit(): void {
    if (this.domainForm.invalid) {
      return;
    }
  
    const newDomain = {
      domain: this.domainForm.controls['domain'].value,
      
    };
  
    this.domService.adddomain(newDomain).subscribe(
      response => {
        console.log('New domain added:', response);
        this.dialog.closeAll();
        this.list();
       
        
        
        
        // handle success
      },
      error => {
        console.error('Error adding domain:', error);
        // handle error
      }
      
    );
    
  }

  onDiscard(): void {
    this.dialog.closeAll();
  }

 
  


}
