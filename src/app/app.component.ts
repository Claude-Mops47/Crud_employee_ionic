import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [
    {
      provide:CarouselConfig, useValue: {interval:1500, noPause:true, showIndicators:true}
    }
  ]
})
export class AppComponent {
  title = 'Application Angular 8 + PHP BACKEND';
}
