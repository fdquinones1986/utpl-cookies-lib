import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'utpl-cookies',
  templateUrl: './utpl-cookies.component.html',
  styles: [
  ]
})
export class UtplCookiesComponent implements OnInit {
  
  /**
  * @author fdquinones
  * @classdesc Al momento de inicializar el componente se cargan las librerias necesarias para trabajar
  */
  ngOnInit() {
    this.loadInit();
    this.loadExternalScript("https://cdn.jsdelivr.net/gh/jfeltkamp/cookiesjsr@1/dist/cookiesjsr.min.js");

  }

  /**
  * @author fdquinones
  * @param scriptUrl
  * @classdesc Obtiene un script externo, en este caso la libreria de @jfeltkamp/cookiesjsr.
  */
  private loadExternalScript(scriptUrl: string) {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.src = scriptUrl;
      scriptElement.textContent = "";
      scriptElement.type = 'text/javascript';
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }

  /**
     * @author fdquinones
     * @classdesc Configura por defecto el componente de @jfeltkamp/cookiesjsr
     */
  private loadInit() {
    return new Promise((resolve, reject) => {
      const scriptElement = document.createElement('script');
      scriptElement.textContent = `// Base configuration
        document.cookiesjsr = {
          apiUrl: '',
          configQuery: 'https://unpkg.com/utpl-cookies@0.0.11/assets/cookiesjsr/cookiesjsr-config.json'
        }
        var dispatcher = {
          matomo: {
             activate: function() {
                // Do stuff to enable Matomo. See best practices below.
             },
             fallback: function() {
                // Do stuff to fallback. E.g. display layer where the benefits are explained,
                // when Matomo is enabled.
             }
          },
          analytics: {
             activate: function() {
                // Do stuff to enable Google Analytics. See best practices below.
             },
             fallback: function() {
                // Do stuff to fallback. E.g. display layer where the benefits are explained,
                // when Google Analytics is enabled.
             }
          }
       }
       
       /**
        * Entry to your custom code:
        * Catch the Event 'cookiesjsrUserConsent' that comes with an object services inside the
        * event object called with event.detail.services. It contains the current user decisions.
        *
        * This event is fired when DOM is loaded or user updates his settings.
        */
       document.addEventListener('cookiesjsrUserConsent', function(event) {
          var services = (typeof event.detail.services === 'object') ? event.detail.services : {};
          for (var sid in services) {
             if(typeof dispatcher[sid] === 'object') {
                if(services[sid] === true && typeof dispatcher[sid].activate === 'function') {
                   dispatcher[sid].activate();
                } else if(typeof dispatcher[sid].fallback === 'function') {
                   dispatcher[sid].fallback();
                }
             }
          }
       });`;
      scriptElement.type = 'text/javascript';
      scriptElement.onload = resolve;
      document.body.appendChild(scriptElement);
    });
  }
}
