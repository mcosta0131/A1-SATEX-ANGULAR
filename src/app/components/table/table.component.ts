import { Component, Input, Output, EventEmitter } from '@angular/core';



@Component({
    selector: 'vv-table',
    template: ` <p-table 
                    [value]="items"
                    [columns]="columns"
                    [paginator]="true"
                    [rows]="10"
                    [autoLayout]="true"
                    [scrollable]="false"
                    selectionMode="single"
                    [(selection)]="selection"
                    [dataKey]="key"
                    (onRowSelect)="onRowSelect($event)"
                    (onRowUnselect)="onRowUnselect($event)">
                    <ng-template pTemplate="header">
                        <tr>
                            <th *ngFor="let col of columns" [pSortableColumn]="col.field">
                                {{col.header}}
                                <p-sortIcon [field]="col.field"></p-sortIcon>
                            </th>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="body" let-item let-columns="columns">
                    
                        <tr [pSelectableRow]="item">
                            <ng-container *ngFor="let col of columns">
                                <td *ngIf="isDate(item[col.field]); else notDate">
                                    {{item[col.field] | date:'dd/MM/yyyy' }}
                                </td>

                            <ng-template #notDate>
                                    <td>
                                        {{item[col.field]}}
                                    </td>
                                </ng-template>
                            </ng-container>
                        </tr>
                    </ng-template>
                    <ng-template pTemplate="summary">
                        <ng-content select="vv-table-summary" #summary></ng-content>
                    </ng-template>
                </p-table>`
})

export class TableComponent {
    @Input()
    items: any[];
    
    @Input()
    columns: any[];  
    
    @Input()
    key: any;

    @Input() selection: any;
    @Output() selectionChange = new EventEmitter();


    isDate(col) {
         return col instanceof Date;
    }
    
    onRowSelect(event) {
       this.selectionChange.emit(this.selection);
    }

    onRowUnselect(event) {
        this.selectionChange.emit(undefined);
    }
}