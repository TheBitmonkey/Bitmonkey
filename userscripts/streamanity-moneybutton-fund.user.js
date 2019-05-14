// ==UserScript==
// @name Streamanity Moneybutton Add Funds
// @namespace Bitmonkey Scripts
// @match https://streamanity.com/*
// @require https://www.moneybutton.com/moneybutton.js
// @require https://code.jquery.com/jquery-3.4.1.min.js
// @require https://gist.githubusercontent.com/BrockA/2625891/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// @grant none
// ==/UserScript==



waitForKeyElements(".v-card__text > h4", doSomeStuff);


function doSomeStuff(){




var isMoneybutton = 'FALSE';
var sendAddress = '';



var pageURLCheckTimer1 = setInterval (
    function () {
        if (    this.lastPathStr  !== location.pathname
            ||  this.lastQueryStr !== location.search
            ||  this.lastPathStr   === null
            ||  this.lastQueryStr  === null
            ||  document.location.href.indexOf('account') >= 0
        ) {
            this.lastPathStr  = location.pathname;
            this.lastQueryStr = location.search;



            if (document.querySelector('.v-card__text > h4').innerHTML.indexOf("1") >= 0){

              if (isMoneybutton === 'FALSE'){
              isMoneybutton = 'TRUE';
                sendAddress = document.querySelector('.v-card__text > h4').innerHTML;
                console.log('There is a moneybutton');
              gmMain1();
              }

            }else{
            return
          }
          }


    }
    , 222
);

gmMain1();

function gmMain1() {

  console.log('BM-MB-TW-gmMain1');

  if (document.getElementById('bitmonkey-twitter-profile-moneybutton')) {

var mbprofiletwitterID = 'bitmonkey-twitter-profile-moneybutton';
var mbprofiletwitter = document.getElementById(mbprofiletwitterID);
mbprofiletwitter.parentNode.removeChild(mbprofiletwitter);
  }
if (document.querySelector('.v-dialog .v-card__text')){
var divMbTwitterProfile = document.createElement('div');
divMbTwitterProfile.style.cssText = 'width:300px; font-size:.8em; margin-top:15px; min-height:50px; justify:center;';
divMbTwitterProfile.setAttribute("id", "bitmonkey-twitter-profile-moneybutton");
//document.querySelector('.v-dialog .v-card__text').prepend(divMbTwitterProfile);

  var whichDiv = document.querySelectorAll('.v-dialog .flex');
  whichDiv[2].prepend(divMbTwitterProfile);


   const buttonDiv = document.getElementById('bitmonkey-twitter-profile-moneybutton')
  moneyButton.render(buttonDiv, {
    to: sendAddress,
    editable: true,
    currency: "USD"
  })

}


 }



}
