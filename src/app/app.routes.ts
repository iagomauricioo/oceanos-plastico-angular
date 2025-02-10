import { Routes } from '@angular/router';
import { ColaboradoresComponent } from './components/colaboradores-lere/colaboradores.component';
import { HomeComponent } from './components/home/home.component';
import { ContatoComponent } from './contato/contato.component';
import { SolucoesComponent } from './solucoes/solucoes.component';


export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "colaboradores/lere",
        component: ColaboradoresComponent
    },
    {
        path: "contato",
        component: ContatoComponent
    },
    {
        path: "solucoes",
        component: SolucoesComponent
    },
];
