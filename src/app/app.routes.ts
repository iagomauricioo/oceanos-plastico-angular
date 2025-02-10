import { Routes } from '@angular/router';
import { ColaboradoresComponent } from './components/colaboradores-lere/colaboradores.component';
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "colaboradores/lere",
        component: ColaboradoresComponent
    }
];
