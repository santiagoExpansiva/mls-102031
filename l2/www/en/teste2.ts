/// <mls fileReference="_102031_/l2/www/en/teste2.ts" enhancement="_100554_enhancementLit"/>

 import { html } from 'lit'; 
 import { customElement, property } from 'lit/decorators.js';
 import { StateLitElement } from '/_100554_/l2/stateLitElement.js';

 @customElement('www--en--teste2-102031')
 export class Teste1102031 extends StateLitElement {
    
     @property() name: string = 'Somebody';

     render() {
         return html`<p> Hello, ${ this.name } !</p>`;
     }
 }
