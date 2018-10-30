import { AppMainView } from './../view/principal.view';
import { Routes, RouterModule } from "@angular/router";
import { OrcamentoView } from "../view/orcamento/orcamento.view";
import { NgModule } from "@angular/core";


const routes : Routes = [

    {path:'orcamento', component: OrcamentoView},
   // {path:'principal', component: AppMainView}
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports : [RouterModule]
})
export class AppRoutingModule{

}