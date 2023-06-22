import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DomaincontrolService } from '../service/domaincontrol.service';

@Component({
  selector: 'app-editdom',
  templateUrl: './editdom.component.html',
  styleUrls: ['./editdom.component.scss']
})
export class EditdomComponent implements OnInit{

  domainForm!: FormGroup;

  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private domService: DomaincontrolService
  ) {}

  ngOnInit() {

    this.domainForm = this.formBuilder.group({
      domain: [this.data.domain, Validators.required],
    });

  }


  onSubmit(): void {
    if (this.domainForm.invalid) {
      return;
    }

    const updatedDomain = {
      id: this.data.id,
      domain: this.domainForm.controls['domain'].value,
    };

    this.domService.editdomain(updatedDomain.id,updatedDomain).subscribe(
      response => {
        console.log(updatedDomain)
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
