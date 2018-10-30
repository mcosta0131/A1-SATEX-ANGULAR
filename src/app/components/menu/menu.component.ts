import { Component, Input } from '@angular/core';
import { MenuItem }         from 'primeng/api';


@Component({
    selector: 'vv-menu',
    templateUrl:'menu.component.html',
    styleUrls: ["./menu.component.css"]
})

export class MenuComponent {

    items: MenuItem[];

    ngOnInit() {
        this.items = [
            {
                label: 'Orçamento',
                items: [
                    {label: 'Orçamentos a realizar', url:'/orcamento'}
                   // {label: 'Open'},
                   // {label: 'Quit'}
                ]
            },
            {
                label: 'Mercadoria',
                items: [
                    {label: 'Status de Mercadorias'},
                    {label: 'Retorno de Mercadorias'}
                ]
            },
            {
                label: 'Nota',
                items: [
                    {label: 'Notas a Faturar'},
                   
                ]
            },
            {
                label: 'Relatórios',
                items: [
                    {label: 'Gerar Relatório'},
                   
                ]
            },
        ];
    }
   
}