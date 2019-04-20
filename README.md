Bitmonkey
=============


![Bitmonkey](https://raw.githubusercontent.com/Musicious/Bitmonkey/master/src/resources/svg/bitmonkey-fangs-wide.png)

Bitmonkey aims to provide a gateway between the Metanet & the Internet by adapting the Greasemonkey model of userscripts support for browsers.. Allowing for Bitcoin developers to easily add support for their Bitcoin projects. 


Bitmonkey only accepts scripts which are stored on the Bitcoin Blockchain utilizing the Bitcom schema.

Allows developers to monitize their Userscript creations
If the script is safe it will be so always because that transaction cannot be changed.


Tentative Roadmap
---

Moneybutton:
--
Bitmonkeys wallet and payments system will operate through the moneybutton system. We will hope to integrate support for Handcash's naming space and cashport.

Profiles and Syncing:
--
By natively storing the users profile on the blockchain (encrypted or not) users can sync there Bitmonkey setup natively across multiple browsers and computers. Users can share profile setups and even switch between different setups for different use cases. ie - A preferred Dev Environment as opposed to browsing setup/ Gaming setup.

Bitmonkey will come by default with the Bitmonkey default profile switched on. Hopefully we will have an unwriter, moneybutton profiles enabled by default too. This will mean that users setup will be automatically updated to use the latest additions to those profiles and can get the benefits of updates without updating the main extension.

Profiles can be created which higher level use cases in mind which can be monitized through the system.




Add support for b:// c:// and d:// native support.

Add some nice userscripts which are already available.

Integrate metalens support natively.

Ideas - 
Tipper Bot integration into Social media Platforms.

Etched Support Buttons within Social Media platforms.


Review system hosted on Bitcoin, also flagging of malicious code.


Compatability
---

It works on browsers with [WebExtensions](https://developer.mozilla.org/en-US/Add-ons/WebExtensions) support.

More details can be found [here](https://bitmonkey.xyz/).


Development
---
Make sure [Node.js](https://nodejs.org/) greater than v8.0 is installed.
``` sh
# Install dependencies
$ yarn

# Watch and compile
$ yarn dev
```
Then load the extension from 'dist/'.

Build
---
``` sh
$ yarn build
```


Forked from
---
[Violentmonkey](https://violentmonkey.github.io)
