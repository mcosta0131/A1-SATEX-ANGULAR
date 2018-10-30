import { Component, Input } from '@angular/core';



@Component({
    selector: 'vv-footer',
    template:`<footer class="page-footer font-small">
                <!-- Copyright -->
                <div class="footer-copyright text-center py-3">
                    <span>© 2018 Todos os direitos reservados:</span>
                    <span style="color: #1c7430;">ViaVarejo</span>
                </div>
                <!-- Copyright -->
            </footer>`,
    styleUrls: ["./footer.component.css"]
})

export class FooterComponent {
    
}