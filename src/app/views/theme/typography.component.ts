import { Component, OnInit } from '@angular/core';
import { RevnueStreamService } from '../../service/revnue-stream.service'


@Component({
  templateUrl: 'typography.component.html',
})
export class TypographyComponent implements OnInit {
  revenuestream: any;

  constructor(private revenueService: RevnueStreamService) {}

  ngOnInit(): void {
    this.revenueService.getAllRevenue().subscribe(
      data => {
        this.revenuestream = data;
        console.log(this.revenuestream); // Do something with the data
      },
      error => {
        console.log('Error retrieving revenue data:', error);
      }
    );
  }

  performDeleteRevenue(revenuestream: any) {
    console.log('Revenue object:', revenuestream); // Log the revenue object to the console

    this.revenueService.deleteRevenueStream(revenuestream).subscribe(
      () => {
        console.log(revenuestream)
        // Delete successful, perform any necessary actions
        // such as refreshing the revenue list
        this.ngOnInit();
      },
      error => {
        console.log('Error deleting revenue:', error);
      }
    );
  }


  // deleteEntity(id: number): void {
  //   this.revenueService.deleteEntity(id)
  //     .subscribe(
  //       () => {
  //         console.log('Entity deleted successfully.');
  //         // Additional logic or UI updates after deletion
  //       },
  //       (error) => {
  //         console.error('Error deleting entity:', error);
  //         // Handle error and display appropriate message
  //       }
  //     );
  // }
}
