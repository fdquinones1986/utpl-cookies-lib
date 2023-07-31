# Utpl Cookies

Developed within the Application Architecture Department at UTPL, this project is an adaptation of a component originally created by [jfeltkamp] (https://github.com/jfeltkamp/cookiesjsr). The original component was designed for managing cookies on a webpage, and we have adjusted it for functionality within an Angular 15 environment.

## Installation
1. First install on your project:
`ng build utpl-cookies`
#or
`yarn add utpl-cookies`
2. In the index.html file, append the following in the header section:
`<link rel="stylesheet" media="screen" href="https://cdn.jsdelivr.net/gh/jfeltkamp/cookiesjsr@1/dist/cookiesjsr.min.css" />`

## Usage
Add the utpl-cookies module to your app.module.ts as a provider:
```typescript

//Import library
import {UtplCookiesModule} from 'utpl-cookies';
@NgModule({
    imports: [
        UtplCookiesModule
    ],
```

Then, add selector id on your component html (layout):
```html

<utpl-cookies> </utpl-cookies >
```

That's it!

## Demo
[Utpl Pay](https://srv-si-001.utpl.edu.ec/PAY_WEB_TEST_V2/transaction/button/Dv3oRbPcxTJmdsy5Y8Hd539O4v%2BWPuQCnJYlW5cZatE%3D)


## Custom config



## Custom actions


## Further help

For any issues or questions, feel free to reach out to our support team:

**Diego Sarmiento**
<br>
![Diego Sarmiento](https://dfssarmiento.github.io/)
<br>
Email: [dfsarmiento@utpl.edu.ec](mailto:dfsarmiento@utpl.edu.ec)

**Felipe Quiñonez**
<br>
![Felipe Quiñonez](https://fdquinones.github.io/)
<br>
Email: [fdquinones@gmail.com](mailto:fdquinones@gmail.com)
