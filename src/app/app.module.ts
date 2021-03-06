import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TooltipModule } from 'ng2-tooltip-directive';
import { VendorComponent } from './vendor/vendor.component';
import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  MatFormField,
} from '@angular/material';
import { RepsComponent } from './reps/reps.component';
import { ManageusersComponent } from './manageusers/manageusers.component';
import { ProfileComponent } from './profile/profile.component';
import { ReplistComponent } from './replist/replist.component';
import { ReportsComponent } from './reports/reports.component';
import { BadginghistoryComponent } from './badginghistory/badginghistory.component';
import { AppoinmentsComponent } from './appoinments/appoinments.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { SigninarepComponent } from './signinarep/signinarep.component';
import { FormsModule } from '@angular/forms';
import { ResourcecenterComponent } from './resourcecenter/resourcecenter.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    VendorComponent,
    HomeComponent,
    RepsComponent,
    ManageusersComponent,
    ProfileComponent,
    ReplistComponent,
    ReportsComponent,
    BadginghistoryComponent,
    AppoinmentsComponent,
    FooterComponent,
    SigninarepComponent,
    ResourcecenterComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    TooltipModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
   // NgbModule,NgbTooltip,NgbTooltipModul
    BrowserAnimationsModule,
    TooltipModule,
    MatPaginatorModule,
    MatTableModule,
    MatDatepickerModule,
    HttpClientModule,
  FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
