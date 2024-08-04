import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { MainLayoutComponent } from './shared/components/layout/main-layout/main-layout.component';


export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.module').then((m) => m.AuthModule),
    },
    {
        path: '',
        loadChildren: () => import('./features/common/commons.module').then((m) => m.CommonsModule),
    },
    {
        path: 'student',
        loadChildren: () => import('./features/student/student.module').then((m) => m.StudentModule),
    },
    {
        path: 'staff',
        loadChildren: () => import('./features/staff/staff.module').then((m) => m.StaffModule),
    },
    {
        path: 'admin',
        component: MainLayoutComponent,
        loadChildren: () => import('./features/admin/admin.module').then((m) => m.AdminModule),
    },
    // {
    //     path: '**',
    //     redirectTo: '/commons/error',
    // },
];

@NgModule({
 imports: [
    RouterModule.forRoot(routes, {
        scrollPositionRestoration:'enabled',
        onSameUrlNavigation: 'reload'
    })
 ],
 exports: [RouterModule]
})

export class AppRoutingModule {

}