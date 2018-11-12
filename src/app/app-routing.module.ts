import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ThirdPageComponent } from './third-page/third-page.component';
import { SecondPageComponent } from './second-page/second-page.component';
import { FirstPageComponent } from './first-page/first-page.component';

const routes: Routes = [
  {
    path: 'first-page',
    component: FirstPageComponent
  },
  {
    path: 'second-page',
    component: SecondPageComponent
  },
  {
    path: 'third-page',
    component: ThirdPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
