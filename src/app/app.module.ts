import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,FormsModule
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDzYp8N9wmso4TKGkV1b_tK1GyHnADIMk0'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
