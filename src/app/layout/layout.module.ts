import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarLayoutComponent } from './sidebar-layout/sidebar-layout.component';
import { NoSidebarLayoutComponent } from './no-sidebar-layout/no-sidebar-layout.component';
import { SidebarComponent } from './sidebar-layout/sidebar/sidebar.component';
import {SharedModule} from '@shared/shared.module';
import {RouterModule} from '@angular/router';
import { HeaderComponent } from './sidebar-layout/header/header.component';



@NgModule({
  declarations: [SidebarLayoutComponent, NoSidebarLayoutComponent, SidebarComponent, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ]
})
export class LayoutModule { }
