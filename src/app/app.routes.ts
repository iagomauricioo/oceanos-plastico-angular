import { Routes } from '@angular/router';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "colaboradores",
        component: ColaboradoresComponent
    }
];
