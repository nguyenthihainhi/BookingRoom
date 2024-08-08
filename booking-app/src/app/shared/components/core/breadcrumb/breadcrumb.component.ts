import { Component, DestroyRef, inject, OnInit } from '@angular/core';
import { IBreadcrumbitem } from '../../../../core/utils/breadcrumb';
import { BreadcrumbService } from '../../../../core/services/breadcrumb.service';
import { MenuItem } from 'primeng/api';
import { Router, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.css'
})
export class BreadcrumbComponent implements OnInit {
  breadcrumbs: IBreadcrumbitem[] = [];
  private destroyRef = inject(DestroyRef);
  home: MenuItem | undefined;
  constructor(private router: Router,private breadcrumbService: BreadcrumbService) { }

  ngOnInit(): void {
   const subscription =  this.breadcrumbService.breadcrumbs.subscribe(breadcrumbs => {
      this.breadcrumbs = breadcrumbs;
    });

    console.log(this.breadcrumbs);
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    })
    this.home = { icon: 'pi pi-home' };
  }

  // isActive(instruction: any[]): boolean {
  //   return RouterLinkActive();
  // }
}
