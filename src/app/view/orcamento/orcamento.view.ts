import { Component } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { ConsultaOrcService } from '../../services/ConsultaOrc.service';
import { ConsultaOrcModel } from '../../model/ConsultaOrc';


@Component({
  selector: 'orcamento-view',
  templateUrl: `orcamento.view.html`,
  styleUrls: ["./orcamento.view.css"]
})
export class OrcamentoView {

  form = new FormGroup({
    codOrc: new FormControl('', Validators.required),
    idOrcamento: new FormControl('', Validators.required)
  });

  selectedItem: ConsultaOrcModel;
  items: ConsultaOrcModel[] = [];
  errorMsg;


  constructor(private service: ConsultaOrcService) { }

  filtrar() {

    this.service.getOrcametos().subscribe(data => this.items = data,
      error => this.errorMsg = error)
      
  }


  limpar() {
    this.form.reset();
    this.items = [];
  }

  // Getters
  get columns() {
    return [
      { field: 'empresa', header: 'Empresa' },
      { field: 'nome', header: 'Nome' },
      { field: 'filial', header: 'Filial' },
    ]
  }
}
