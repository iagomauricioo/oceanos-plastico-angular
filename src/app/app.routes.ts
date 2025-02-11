import { Routes } from '@angular/router';
import { ColaboradoresComponent } from './components/colaboradores-lere/colaboradores.component';
import { HomeComponent } from './components/home/home.component';
import { ContatoComponent } from './components/contato/contato.component';
import { SolucoesComponent } from './components/solucoes/solucoes.component';


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
        path: "colaboradores/ppgasa",
        component: ColaboradoresComponent
    },
    {
        path: "colaboradores/univassouras",
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
