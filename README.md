
Bitmonkey
=============


!Bitmonkey](https://raw.githubusercontent.com/Musicious/Bitmonkey/master/src/resources/svg/bitmonkey-fangs-wide.png)
*Note: This does not work yet..

Bitmonkey aims to provide a gateway between the Metanet & the Internet by adapting the Greasemonkey model of userscripts support for browsers and integrating it with the Bitcom schema. Allowing for Bitcoin developers to easily add support for their Bitcoin projects into the current Internet without the need for an individual Browser extension to be installed for each application.

Bitmonkey will allow Metanetters to redesign the current internet in our image. From added functionality and interoperability to theming and modding of sites. The Bitmonkey model should allow for decentralized development and coordination in creating this vision.


Change the way you think about UI
---
Web Interfaces for Systems are ubiquitous today. By cleverly utilizing the Userscript schema we will be able to create integrations between existing systems and the Metanet/Bitcoin Systems.


Bitmonkey a Dev Environment
---
Developerrs can develop their code directly within the Bitmonkey Extension. When finished they will be able to upload their code to the blockchain from within the App. Developers will be able to upload encrypted files if they prefer.

Developers will be able to publish their Userscripts to be available on the Bitmonkey Marketplace to be used by others.

Developers get paid
---
Because Bitmonkey is integrated into Bitcoin it will be easy for Developers of Userscripts to get paid for their efforts if they wish. Userscripts can be encrypted until payment is received for the use of their script. There are many developers of userscripts currently that do not have an option of being paid for their creations.


Bitmonkey for Enterprise Clients
---

Because each Userscript release will be downloaded via link which is the SHA256 of that file contents (Unwriters c:// protocol). Enterprise clients can be assured of the content and intent of a certain userscript. External Security firms will be able to verify the security of that script and attest to it via the Bitcoin network itself. This way a script file can be assessed by a professional team for security vulnerabilities. The Bitmonkey Extension will test this hash before installing the Script using the js-sha256 lbrary.



Uses & Benefits
-----

### Twitter
Twitter Profile Tipper
Metalens support
ImmortalSV and Etched.page 1-click support. Add a button for 1-click support to send the current tweet or page to be immortalized on the Metanet.

### Youtube - Live Streaming and Donations

Adding Metalens functionality into the live chat of Youtube. With Superchat styling and payments to the channel owner. Live Streamers Cross Platform - Live Chat Earning


Adding Functionality

Increased Productivity

Reduce Learning Curve

Interoperability

Reduce Friction

Inspiration for Devs

On-Boarding



Donations

Github - Tipping / Messaging System.

Tipper Bot integration into Social media Platforms.



Bitmonkey Metanet Integration
-----

### Bitcoin Userscript Versioning System

Review system for userscripts hosted on Bitcoin, also flagging of malicious code by trusted devs/users.

### Installed Libraries
Datapay - https://github.com/unwriter/datapay
Moneybutton
Databutton
Metalens

### Added Content Policy Security to Headers

Bitmonkey adds moneybutton.com and metalens.allaboard.com to the Content Policy of all headers sent to the browser for all websites. This allows for Integration of the Moneybutton and Metalens iframes on all websites once the Extension is installed.

https://www.w3.org/TR/CSP/#framework-directive-source-list

Chrome:
https://developer.chrome.com/extensions/contentSecurityPolicy


### Redirects of b:// c:// links

Bico Media

https://bico.media/

https://github.com/bico-media

B://
https://github.com/unwriter/B

https://b.bitdb.network/

Future Integrations with bit:// links and d://


https://github.com/bitcoineler/D




### The Browser Extension

The underlying system will work on browsers with [WebExtensions](https://developer.mozilla.org/en-US/Add-ons/WebExtensions) support.

More details can be found [here](https://bitmonkey.xyz/).

Bitmonkey (will) only accepts scripts which are stored on the Bitcoin Blockchain utilizing the Bitcom schema. It allows developers to monetize their Userscript creations if they so choose.



### Userscript Information



Header Info

text/x-userscript-meta

text/x-userscript-update

Openuserjs
https://github.com/OpenUserJS/OpenUserJS.org/wiki/Frequently-Asked-Questions

Metadata Block
https://sourceforge.net/p/greasemonkey/wiki/Metadata_Block/

https://greasyfork.org/en

https://tampermonkey.net/documentation.php


https://wiki.greasespot.net/Metadata_Block


https://tampermonkey.net/faq.php


Login and Identity
---
At present it is too early to integrate an Identity system as there are many in development. A unified solution is not yet available.

Cashport

https://github.com/HandCash/cashport-sdk-typescript

Metalens - Protocol and Bitcom piping

https://www.yours.org/content/metalens-app-update---map-protocol-2a7f47367bb2


https://github.com/BitcoinFiles/AUTHOR_IDENTITY_PROTOCOL


https://github.com/rohenaz/MAP

https://medium.com/@roger.taylor/thoughts-on-identity-2e262e8771d5




Scripts:

Twitter...

https://stackoverflow.com/questions/28194122/how-to-execute-a-greasemonkey-script-on-every-infinite-scrolling-event-in-a-twit








Script release files are c:// files

https://c.bitdb.network/



https://docs.planaria.network/#/api?id=_5-file-serve-api






Business Plan

How do we make money?


What is our philosophy?


What is our model or terms and conditions?


Agent tip bot.

http://pipe.cash/

https://github.com/Pipe-Cash/




UserScripts
-----
Userscripts will be uploaded into the Bitcoin blockchain within the Extension directly. When uploading a Userscript it will have associated metadata and a strict naming convention.

A special Planaria node will be created to help organize the Userscripts with these 'tags' so that users can easily browse through the collection of scripts which they may like to add. Language Tags are necessary.

Some scripts can have dependencies on other Userscripts and will need to be loaded after them. Updates can be managed through this system too. Developers public keys will be used to authenticate developers.

Example Tags:

Twitter Tipper Buttons (Adds buttons for tipper within twitter) --> Dependency TippermainApp - General TipperApp functionality

Twitter Tipper Theme Script (A unique styling for the tipper button) --> Dependency Twitter Tipper Buttons


Profiles and Syncing:
-----
By natively storing the users profile on the blockchain (encrypted or not) users can sync there Bitmonkey setup natively across multiple browsers and computers. Users can share profile setups and even switch between different setups for different use cases. ie - A preferred Dev Environment as opposed to browsing setup/ Gaming setup.

Bitmonkey will come by default with the Bitmonkey default profile switched on. This will mean that users setup will be automatically updated to use the latest additions to those profiles and can get the benefits of updates without updating the main extension.

Profiles can be created which combine 'suites' of UserScripts that could cover various use cases

Profiles can be monetized through the system.

SHARED BOOKMARKS/APP STORE

AUTOMATION SETUPS

WORKFLOW -

DESIGN -


THEMES - TWITTER THEME OVERRIDES, FACEBOOK ETC. Stored on the blockchain and



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

You will need to download scripts to install into your extension as the online Bitcoin hosted repo is yet to be built.
