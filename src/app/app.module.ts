//all modules imported on the top
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

// all components imported here
import { AppComponent } from './app.component';

//all services imported here
import { ShowInterestService } from './show-interest.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ShowInterestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
