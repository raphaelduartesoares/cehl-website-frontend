import { Component, OnInit } from "@angular/core";
import { NgxNotifierService } from "ngx-notifier";

@Component({
    templateUrl: "./doacao.component.html",
    styleUrls: ["./doacao.component.scss"],
})
export class DoacaoComponent {
    private qrCode =
        "00020126360014BR.GOV.BCB.PIX0114111440370001005204000053039865802BR5904CEHL6008Jaboatao62190515DoacaoPIXQRCode630405DD";
    private cnpj = "11144037000100";

    constructor(private ngxNotifierService: NgxNotifierService) {}

    onCopyQRCode(): void {
        this.copyTextToClipboard(this.qrCode);
        this.ngxNotifierService.createToast("Código QR copiado!", "success");
    }

    onCopyCNPJ(): void {
        this.copyTextToClipboard(this.cnpj);
        this.ngxNotifierService.createToast("CNPJ copiado!", "success");
    }

    private copyTextToClipboard(text: string): void {
        navigator.clipboard.writeText(text);
    }
}
