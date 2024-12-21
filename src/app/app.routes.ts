import { Routes } from '@angular/router';
import { ParentComponent } from './shared/components/parent/parent.component';
import { ChildComponent } from './shared/components/child/child.component';

export const routes: Routes = [
    { path: '', redirectTo: 'parent', pathMatch: 'full' },
    { path: 'parent', component: ParentComponent },
    { path: 'child', component: ChildComponent }
];
