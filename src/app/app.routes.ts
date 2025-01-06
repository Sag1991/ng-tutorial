import { Routes } from '@angular/router';
import { ParentComponent } from './shared/components/parent/parent.component';
import { ChildComponent } from './shared/components/child/child.component';
import { CrudComponent } from './shared/components/crud/crud.component';
import { FormsComponent } from './shared/components/forms/forms.component';

export const routes: Routes = [
    { path: '', redirectTo: 'forms', pathMatch: 'full' },
    { path: 'parent', component: ParentComponent },
    { path: 'child', component: ChildComponent },
    { path: 'crud', component: CrudComponent },
    { path: 'forms', component: FormsComponent },
];
