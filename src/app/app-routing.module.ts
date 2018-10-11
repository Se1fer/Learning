import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import {HeroesComponent} from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes:Routes=[
  //制定heroes跳转到HeroesComponent控件中
  {path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {path:'heroes',component:HeroesComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'detail/:id',component:HeroDetailComponent}
];

@NgModule({
  //初始化路由，并监听浏览器的变化
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
