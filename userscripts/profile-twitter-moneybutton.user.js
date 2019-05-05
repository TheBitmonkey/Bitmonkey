// ==UserScript==
// @name Twitter Money Button Profile
// @namespace Bitmonkey Scripts
// @match https://twitter.com/*
// @require https://www.moneybutton.com/moneybutton.js
// @require https://unpkg.com/datapay
// @require https://unpkg.com/databutton
// @grant none
// ==/UserScript==

if (document.querySelector('.ProfileHeaderCard-bio')){
var mbprofiletwitter = document.createElement('div');
mbprofiletwitter.style.cssText = 'width:100%; font-size:.8em; margin-top:15px; min-height:50px;';
mbprofiletwitter.setAttribute("id", "bitmonkey-twitter-profile-moneybutton");
document.querySelector('.ProfileHeaderCard-bio').appendChild(mbprofiletwitter);
/*
  moneyButton.render(document.getElementById('bitmonkey-twitter-profile-moneybutton'), {
    label: "TIP",
    to: '1KhgEvRXA5BN22W7gNncdEcSR3TTx9FE4C',
    amount: '1',
    currency: "USD",
    onPayment: function(msg) {
      console.log(msg)
    }

});

*/
  var userNameHolder = document.querySelector('.ProfileHeaderCard-screennameLink');
  var userName = userNameHolder.getAttribute('href').slice(1); //.toString('hex');
  console.log("Username:"+ userName);
/*
  databutton.build({
  data: ["itipper", "twitter", userName],
  button: {
    $el: "#bitmonkey-twitter-profile-moneybutton",
    label: "Tip",
    to: ['1KhgEvRXA5BN22W7gNncdEcSR3TTx9FE4C'],
    amount: "0.1",
    currency: "USD",
    onPayment: function(msg) {
      console.log(msg)
    }
  }
});
*/
  databutton.build({
    data: ["itipper", "twitter", userName],
    button: {
      $el: "#bitmonkey-twitter-profile-moneybutton",
      onPayment: function(p) {
        console.log(p)
      },
      $pay: {
        to: [{
          address: '1KhgEvRXA5BN22W7gNncdEcSR3TTx9FE4C',
          value: 2000000
        }]
      }
    }
  });

}







var pageURLCheckTimer1 = setInterval (
    function () {
        if (    this.lastPathStr  !== location.pathname
            ||  this.lastQueryStr !== location.search
            ||  this.lastPathStr   === null
            ||  this.lastQueryStr  === null
        ) {
            this.lastPathStr  = location.pathname;
            this.lastQueryStr = location.search;

          if (document.location.href.indexOf('/status/') === -1){

            if (document.getElementById('bitmonkey-twitter-profile-moneybutton')){
              console.log('There is a moneybutton');
              return
            }else{
            gmMain1();
          }
          } else {
             console.log('It is a tweet');
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
if (document.querySelector('.ProfileHeaderCard-bio')){
var divMbTwitterProfile = document.createElement('div');
divMbTwitterProfile.style.cssText = 'width:300px; font-size:.8em; margin-top:15px; min-height:50px;';
divMbTwitterProfile.setAttribute("id", "bitmonkey-twitter-profile-moneybutton");
document.querySelector('.ProfileHeaderCard-bio').appendChild(divMbTwitterProfile);
/*
  moneyButton.render(document.getElementById('bitmonkey-twitter-profile-moneybutton'), {
    label: "tip",
    to: '1KhgEvRXA5BN22W7gNncdEcSR3TTx9FE4C',
    amount: '1',
    currency: "USD",
    onPayment: function(msg) {
      console.log(msg)
    }

})
*/

    var userNameHolder = document.querySelector('.ProfileHeaderCard-screennameLink');
  var userName = userNameHolder.getAttribute('href').slice(1); //.toString('hex');
  console.log("Username:"+ userName);

  databutton.build({
    data: ["itipper", "twitter", userName],
    button: {
      $el: "#bitmonkey-twitter-profile-moneybutton",
      onPayment: function(p) {
        console.log(p)
      },
      $pay: {
        to: [{
          address: '1KhgEvRXA5BN22W7gNncdEcSR3TTx9FE4C',
          value: 2000000
        }]
      }
    }
  });

}


 }
