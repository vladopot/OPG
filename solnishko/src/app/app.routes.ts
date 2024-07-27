import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WebComponent } from './web/web.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'web-dev', component: WebComponent}
];
