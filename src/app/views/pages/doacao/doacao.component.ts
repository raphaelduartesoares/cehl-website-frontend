import { Component, OnInit } from "@angular/core";

@Component({
    templateUrl: "./doacao.component.html",
    styleUrls: ["./doacao.component.scss"],
})
export class DoacaoComponent {
    private qrCode =
        "00020126360014BR.GOV.BCB.PIX0114111440370001005204000053039865802BR5904CEHL6008Jaboatao62190515DoacaoPIXQRCode630405DD";
    private cnpj = "11144037000100";

    onCopyQRCode(): void {
        this.copyTextToClipboard(this.qrCode);
    }

    onCopyCNPJ(): void {
        this.copyTextToClipboard(this.cnpj);
    }

    private copyTextToClipboard(text: string): void {
        navigator.clipboard.writeText(text);
    }
}
