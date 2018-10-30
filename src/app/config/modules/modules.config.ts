import { BrowserModule }                                    from "@angular/platform-browser";
import { BrowserAnimationsModule }                          from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule }                 from '@angular/forms';
import { HttpClientModule }                                 from '@angular/common/http';
import { MessagesModule }                                   from 'primeng/messages';
import { MessageModule }                                    from 'primeng/message';
import { MenubarModule }                                    from 'primeng/menubar';
import { CalendarModule }                                   from 'primeng/calendar';
import { CardModule }                                       from 'primeng/card';
import { TableModule }                                      from 'primeng/table';
import { DropdownModule }                                   from 'primeng/dropdown';
import { MultiSelectModule }                                from 'primeng/multiselect';
import { FieldsetModule }                                   from 'primeng/fieldset';	
import { InputMaskModule }                                  from 'primeng/inputmask';
import { InputTextareaModule }                              from 'primeng/inputtextarea';
import { FileUploadModule }                                 from 'primeng/fileupload';
import {GrowlModule}                                        from 'primeng/growl';
import { AppRoutingModule }                                 from "../../router/app.routing";

export const AppModules = [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MessagesModule,
    MessageModule,
    MenubarModule,
    CalendarModule,
    TableModule,
    CardModule,
    DropdownModule,
    MultiSelectModule,
    FieldsetModule,
    InputMaskModule,
    InputTextareaModule,
    FileUploadModule,
    GrowlModule
]