import { Routes } from '@angular/router';
import { ParentComponent } from './shared/components/parent/parent.component';
import { ChildComponent } from './shared/components/child/child.component';
import { CrudComponent } from './shared/components/crud/crud.component';

export const routes: Routes = [
    { path: '', redirectTo: 'child', pathMatch: 'full' },
    { path: 'parent', component: ParentComponent },
    { path: 'child', component: ChildComponent },
    { path: 'crud', component: CrudComponent }
];
