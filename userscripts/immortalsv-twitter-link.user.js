// ==UserScript==
// @name Immortalsv-twitter-link
// @namespace scripts.bitmonkey.xyz
// @require https:////ajax.googleapis.com/ajax/libs/jquery/1.6.2/jquery.min.js
// @match https://twitter.com/*
// @inject-into content
// @grant GM_addStyle
// @grant GM_getResourceText
// ==/UserScript==



(function() {
    'use strict';

// div .tweet data-permalink-path

    const addDownloadButton = () => {
        let tweets = document.querySelectorAll('.tweet');
        tweets.forEach((t) => {
            let actionList = t.querySelector('.ProfileTweet-actionList');
            if (actionList){
                if (!actionList.querySelector('.ProfileTweet-action--downloadImgs')){

                        let divDownloadImgs = document.createElement('DIV');
                        divDownloadImgs.className = 'ProfileTweet-action ProfileTweet-action--downloadImgs';
                  divDownloadImgs.setAttribute('style', 'float:right;')

                            var tweetUrl = t.getAttribute('data-permalink-path');
                            let btnImmortalsv = document.createElement('A');
                            btnImmortalsv.className = 'ProfileTweet-actionButton u-textUserColorHover js-actionButton';
                            btnImmortalsv.setAttribute("href", "https://immortalsv.com/?url=https://twitter.com"+ tweetUrl);
                            btnImmortalsv.target = "_blank";
                  var btnImg = document.createElement("IMG");
                  btnImg.src = 'https://github.com/TheBitmonkey/Bitmonkey/raw/master/src/public/images/bitmonkey-outline.png';
                  btnImg.height = '15';
                  btnImg.width = '15';
                            //let btnText = '<svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 537.87 478.01"><defs><style>.cls-1{fill:#fff;stroke-miterlimit:10;stroke-width:17px;}.cls-1,.cls-2{stroke:#000;}.cls-2{font-size:24.8px;stroke-width:4px;font-family:MyriadPro-Regular, Myriad Pro;}</style></defs><title>bitmonkey-outline</title><polygon class="cls-1" points="95.43 469.51 95.43 423.51 129.43 423.51 141.43 370.51 173.43 424.51 391.43 424.51 421.43 373.51 434.43 423.51 468.43 424.51 468.43 469.51 95.43 469.51"/><polygon class="cls-1" points="36.43 45.51 232.43 93.51 208.43 192.51 10.43 143.51 36.43 45.51"/><polygon class="cls-1" points="304.43 91.51 331.43 192.51 527.43 139.51 500.43 40.51 304.43 91.51"/><ellipse class="cls-1" cx="231.43" cy="294.01" rx="26" ry="29.5"/><ellipse class="cls-1" cx="315.43" cy="295.01" rx="26" ry="29.5"/><text class="cls-2" transform="translate(108.51 30.25) rotate(17.13)">100110010001</text><text class="cls-2" transform="translate(282.04 68.8) rotate(-17.6)">011010010110</text></svg>';//document.createTextNode('ImmortalSV');
                            btnImmortalsv.appendChild(btnImg);
                            divDownloadImgs.appendChild(btnImmortalsv);
                            actionList.appendChild(divDownloadImgs);
                    }

            }
        });


    }

    window.onload = function(){
        addDownloadButton();
    }

    waitForKeyElements (
        '.AdaptiveMedia-container img',
        addDownloadButton
        );



    function waitForKeyElements (
    selectorTxt,    /* Required: The jQuery selector string that
                        specifies the desired element(s).
                    */
    actionFunction, /* Required: The code to run when elements are
                        found. It is passed a jNode to the matched
                        element.
                    */
    bWaitOnce,      /* Optional: If false, will continue to scan for
                        new elements even after the first match is
                        found.
                    */
    iframeSelector  /* Optional: If set, identifies the iframe to
                        search.
                    */
) {
    var targetNodes, btargetsFound;

    if (typeof iframeSelector == "undefined")
        targetNodes     = $(selectorTxt);
    else
        targetNodes     = $(iframeSelector).contents ()
                                           .find (selectorTxt);

    if (targetNodes  &&  targetNodes.length > 0) {
        btargetsFound   = true;
        /*--- Found target node(s).  Go through each and act if they
            are new.
        */
        targetNodes.each ( function () {
            var jThis        = $(this);
            var alreadyFound = jThis.data ('alreadyFound')  ||  false;

            if (!alreadyFound) {
                //--- Call the payload function.
                var cancelFound     = actionFunction (jThis);
                if (cancelFound)
                    btargetsFound   = false;
                else
                    jThis.data ('alreadyFound', true);
            }
        } );
    }
    else {
        btargetsFound   = false;
    }

    //--- Get the timer-control variable for this selector.
    var controlObj      = waitForKeyElements.controlObj  ||  {};
    var controlKey      = selectorTxt.replace (/[^\w]/g, "_");
    var timeControl     = controlObj [controlKey];

    //--- Now set or clear the timer as appropriate.
    if (btargetsFound  &&  bWaitOnce  &&  timeControl) {
        //--- The only condition where we need to clear the timer.
        clearInterval (timeControl);
        delete controlObj [controlKey]
    }
    else {
        //--- Set a timer, if needed.
        if ( ! timeControl) {
            timeControl = setInterval ( function () {
                    waitForKeyElements (    selectorTxt,
                                            actionFunction,
                                            bWaitOnce,
                                            iframeSelector
                                        );
                },
                300
            );
            controlObj [controlKey] = timeControl;
        }
    }
    waitForKeyElements.controlObj   = controlObj;
}
})();
