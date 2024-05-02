import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {NgOptimizedImage} from "@angular/common";
//import { IonicModule } from '@ionic/angular';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NavbarComponent} from './shared/navbar/navbar.component';
import {ErrorComponent} from './shared/error-component/error-component.component';
import {ChangePasswordComponent} from './change-password/change-password.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {
  RegisteredOrganizationComponent
} from './Organization/registered-organization/registered-organization.component';
import {OrganizationService} from "./Organization/registered-organization/RegisteredOrganization.service";
import {OrganizationFilterPipe} from './Organization/organization-filter-pipe';
import {RegisteredDonorsComponent} from './Donor/registered-donors/registered-donors.component';
import {DonorFilterPipePipe} from './Donor/donor-filter-pipe.pipe';
import {RegisteredDonorService} from "./Donor/registered-donors/RegisteredDonor.service";
import {
  OrganizationsPendingRequestsComponent
} from './Organization/organizations-pending-requests/organizations-pending-requests.component';
import {
  OrganizationPendingRequestService
} from "./Organization/organizations-pending-requests/organization-pending-request.service";
import {DonorsPendingRequestsComponent} from './Donor/donorss-pending-requests/donors-pending-requests.component';
import {DonorsPendingRequestService} from "./Donor/donorss-pending-requests/DonorsPendingRequest.service";
import { OrganizationDetailsComponent } from './Organization/organizations-pending-requests/pending-organization-details/organization-details.component';
import { DonorDetailsComponent } from './Donor/donor-details/donor-details.component';
import { RegisteredOrganizationDetailsComponent } from './Organization/registered-organization/registered-organization-details/registered-organization-details.component';
import { FooterComponent } from './shared/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginComponent,
    NavbarComponent,
    ErrorComponent,
    ChangePasswordComponent,
    DashboardComponent,
    RegisteredOrganizationComponent,
    OrganizationFilterPipe,
    RegisteredDonorsComponent,
    DonorFilterPipePipe,
    OrganizationsPendingRequestsComponent,
    DonorsPendingRequestsComponent,
    OrganizationDetailsComponent,
    DonorDetailsComponent,
    RegisteredOrganizationDetailsComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    FormsModule,
    ReactiveFormsModule,
    //IonicModule
  ],
  providers: [OrganizationService,
    RegisteredDonorService,
    OrganizationPendingRequestService,
    DonorsPendingRequestService],
  exports: [
    LoginComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
