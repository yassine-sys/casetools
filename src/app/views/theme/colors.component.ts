import { AfterViewInit, Component, HostBinding, Inject, Input, OnInit, Renderer2 } from '@angular/core';
import { DOCUMENT } from '@angular/common';

import { getStyle, rgbToHex } from '@coreui/utils';

@Component({
  templateUrl: 'colors.component.html'
})
export class ColorsComponent implements OnInit {

  constructor(
   
  ) {
  }

 

  ngOnInit(): void {}

  
}

// @Component({
//   selector: 'app-theme-color',
//   template: `
//     <c-col xl="2" md="4" sm="6" xs="12" class="my-4 ms-4">
//       <div [ngClass]="colorClasses" style="padding-top: 75%;"></div>
//       <ng-content></ng-content>
//     </c-col>
//   `
// })
// export class ThemeColorComponent implements OnInit {
//   @Input() color = '';
//   public colorClasses = {
//     'theme-color w-75 rounded mb-3': true
//   };

//   @HostBinding('style.display') display = 'contents';

//   ngOnInit(): void {
//     this.colorClasses = {
//       ...this.colorClasses,
//       [`bg-${this.color}`]: !!this.color
//     };
//   }
// }

