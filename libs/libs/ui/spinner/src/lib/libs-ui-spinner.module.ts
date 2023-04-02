import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { SpinnerInterceptService } from './services/spinner-intercept.service';
import { SpinnerIndicatorService } from './services/spinner-indictor.service';

@NgModule({
  imports: [CommonModule],
  declarations: [
    SpinnerComponent
  ],
  exports:[SpinnerComponent],
  providers:[
    SpinnerIndicatorService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptService,
      multi: true,
    },
  ]
})
export class LibsUiSpinnerModule {}
