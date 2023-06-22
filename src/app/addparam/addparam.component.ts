import { Component, OnInit } from '@angular/core';
import { RaruleService } from '../service/rarule.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-addparam',
  templateUrl: './addparam.component.html',
  styleUrls: ['./addparam.component.scss']
})
export class AddparamComponent implements OnInit{

  paramForm!: FormGroup;
  param:any
  rule:any
  fct:any


  constructor(private raruleService: RaruleService,
    private formBuilder: FormBuilder,
    private dialog: MatDialog) {}
  ngOnInit() {
   this.paramForm = this.formBuilder.group({
    fonction: [ '', Validators.required],
    seuil: [ 0, Validators.required],
    idParametre: [ '', Validators.required],
    idRule: [ '', Validators.required],
   })

   this.listparam()
   this.listrule()
   this.listfunc()

  }

  listfunc(){
    this.fct=["<",">","="]
  }

  listparam(){
    this.raruleService.getAllParams().subscribe(
      data => {
        this.param = data;
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

  onDiscard(): void {
    this.dialog.closeAll();
  }

  onSubmit(): void {
    if (this.paramForm.invalid) {
      return;
    }
  
    const newParam = {

      fonction: this.paramForm.controls['fonction'].value,
      seuil: this.paramForm.controls['seuil'].value,
      idParametre: this.paramForm.controls['idParametre'].value,
      idRule: this.paramForm.controls['idRule'].value,

      
      
    };
  
    this.raruleService.addparam(newParam).subscribe(
      response => {
        console.log('New param added:', response);
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
