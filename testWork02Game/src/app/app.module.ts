import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {  StartComponent } from './start/start.component';
import { GameComponent } from './game/game.component';
import { WinComponent } from './win/win.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './main/main.component';
import {  RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: '', component: MainComponent, children: [
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
    MainComponent,
   ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
