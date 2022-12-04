import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModule } from 'src/core/core.module';
import { MaterialModule } from './module.component';
import { MidContainerComponent } from './mid-container/mid-container.component';
import { BottomContainerComponent } from './bottom-container/bottom-container.component';

@NgModule({
  declarations: [
    AppComponent,
    MidContainerComponent,
    BottomContainerComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    CoreModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
