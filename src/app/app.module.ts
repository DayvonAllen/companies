import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material/material.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WorkOrderService } from './services/work-order.service';
import { WorkerService } from './services/worker.service';
import { FormsModule } from '@angular/forms';
import { FilterSearchPipe } from './filter-search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FilterSearchPipe
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    FormsModule
  ],
  providers: [
    WorkOrderService,
    WorkerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
