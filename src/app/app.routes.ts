import { Routes } from '@angular/router';
import { ParentComponent } from './shared/components/parent/parent.component';
import { ChildComponent } from './shared/components/child/child.component';
import { CrudComponent } from './shared/components/crud/crud.component';
import { FormsComponent } from './shared/components/forms/forms.component';
import { LoginComponent } from './shared/components/login/login.component';
import { LayoutComponent } from './shared/pages/layout/layout.component';
import { authGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'parent',
        component: ParentComponent,
        canActivate: [authGuard]
    },
    {
        path: 'child',
        component: ChildComponent,
        canActivate: [authGuard]
    },
    {
        path: 'forms',
        component: FormsComponent,
        canActivate: [authGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: "crud",
                component: CrudComponent,
                canActivate: [authGuard]
            }
        ]
    },
];
