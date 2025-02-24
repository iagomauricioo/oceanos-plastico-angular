import { Routes } from '@angular/router';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { HomeComponent } from './components/home/home.component';
import { ContatoComponent } from './components/contato/contato.component';
import { SolucoesComponent } from './components/solucoes/solucoes.component';
import { LicencaAcpnComponent } from './components/licenca-acpn/licenca-acpn.component';
import { DivulgacaoCientificaComponent } from './components/divulgacao-cientifica/divulgacao-cientifica.component';


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
        path: "divulgacao-cientifica",
        component: DivulgacaoCientificaComponent
    },
    {
        path: "projetos",
        component: SolucoesComponent
    },
    {
        path: "licenca-acpn",
        component: LicencaAcpnComponent
    },
];
