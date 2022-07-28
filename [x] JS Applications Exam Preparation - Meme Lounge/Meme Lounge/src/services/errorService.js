import { html } from '../../node_modules/lit-html/lit-html.js';

const errorTemplate = (errorMessage) => html`
        <section id="notifications">
            <div id="errorBox" class="notification">
                <span>${errorMessage}</span>
            </div>
        </section>
`;

export const errorView = (ctx, errorMessage) => {
    ctx.render(errorTemplate(errorMessage))
}