import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { AdduserComponent } from '../adduser/adduser.component';
import { EdituserComponent } from '../edituser/edituser.component';

@Component({
  selector: 'app-usermanagement',
  templateUrl: './usermanagement.component.html',
  styleUrls: ['./usermanagement.component.scss']
})
export class UsermanagementComponent implements OnInit{

  user:any
  userForm!:FormGroup
  constructor(private userService:UserService,private formBuilder: FormBuilder,private dialog: MatDialog){}

  ngOnInit() {
    this.userService.getAllUser().subscribe(
      data => {
        this.user = data;
        console.log(this.user); // Do something with the data
      },
      error => {
        console.log('Error retrieving user data:', error);
      }
    );

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

    performDeleteUser(user: any) {
      console.log('user object:', user);
    
      this.userService.deleteUser(user.id).subscribe(
        () => {
          console.log(user.id);
          this.ngOnInit();
        },
        error => {
          console.log('Error deleting user:', error);
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

    openModal() {
      const dialogRef = this.dialog.open(AdduserComponent, {
        width: '500px',
        // Other dialog options...
      });
    
      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit()
        // Handle any actions after the modal is closed (e.g., process the result)
      });
    }


    openUpdateModal(user: any) {
      const dialogRef = this.dialog.open(EdituserComponent, {
        width: '500px',
        data: user,
        // Other dialog options...
      });
  
      dialogRef.afterClosed().subscribe(result => {
        this.ngOnInit();
        // Handle any actions after the modal is closed (e.g., process the result)
      });
    }
  

}
