import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {  StartComponent } from './start/start.component';
import { GameComponent } from './game/game.component';
import { WinComponent } from './win/win.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: '', component: StartComponent},
      { path: 'game', component: GameComponent},
      { path: 'win', component: WinComponent},
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    GameComponent,
    WinComponent,
   ],
  imports: [
    BrowserAnimationsModule ,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
