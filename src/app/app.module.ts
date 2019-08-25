import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LotteryComponent } from './lottery/lottery.component';
import { ImagevalidationComponent } from './imagevalidation/imagevalidation.component';

@NgModule({
  declarations: [
    AppComponent,
    LotteryComponent,
    ImagevalidationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
