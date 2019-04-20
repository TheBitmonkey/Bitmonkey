Bitmonkey 
=============


![Bitmonkey](https://raw.githubusercontent.com/Musicious/Bitmonkey/master/src/resources/svg/bitmonkey-fangs-wide.png)
*Note: This does not work yet..

Bitmonkey aims to provide a gateway between the Metanet & the Internet by adapting the Greasemonkey model of userscripts support for browsers and integrating it with the Bitcom schema. Allowing for Bitcoin developers to easily add support for their Bitcoin projects without the need for an individual Browser extension to be installed.

Bitmonkey will allow Metanetters to redesign the current internet in our image. From added functionality and interoperability too themeing and modding of sites. The Bitmonkey model should allow for decentralised development and coordination in creating this vision.

The Technology
-----

The underlying system will work on browsers with [WebExtensions](https://developer.mozilla.org/en-US/Add-ons/WebExtensions) support.

More details can be found [here](https://bitmonkey.xyz/).

Bitmonkey only accepts scripts which are stored on the Bitcoin Blockchain utilizing the Bitcom schema. It allows developers to monitize their Userscript creations if they so choose. 


If the script is safe it will be so always because that transaction cannot be changed.


Tentative Roadmap
---

Moneybutton & Unwriter:
-----
Bitmonkeys wallet and payments system will operate through the moneybutton system. We will hope to integrate support for Handcash's naming space and cashport. Userscripts will be able to access the moneybutton JS libraries through Bitmonkey and Unwriters stack.

UserScripts
-----
Userscripts will be uploaded into the Bitcoin blockchain within the Addon. When uploading a Userscript it will have associated metadata and a strict naming convention. Userscripts can be organised with these 'tags' so that users can easily browse through the collection of scripts which they may like to add. Language Tags are nessesary. 

Some scripts can have dependencies on other Userscripts and will need to be loaded after them. Updates can be managed through this system too. Developers public keys will be used to authenticate developers. 

Example Tags: 

Twitter Tipper --> Dependency TippermainApp

Twitter Tipper Theme Script --> Dependency Twitter Tipper


Profiles and Syncing:
-----
By natively storing the users profile on the blockchain (encrypted or not) users can sync there Bitmonkey setup natively across multiple browsers and computers. Users can share profile setups and even switch between different setups for different use cases. ie - A preferred Dev Environment as opposed to browsing setup/ Gaming setup.

Bitmonkey will come by default with the Bitmonkey default profile switched on. Hopefully we will have an unwriter, moneybutton profiles enabled by default too. This will mean that users setup will be automatically updated to use the latest additions to those profiles and can get the benefits of updates without updating the main extension.

Profiles can be created which higher level use cases in mind which can be monitized through the system.

B://, C:// & D:// Support
-----
Add support for b:// c:// and d:// native support within Bitmonkey. Users will be able to choose hosting suppliers within the settings page.

Add some nice userscripts which are already available.

Integrate metalens support natively within Bitmonkey

Ideas  
Tipper Bot integration into Social media Platforms.

Etched Support Buttons within Social Media platforms.


Review system hosted on Bitcoin, also flagging of malicious code.


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
