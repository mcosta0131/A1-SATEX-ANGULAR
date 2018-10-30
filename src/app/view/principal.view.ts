import { Component } from '@angular/core';

@Component({
  selector: 'principal-root',
  templateUrl: './principal.view.html',
  
})
export class AppMainView {
  version : String;

    ngOnInit() {
        //this.version = environment.version;
    }
}
