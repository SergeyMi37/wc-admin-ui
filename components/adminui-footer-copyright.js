/*

 ----------------------------------------------------------------------------
 | admin-ui: SB2-Admin UI Theme WebComponents Library                        |
 |                                                                           |
 | Copyright (c) 2020 M/Gateway Developments Ltd,                            |
 | Redhill, Surrey UK.                                                       |
 | All rights reserved.                                                      |
 |                                                                           |
 | http://www.mgateway.com                                                   |
 | Email: rtweed@mgateway.com                                                |
 |                                                                           |
 |                                                                           |
 | Licensed under the Apache License, Version 2.0 (the "License");           |
 | you may not use this file except in compliance with the License.          |
 | You may obtain a copy of the License at                                   |
 |                                                                           |
 |     http://www.apache.org/licenses/LICENSE-2.0                            |
 |                                                                           |
 | Unless required by applicable law or agreed to in writing, software       |
 | distributed under the License is distributed on an "AS IS" BASIS,         |
 | WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  |
 | See the License for the specific language governing permissions and       |
 |  limitations under the License.                                           |
 ----------------------------------------------------------------------------

 29 February 2020

*/

export function load() {

  let componentName = 'adminui-footer-copyright';

  class adminui_footer_copyright extends HTMLElement {
    constructor() {
      super();

      const html = `
<div class="copyright text-center my-auto">
  <span>Undefined Text</span>
</div>
      `;

      this.html = `${html}`;
    }

    setState(state) {
      if (state.text) {
        this.rootElement.textContent = state.text;
      }
      if (state.copyright_text) {
        this.rootElement.textContent = 'Copyright \u00A9 ' + state.copyright_text + ' ' + new Date().getFullYear();
      }
      if (state.colour) {
        let oldColor = this.rootElement.classList.item(3);
        if (oldColor) this.rootElement.classList.remove(oldColor);
        this.rootElement.classList.add('text-' + state.colour);
      }
    }

    connectedCallback() {
      this.innerHTML = this.html;
      this.rootElement = this.getElementsByTagName('span')[0];
    }

    disconnectedCallback() {
      console.log('*** footer component was removed!');
    }
  }

  customElements.define(componentName, adminui_footer_copyright);

}
