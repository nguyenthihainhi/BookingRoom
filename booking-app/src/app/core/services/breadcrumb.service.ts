import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { IBreadcrumbitem } from '../utils/breadcrumb';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { StorageService } from './storage.service';
import { ROUTERADMIN } from '../utils/constant';

@Injectable({
  providedIn: 'root'
})
/**
 * Purpose: Save and provide about info breadcrumb
 */
export class BreadcrumbService {
  /** logic description: 
   * - 1. Create subject to management state and CD
   * - 2. object to save list breadcrumb
   * ---- 3. method:
   * ------3.1: get return observable list breadcrumb
   * ------3.2: set list breadcrumb
   */

  private breadcrumb$ = new BehaviorSubject<IBreadcrumbitem[]>([]);

  constructor(private router: Router, private storageService: StorageService) {
    //theo dõi các sự kiện router và cập nhật danh sách breadcrumb dựa trên sự kiện điều hướng (NavigationEnd)
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const breadcrumbs: IBreadcrumbitem[] = this.buildBreadcrumb(this.router.routerState.root);
      this.setBreadcrumbs(breadcrumbs);
    });
  }



  get breadcrumbs() {
    return this.breadcrumb$.asObservable();
  }
  setBreadcrumbs(breadcrumb: IBreadcrumbitem[]) {
    this.breadcrumb$.next(breadcrumb);
  }


  /***
   * 
   * 
  setSesstionBreadcrumbs(item: IBreadcrumbitem[]) {
    this.storageService.setSession('bread_crumb', JSON.stringify(item));
  }

  getSessionBreadcrumbs(): IBreadcrumbitem[] {
    return JSON.parse(this.storageService.getSession('bread_crumb')!);
  }
   * 
   */

/**
 * 
 * @param route 
 * @param url 
 * @param breadcrumbs 
 * @returns current breadcrumbs for active route
 */
  buildBreadcrumb(
    route: ActivatedRoute, //route: ActivatedRoute: Route hiện tại đang được xử lý.
    url: string = '',
    breadcrumbs: IBreadcrumbitem[] = [],
  ): IBreadcrumbitem[] {
    const children: ActivatedRoute[] = route.children; //route.children trả về danh sách các route con của route hiện tại.
    if (children.length === 0) {
      return breadcrumbs;
    }
    // console.log(children);
    for (const child of children) {
      // console.log(child);
      if (child.snapshot.data['breadcrumb']) {
        // const routeURL: string = child.snapshot.url.map(segment => segment.path).join('/');
        const arrbreadCrumb_available = child.snapshot.url.map((_, index) => {
          let url = child.snapshot.url.slice(0, index + 1).join('/');
          /**
           * fix route === admin route
           */
          return { label: ROUTERADMIN[url], url: `/admin/${url}` }
        });
        // console.log(arrbreadCrumb_available);
        breadcrumbs.push(...arrbreadCrumb_available);
      }
      return this.buildBreadcrumb(child, url, breadcrumbs);
    }
    return breadcrumbs;
  }


}