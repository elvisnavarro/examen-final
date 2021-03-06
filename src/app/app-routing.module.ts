import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { NotFoundComponent } from 'src/app/core/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'inicio',
        pathMatch: 'full'
      },
      {
        path: 'inicio',
        loadChildren: () => import('./modules/inicio/inicio.module').then(m => m.InicioModule)
      },
      {
       path: 'cursos',
       loadChildren: () => import('./modules/cursos/cursos.module').then(m => m.CursosModule)
      },
      {
       path: 'contactenos',
       loadChildren: () => import('./modules/contactenos/contactenos.module').then(m => m.ContactenosModule)
      },
      {
       path: 'administrador',
       loadChildren: () => import('./modules/administrador/administrador.module').then(m => m.AdministradorModule)
      },
      {
       path: 'ingresar',
       loadChildren: () => import('./modules/ingresar/ingresar.module').then(m => m.IngresarModule)
      }
    ]
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
