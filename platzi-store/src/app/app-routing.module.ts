import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then(module => module.HomeModule)
      },
      {
        path: 'products',
        loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
      },
      {
        path: 'contact',
        canActivate: [AdminGuard],
        loadChildren: () => import('./contact/contact.module').then(module => module.ContactModule)
      },
      {
        path: 'demo',
        loadChildren: () => import('./demo/demo.module').then(module => module.DemoModule)
      },
      {
        path: '**',
        loadChildren: () => import('./page-not-found/page-not-found.module').then(module => module.PageNotFoundModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
