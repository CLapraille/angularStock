import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { CoreModule } from './core/core.module';
import { StockTrackerModule } from './stock-tracker/stock-tracker.module';


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    StockTrackerModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
