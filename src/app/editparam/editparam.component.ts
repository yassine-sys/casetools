import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { RaruleService } from '../service/rarule.service';

@Component({
  selector: 'app-editparam',
  templateUrl: './editparam.component.html',
  styleUrls: ['./editparam.component.scss']
})
export class EditparamComponent implements OnInit{

  paramForm!: FormGroup;
  param:any
  rule:any
  fct:any


constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private raruleService: RaruleService
  ) {}

  ngOnInit() {

    this.paramForm = this.formBuilder.group({
      fonction: [ this.data.fonction, Validators.required],
      seuil: [ this.data.seuil, Validators.required],
      idParametre: [ this.data.idParametre, Validators.required],
      idRule: [ this.data.idRule, Validators.required],
     })

     this.listfunc()
     this.listparam()
     this.listrule()

  }

  listfunc(){
    this.fct=["<",">","="]
  }

  listparam(){
    this.raruleService.getAllParams().subscribe(
      data => {
        this.param = data
        console.log(this.param); // Do something with the data
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
        console.log('Error retrieving param data:', error);
      }
    );

  }

  onSubmit(): void {
    if (this.paramForm.invalid) {
      return;
    }

    const updatedparam = {
      id: this.data.id,
      fonction: this.paramForm.controls['fonction'].value,
      seuil: this.paramForm.controls['seuil'].value,
      idParametre: this.paramForm.controls['idParametre'].value,
      idRule: this.paramForm.controls['idRule'].value,
    };

    this.raruleService.editParam(updatedparam.id,updatedparam).subscribe(
      response => {
        console.log(updatedparam)
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

  increment(): void {
    const currentValue = this.paramForm.get('seuil')!.value; // Access the seuil control value from paramForm
    const newValue = currentValue + 0.5;
    this.paramForm.get('seuil')!.setValue(newValue); // Update the seuil control value in paramForm
  }
  
  decrement(): void {
    const currentValue = this.paramForm.get('seuil')!.value; // Access the seuil control value from paramForm
    const newValue = currentValue - 0.5;
    this.paramForm.get('seuil')!.setValue(newValue); // Update the seuil control value in paramForm
  }





}
