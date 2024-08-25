import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebComponent } from './web/web.component';
import { UXComponent } from './UI/ux.component';
import { InTouchFormComponent } from './in-touch-form/in-touch-form.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'web-dev', component: WebComponent},
    {path: 'ui-ux', component: UXComponent},
    {path: 'getIntouch', component: InTouchFormComponent}
];
