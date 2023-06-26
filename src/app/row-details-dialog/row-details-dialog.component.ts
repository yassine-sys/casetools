import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { UserService } from '../service/user.service';
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';


@Component({
  selector: 'app-row-details-dialog',
  templateUrl: './row-details-dialog.component.html',
  styleUrls: ['./row-details-dialog.component.scss']
})
export class RowDetailsDialogComponent implements OnInit{
  users: any
  selectedUser: any;

  constructor(
    public dialogRef: MatDialogRef<RowDetailsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private userService: UserService,private snackBar: MatSnackBar
  ) {}

  private snackBarRef!: MatSnackBarRef<any>;

  ngOnInit() {
    this.fetchUsers()
    console.log("list users",this.users)
    
  }
  fetchUsers() {
    this.userService.getAllUser().subscribe(
      data => {
        this.users = data;
      },
      error => {
        console.log('Error fetching users:', error);
      }
    );
  }

  assignUserToAlert() {
    if (this.selectedUser) {
      const alertData = {
        idAlerte: this.data.id,
        idUser: this.selectedUser
      };
  
      this.userService.assignAlertUser(alertData).subscribe(
        () => {
          this.snackBarRef = this.snackBar.open('User assigned to alert', 'Close', {
            duration: 3000
          });
          this.closeDialog();
        },
        error => {
          this.snackBarRef = this.snackBar.open('Error assigning user to alert', 'Close', {
            duration: 3000
          });
          console.log('Error assigning user to alert:', error);
        }
      );
    } else {
      this.snackBarRef = this.snackBar.open('Please select a user', 'Close', {
        duration: 3000
      });
    }
  }

  closeDialog() {
    this.dialogRef.close();
  }

 


}
