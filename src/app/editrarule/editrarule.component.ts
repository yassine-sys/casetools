import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RaruleService } from '../service/rarule.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DomaincontrolService } from '../service/domaincontrol.service';
import { RevnueStreamService } from '../service/revnue-stream.service';

@Component({
  selector: 'app-editrarule',
  templateUrl: './editrarule.component.html',
  styleUrls: ['./editrarule.component.scss']
})
export class EditraruleComponent implements OnInit{

  raruleForm!: FormGroup;
  domain:any
  revenue:any

  constructor( @Inject(MAT_DIALOG_DATA) public data: any,
    private raruleService: RaruleService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog,
    private domService: DomaincontrolService,
    private revenueService: RevnueStreamService) {}


  ngOnInit() {

    this.raruleForm = this.formBuilder.group({
      nom: [ this.data.nom, Validators.required],
      description: [ this.data.description, Validators.required],
      type: [ this.data.type, Validators.required],
      idDomain: [ this.data.idDomain, Validators.required],
      idrevenue: [ this.data.idrevenue, Validators.required],
      
    });
    this.domainlist()
    this.revenuelist()
    
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

  onSubmit(): void {
    if (this.raruleForm.invalid) {
      return;
    }

    const updatedrarule = {
      id: this.data.id,
      nom: this.raruleForm.controls['nom'].value,
      description: this.raruleForm.controls['description'].value,
      type: this.raruleForm.controls['type'].value,
      idDomain: this.raruleForm.controls['idDomain'].value,
      idrevenue: this.raruleForm.controls['idrevenue'].value,
    };

    this.raruleService.editRarule(updatedrarule.id,updatedrarule).subscribe(
      response => {
        console.log(updatedrarule)
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
