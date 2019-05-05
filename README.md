

Bitmonkey
=============


![Bitmonkey](https://github.com/TheBitmonkey/Bitmonkey/raw/master/src/resources/svg/bitmonkey-fangs-wide1.png)


Bitmonkey is a Browser Extension that aims to provide a gateway between the Metanet & the Internet. It is only a proof of concept at present. The current extension has been built and test on the Chrome browser but the underlying technology should be portable to the other mainstream Browsers without a tremendous amount of work.

This is a proof of concept and some of what is discussed below does not exist yet.... To Install and test the concept follow the steps below.

### Step 1:

Please add the extension to your Chrome Browser.

[Install the Bitmonkey Chrome Extension](https://chrome.google.com/webstore/detail/bitmonkey/lmbggmpkoffpdaipfpgoflcfnendmmec)

### Step 2:

Install our test scripts by clicking the links below and confirm the installation. (In the future the extension will come pre-loaded with scripts..talked about below.)

[Twitter Profile Moneybutton](https://github.com/TheBitmonkey/Bitmonkey/raw/master/userscripts/profile-twitter-moneybutton.user.js)

Visit any profile on Twitter to see the Moneybutton injected into their profile. *Warning:* This will send money to Bitmonkey not to the profile visible. The button now also send the twitter username of the recipient to the Bitcoin network as an OP Return for a bitcoin agent to process and manage that tip.

[Immortal SV Tweet](https://github.com/TheBitmonkey/Bitmonkey/raw/master/userscripts/immortalsv-twitter-link.user.js)

This Script will place a small Bitmonkey link to Immortalsv.com at the bottom right of each tweet that contains the prepopulates the form with the link to the tweet you clicked on. The next Integration will skip the need to leave Twitter at all. I will also add etched.page support too.



### Step 3:

Visit Twitter to test out the examples which we have developed to show you the power of Bitmonkey..


Background
----

Bitmonkey is a fork of Violentmonkey which utilises the Greasemonkey model of userscripts. Bitmonkey takes this concept and extends its functionality by integrating it with Bitcoin. Allowing for Bitcoin developers to easily add support for their Bitcoin projects into the current Internet without the need for an individual Browser extension to be installed for each application.

Bitmonkey will allow Metanetters to redesign the current internet in our image. From added functionality and interoperability to theming and modding of sites. The Bitmonkey model should allow for decentralized development and coordination in creating this vision.


Change the way you think about UI and Application Design
---
Web Interfaces for Systems are ubiquitous today. By cleverly utilizing the Userscript schema we will be able to create integrations between existing systems and the Metanet/Bitcoin Systems.

Nearly all software systems today provide a web frontend. The process of integrating systems together is usually handled in the backend or by a laborious process. By utilizing the power of DOM manipulation scripts can be developed professionally that will aid with this process.



Example Applications
-----

##### TipperBot
Twitter Profile Tipper
![Tip Roger](https://github.com/TheBitmonkey/Bitmonkey/raw/master/src/resources/svg/tip-roger.png)


Donations

Github - Tipping / Messaging System.

Agent tip bot. Currently we have not implemented the backend tipping system agent to manage the whole process. Possible candidates include:

http://pipe.cash/
https://github.com/Pipe-Cash/
Tokenized Agents - To be released.

##### Metalens Support
Metalens support

![Metalens Twitter](https://github.com/TheBitmonkey/Bitmonkey/raw/master/src/resources/svg/metalens-twitter.png)

![Metalens Twitter 2](https://github.com/TheBitmonkey/Bitmonkey/raw/master/src/resources/svg/metalens-twitter-2.png)

Bitmonkey wants to move away from the iframe integration of metalens by incorporating the metalens comments into the actual website.

##### Youtube - Live Streaming and Donations - Future Idea

Adding Metalens functionality into the live chat of Youtube. With Superchat styling and payments to the channel owner. Live Streamers Cross Platform - Live Chat Earning


### Store this page forever buttons
ImmortalSV and Etched.page 1-click support. Add a button for 1-click support to send the current tweet or page to be immortalized on the Metanet. Unfortunately this is not possible yet as these systems do not yet have the ability to be triggered externally via this type of plug in. We will discuss this with the developers of these applications in the coming months.


### Increased Productivity

Userscripts have been used for year to increase productivity and automating routine tasks. The possibilities to rapidly expand the userbase of Bitcoin through creating systems which help them increase productivity.

### Interoperability

Nearly all systems these days have a browser based frontend. By creating Application specific Scripts that have passed certain security checks will allow for developers to create new on-ramps between existing software and future applications that will live on the metanet.

The Bitmonkey Repository of Userscripts
---
#### To be developed...

We need to integrate within the current Userscript versioning and upgrading system used by Userscript providers. We need to fully understand that first before expanding upon it.

We intend to develop Planaria nodes to manage the display and filtering of the userscripts.

### Bitcoin Userscript Versioning System

Review system for userscripts hosted on Bitcoin, also flagging of malicious code by trusted devs/users.

Script release files are c:// files

https://c.bitdb.network/

https://docs.planaria.network/#/api?id=_5-file-serve-api


Bitmonkey Apps
---

Extending the idea of userscripts to also having collections of userscripts which would form an App or Suite of tools for a particular Metanet service/application.

UserScripts
-----
Userscripts will be uploaded into the Bitcoin blockchain within the Extension directly. When uploading a Userscript it will have associated metadata and a strict naming convention.

A special Planaria node will be created to help organize the Userscripts with these 'tags' so that users can easily browse through the collection of scripts which they may like to add. Language Tags are necessary.

Some scripts can have dependencies on other Userscripts and will need to be loaded after them. Updates can be managed through this system too. Developers public keys will be used to authenticate developers. A Whitelist system will be integrated at the start during Stage 1, which may be changed to a Blacklist structure when the Project matures.

##### Example Tags:

Twitter Tipper Buttons (Adds buttons for tipper within twitter) --> Dependency TippermainApp - General TipperApp functionality

Twitter Tipper Theme Script (A unique styling for the tipper button) --> Dependency Twitter Tipper Buttons


Profiles and Syncing:
-----
By natively storing the users profile on the blockchain (encrypted or not) users can sync there Bitmonkey setup natively across multiple browsers and computers. Users can share profile setups and even switch between different setups for different use cases. ie - A preferred Dev Environment as opposed to browsing setup/ Gaming setup.

Bitmonkey will come by default with the Bitmonkey default profile switched on. This will mean that users setup will be automatically updated to use the latest additions to those profiles and can get the benefits of updates without updating the main extension.

Profiles can be created which combine 'suites' of UserScripts that could cover various use cases

Profiles can be monetized through the system too.


Bitmonkey Metanet Integration
-----


### Added Content Policy Security to Headers

Bitmonkey adds moneybutton.com and metalens.allaboard.com to the Content Policy of all headers sent to the browser for all websites. This allows for Integration of the Moneybutton and Metalens iframes on all websites once the Extension is installed.

https://www.w3.org/TR/CSP/#framework-directive-source-list

Chrome:
https://developer.chrome.com/extensions/contentSecurityPolicy


### Redirects of b:// c:// links

###### A recent upgrade to chrome has broken this functionality.

Currently all c:// links redirect to https://bico.media/ in the future Users will be able to choose which data provider they wish from a pre approved list.

https://github.com/bico-media

B://
https://github.com/unwriter/B

https://b.bitdb.network/

Future developments will convert to only use the bit:// protocol and allow developers to use it natively in Bitmonkey Scripts

https://bit.planaria.network/#/


On-Boarding
---

We intend on integrating an internal wallet to work with various 3rd Parties. Helping people 'Top up' their balance. We will push people towards the best on ramp for them based on their location. Relayx, Moneybutton, Handcash and Centbee are all working hard to solve the on ramp problems and we would like to smoothly integrate our platform to work with all systems.


> ##### Stage 1: Metaneters
> The easiest people to get on-board will be current users of the Metanet. These people consist of mainly developers. It is hoped that the early Userscripts will help them to integrate their own products into the Bitmonkey system. This will help with Bug testing and the future direction of the project. Each Developer that Integrates their service on top of Bitmonkey will add their own version of On-boarding and use cases.

> ##### Stage 2: The Deplorables
> The second market that needs to be focused on is the deplatforming which is happening throughout the current Internet. This is a potentially large percentage of the population of many countries who are being forcibly removed from the Internet. Content creators on various platforms are looking for solutions to generate Income. These content creators have huge audiences. Mostly the Internet is banning 'right-wing' people who include libertarians and free market proponents. These people will be invaluable to push the use cases fro Bitcoin.
> Also by Integrating the Bitmonkey Tipperbot into various Social media platforms among other product developed by different developers we should be able to make the onboarding process smooth.

> ##### Stage 3: Developers
>  There are already thousands of developers that have created Userscripts or are at least familiar with the concept. By giving them the tools to integrate

> ##### Stage 4: Enterprise Clients
> Creating userscripts/profiles to help Business specific integration of their current software and metanet software. This can be handled in a secure fashion due to the protections and security which is inbuilt within the Bitcoin protocol.

#### How do we make money?
We will add a small fee to some of our integrations. We would hope that Bitmonkey script developers also add the Bitmonkey address to their scripts. Scripts that do that will gain preferential treatment in our own online catalog of 'Apps'

We will take a % of the price paid for downloading paid for scripts.

We intend to give a revenue share to the data providers which the user chooses to download Information from Bitcoin. So for example if you tip somebody on Twitter using our tipper app, then a smal fee will be shared with that users selected data provider such as Bico.media. The idea is to promote professionalism and a business model for data providers helping them to scale. 

#### What is our philosophy?

Monkey see, monkey do.


Bitmonkey is a Dev Environment
---
Developers can develop their code directly within the Bitmonkey Extension. When finished they will be able to upload their code to the blockchain from within the App (not yet). Developers will be able to upload encrypted files if they prefer so that only they or those they choose can decrypt.

Developers will be able to publish their Userscripts to be available on the Bitmonkey Marketplace to be used by others.

At present the Interface is more suited to developers. In the next Iteration of the project we will make the Extension more focused on the end user.

Developers get paid
---
Because Bitmonkey is integrated into Bitcoin it will be easy for Developers of Userscripts to get paid for their efforts if they wish. Userscripts can be encrypted until payment is received for the use of their script. There are many developers of userscripts currently that do not have an option of being paid for their creations.


Bitmonkey for Enterprise Clients
---

Because each Userscript release will be downloaded via link which is the SHA256 of that file contents (Unwriters c:// protocol). Enterprise clients can be assured of the content and intent of a certain userscript. External Security firms will be able to verify the security of that script and attest to it via the Bitcoin network itself. This way a script file can be assessed by a professional team for security vulnerabilities. The Bitmonkey Extension will test this hash before installing the Script using the js-sha256 lbrary, which has been integrated into the extension.




### The Browser Extension

The underlying system will work on browsers with [WebExtensions](https://developer.mozilla.org/en-US/Add-ons/WebExtensions) support.

More details can be found [here](https://bitmonkey.xyz/).

Bitmonkey (will) only accepts scripts which are stored on the Bitcoin Blockchain utilizing the Bitcom schema. It allows developers to monetize their Userscript creations if they so choose. For now they can be loaded from most userscript repositories and github.



Login, Profiles and Identity
---
At present it is too early to integrate an Identity system as there are many in development. A unified solution is not yet available.

Cashport

https://github.com/HandCash/cashport-sdk-typescript

Metalens - Protocol and Bitcom piping

https://www.yours.org/content/metalens-app-update---map-protocol-2a7f47367bb2


https://github.com/BitcoinFiles/AUTHOR_IDENTITY_PROTOCOL


https://github.com/rohenaz/MAP

https://medium.com/@roger.taylor/thoughts-on-identity-2e262e8771d5


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

Pull Requests would be awesome.
