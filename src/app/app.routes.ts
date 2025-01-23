import { Routes } from '@angular/router';
import { ParentComponent } from './shared/components/parent/parent.component';
import { ChildComponent } from './shared/components/child/child.component';
import { CrudComponent } from './shared/components/crud/crud.component';
import { FormsComponent } from './shared/components/forms/forms.component';
import { LoginComponent } from './shared/components/login/login.component';
import { LayoutComponent } from './shared/pages/layout/layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'parent',
        component: ParentComponent
    },
    {
        path: 'child',
        component: ChildComponent
    },
    {
        path: 'forms', component: FormsComponent
    },
    {
        path: 'login', component: LoginComponent
    },
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: "crud",
                component: CrudComponent
            }
        ]
    },
];
