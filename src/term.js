import { TemplateElement } from 'https://esm.run/template-element';

export default class Term extends TemplateElement {
    styles = `
    img {
        display: block;
        border-radius: 5px;
    }
    `
    template =`
<div>
    <hr>
    <img src="${this.getAttribute("img")}" width="200">
    <h2>${this.getAttribute("name")}</h2>
    <p><slot></p>
    <hr>
</div>`;
}
customElements.define('jargvis-term', Term);