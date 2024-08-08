import { Component, OnInit } from '@angular/core';
import { BreadcrumbService } from './core/services/breadcrumb.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {


  constructor(
    private breadcrumbService: BreadcrumbService
  ) { }

  ngOnInit(): void {
  }

}
