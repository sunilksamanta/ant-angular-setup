import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SidebarLayoutComponent} from './layout/sidebar-layout/sidebar-layout.component';
import {NoSidebarLayoutComponent} from './layout/no-sidebar-layout/no-sidebar-layout.component';
import {NotFoundComponent} from './miscellaneous/components/not-found/not-found.component';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'main'
  },
  {
    path: 'main',
    component: SidebarLayoutComponent,
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path: 'auth',
    component: NoSidebarLayoutComponent,
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
