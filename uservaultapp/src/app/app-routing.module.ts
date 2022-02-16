import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [{path: 'register', component: RegisterUserComponent},
                        {path: 'uservault', component: UserComponent},
                        {path: '', component: LoginComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
