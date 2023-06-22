import { Component, OnInit } from '@angular/core';
import { RaruleService } from '../service/rarule.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DomaincontrolService } from '../service/domaincontrol.service';
import { RevnueStreamService } from '../service/revnue-stream.service';

@Component({
  selector: 'app-addrarule',
  templateUrl: './addrarule.component.html',
  styleUrls: ['./addrarule.component.scss']
})
export class AddraruleComponent implements OnInit{

  raruleForm!: FormGroup;

  domain:any
  revenue:any

  constructor(private raruleService: RaruleService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private domService: DomaincontrolService,
    private revenueService: RevnueStreamService) {}


  ngOnInit() {
    this.domainlist()
    this.revenuelist()

    this.raruleForm = this.formBuilder.group({
      nom: [ '', Validators.required],
      description: [ '', Validators.required],
      type: [ '', Validators.required],
      idDomain: [ '', Validators.required],
      idrevenue: [ '', Validators.required],
      
    });
    

  }

  domainlist(){
    this.domService.getAllDomainControl().subscribe(
      data => {
        this.domain = data;
        console.log(this.domain); // Do something with the data
      },
      error => {
        console.log('Error retrieving revenue data:', error);
      }
    );

  }


  revenuelist(){
    this.revenueService.getAllRevenue().subscribe(
      data => {
        this.revenue = data;
        console.log(this.revenue); // Do something with the data
      },
      error => {
        console.log('Error retrieving revenue data:', error);
      }
    );

  }

  onDiscard(): void {
    this.dialog.closeAll();
  }

  onSubmit(): void {
    if (this.raruleForm.invalid) {
      return;
    }
  
    const newRule = {

      nom: this.raruleForm.controls['nom'].value,
      description: this.raruleForm.controls['description'].value,
      type: this.raruleForm.controls['type'].value,
      idDomain: this.raruleForm.controls['idDomain'].value,
      idrevenue: this.raruleForm.controls['idrevenue'].value,

      
      
    };
  
    this.raruleService.addrule(newRule).subscribe(
      response => {
        console.log('New rule added:', response);
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
