import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterComponent } from './pages/register/register.component';
import { SelectRegisterComponent } from './pages/select-register/select-register.component';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  // RUTAS
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  { path: 'main',title:'Bienvenido', component: MainComponent },
  { path: 'register-select',title:'Registro', component: SelectRegisterComponent },
  { path: 'register',title:'Registro', component: RegisterComponent },
  { path: 'login',title:'Login', component: LoginComponent },
  {
    path: 'home', loadChildren: () => import('src/app/pages/pages-routing.module').then((m) => m.PagesRoutingModule),
    canActivate: [AuthGuard]
  },
  { path: '**', title:'Pagina no encontrada', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }