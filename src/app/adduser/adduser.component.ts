import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss']
})
export class AdduserComponent implements OnInit{

  domaineControl: any
  revunueStream: any
  HistoriqueAlert: any
  adminAdd: any
  raRule: any
  stat: any
  assignedTo:any
  reAssignedTo: any
  closed: any

  userForm!: FormGroup;

  constructor(private userService: UserService,private formBuilder: FormBuilder,private dialog: MatDialog) {}

  ngOnInit(): void {

    this.userForm= this.formBuilder.group({
      name: [ '', Validators.required],
      login: [ '', Validators.required],
      mail: [ '', Validators.required],
      password: [ '', Validators.required],
      matricule: [ '', Validators.required],
      
      domaineControl: [ false, Validators.required],
      revunueStream: [ false, Validators.required],
      adminAdd: [ false, Validators.required],
      raRule: [ false, Validators.required],
      stat: [ false, Validators.required],
      assignedTo: [ false, Validators.required],
      reAssignedTo: [ false, Validators.required],
      closed: [ false, Validators.required],

  })

}

onCheckboxChange(event: any, controlName: string): void {
  this.userForm.get(controlName)?.setValue(event.checked);
}

onDiscard(): void {
  this.dialog.closeAll();
}

onSubmit(): void {
  if (this.userForm.invalid) {
    return;
  }

  const newUser = {
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

  this.userService.addUser(newUser).subscribe(
    response => {
      console.log('New user added:', response);
      this.dialog.closeAll();
    //  this.list();
     
      
      
      
      // handle success
    },
    error => {
      console.error('Error adding user:', error);
      // handle error
    }
    
  );
  
}


}
