import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GamePageComponent } from './game-page/game-page.component';
import { WinComponent } from './win/win.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    GamePageComponent,
    WinComponent,

   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
