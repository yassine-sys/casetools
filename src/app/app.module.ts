import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgScrollbarModule } from 'ngx-scrollbar';

// Import routing module
import { AppRoutingModule } from './app-routing.module';

// Import app component
import { AppComponent } from './app.component';

// Import containers
import { DefaultFooterComponent, DefaultHeaderComponent, DefaultLayoutComponent } from './containers';

import {
  AvatarModule,
  BadgeModule,
  BreadcrumbModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  DropdownModule,
  FooterModule,
  FormModule,
  GridModule,
  HeaderModule,
  ListGroupModule,
  ModalModule,
  NavModule,
  ProgressModule,
  SharedModule,
  SidebarModule,
  TabsModule,
  UtilitiesModule
} from '@coreui/angular';

import { IconModule, IconSetService } from '@coreui/icons-angular';
import { HttpClientModule } from '@angular/common/http';
import { AccueilComponent } from './accueil/accueil.component';
import { UsermanagementComponent } from './usermanagement/usermanagement.component';
import { DomaincontrolComponent } from './domaincontrol/domaincontrol.component';
import { RevenuestreamComponent } from './revenuestream/revenuestream.component';
import { RaruleComponent } from './rarule/rarule.component';
import { AdddomainComponent } from './adddomain/adddomain.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';

import { MatIconModule } from '@angular/material/icon';
import { AddrevenueComponent } from './addrevenue/addrevenue.component';
import { AdduserComponent } from './adduser/adduser.component';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { AddraruleComponent } from './addrarule/addrarule.component';

import { MatSelectModule } from '@angular/material/select';
import { AddparamComponent } from './addparam/addparam.component';
import { AddrapportComponent } from './addrapport/addrapport.component';
import { EditrevenueComponent } from './editrevenue/editrevenue.component';
import { EditdomComponent } from './editdom/editdom.component';
import { EdituserComponent } from './edituser/edituser.component';
import { EditraruleComponent } from './editrarule/editrarule.component';
import { EditparamComponent } from './editparam/editparam.component';
import { EditreportComponent } from './editreport/editreport.component';

const APP_CONTAINERS = [
  DefaultFooterComponent,
  DefaultHeaderComponent,
  DefaultLayoutComponent
];

@NgModule({
  declarations: [AppComponent, ...APP_CONTAINERS, AccueilComponent, UsermanagementComponent, DomaincontrolComponent, RevenuestreamComponent, RaruleComponent, AdddomainComponent, AddrevenueComponent, AdduserComponent, AddraruleComponent, AddparamComponent, AddrapportComponent, EditrevenueComponent, EditdomComponent, EdituserComponent, EditraruleComponent, EditparamComponent, EditreportComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AvatarModule,
    BreadcrumbModule,
    FooterModule,
    DropdownModule,
    GridModule,
    HeaderModule,
    SidebarModule,
    IconModule,
    NavModule,
    ButtonModule,
    FormModule,
    UtilitiesModule,
    ButtonGroupModule,
    ReactiveFormsModule,
    SidebarModule,
    SharedModule,
    TabsModule,
    ListGroupModule,
    ProgressModule,
    BadgeModule,
    ListGroupModule,
    CardModule,
    NgScrollbarModule, 
    HttpClientModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    FormsModule,
    ModalModule,
    MatIconModule,
    MatCheckboxModule,
    MatSelectModule

    
  ],
  providers: [
    
    {
      
      provide: LocationStrategy,
      useClass: HashLocationStrategy
    },
    IconSetService,
    Title
  ],
  

  bootstrap: [AppComponent]
})
export class AppModule {
}
