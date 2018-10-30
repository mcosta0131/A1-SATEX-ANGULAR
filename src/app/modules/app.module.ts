import { AppServices } from './../config/services/service.config';
import { AppMainView } from '../view/principal.view';
import { AppComponents } from '../config/components/component.config';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA }           from '@angular/core';
import { AppViews } from '../config/view/view.config';
import { AppModules } from '../config/modules/modules.config';


@NgModule({
  declarations: [
   AppComponents,
   AppViews
  ],
  imports: [
   AppModules
  ],
  providers: [AppServices],
  bootstrap: [AppMainView],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
