import { BrowserModule } from '@angular/platform-browser';
import { EditableTableModule } from './order/editableTable.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
    imports: [
        BrowserModule,
        AppRoutes,
        SharedModule,
        CommonModule,
        FormsModule,
        EditableTableModule,
        BrowserAnimationsModule,
        CoreModule.forRoot(),
        ToastrModule.forRoot(), // ToastrModule added
    ],

    declarations: [
        AppComponent
    ],

    bootstrap: [AppComponent],
})

export class AppModule { }
