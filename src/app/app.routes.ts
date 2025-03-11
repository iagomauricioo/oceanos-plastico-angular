import { Routes } from '@angular/router';
import { ColaboradoresComponent } from './components/colaboradores/colaboradores.component';
import { HomeComponent } from './components/home/home.component';
import { ContatoComponent } from './components/contato/contato.component';
import { SolucoesComponent } from './components/solucoes/solucoes.component';
import { LicencaAcpnComponent } from './components/licenca-acpn/licenca-acpn.component';
import { DivulgacaoCientificaComponent } from './components/divulgacao-cientifica/divulgacao-cientifica.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { JanelaAmbientalComponent } from './components/janela-ambiental/janela-ambiental.component';


export const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "equipe/lere",
        component: ColaboradoresComponent
    },
    {
        path: "equipe/ppgasa",
        component: ColaboradoresComponent
    },
    {
        path: "equipe/univassouras",
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
    {
        path: "admin",
        component: AdminComponent,
    },
    {
        path: "login",
        component: LoginComponent
    },
    {
        path: "janela-ambiental",
        component: JanelaAmbientalComponent
    }
];
