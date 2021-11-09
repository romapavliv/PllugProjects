import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AgmCoreModule } from '@agm/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    GoogleMapComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,

    [RouterModule.forRoot([{
      path: '', component: AppComponent,
    }])],
    AgmCoreModule.forRoot({
      apiKey: environment.GMApiKey
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
