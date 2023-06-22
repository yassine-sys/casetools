import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { UserService } from '../service/user.service';
import { cibLgtm } from '@coreui/icons';

@Component({
  selector: 'app-edituser',
  templateUrl: './edituser.component.html',
  styleUrls: ['./edituser.component.scss']
})
export class EdituserComponent implements OnInit{

  userForm!:FormGroup

  constructor(
    public dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private formBuilder: FormBuilder,
    private userService:UserService
  ) {}


  ngOnInit() {

    this.userForm= this.formBuilder.group({
      name: [ this.data.name, Validators.required],
      login: [ this.data.login, Validators.required],
      mail: [ this.data.mail, Validators.required],
      password: [ this.data.password, Validators.required],
      matricule: [ this.data.matricule, Validators.required],
      
      domaineControl: [ this.data.domaineControl, Validators.required],
      revunueStream: [ this.data.revunueStream, Validators.required],
      adminAdd: [ this.data.adminAdd, Validators.required],
      raRule: [ this.data.raRule, Validators.required],
      stat: [ this.data.stat, Validators.required],
      assignedTo: [ this.data.assignedTo, Validators.required],
      reAssignedTo: [ this.data.reAssignedTo, Validators.required],
      closed: [ this.data.closed, Validators.required],

    
    })
}


onSubmit(): void {
  if (this.userForm.invalid) {
    return;
  }

  const updatedUser = {
    id: this.data.id,
    name: this.userForm.controls['name'].value,
    login: this.userForm.controls['login'].value,
    mail: this.userForm.controls['mail'].value,
    password: this.userForm.controls['password'].value,
    matricule: this.userForm.controls['matricule'].value,
    domaineControl: this.userForm.controls['domaineControl'].value,
    revunueStream: this.userForm.controls['revunueStream'].value,
    adminAdd: this.userForm.controls['adminAdd'].value,
    raRule: this.userForm.controls['raRule'].value,
    stat: this.userForm.controls['stat'].value,
    assignedTo: this.userForm.controls['assignedTo'].value,
    reAssignedTo: this.userForm.controls['reAssignedTo'].value,
    closed: this.userForm.controls['closed'].value,
  };

  this.userService.editUser(updatedUser.id,updatedUser).subscribe(
    response => {
      console.log(updatedUser)
      this.data=response
      console.log('User updated:', response);
      this.dialog.closeAll();
      // Perform any additional actions after updating revenue
    },
    error => {
      console.error('Error updating revenue:', error);
      // Handle error
    }
  );
}

onCancel(): void {
  this.dialog.closeAll();
}

onCheckboxChange(event: any, controlName: string): void {
  this.userForm.get(controlName)?.setValue(event.checked);
}



 

}
