// ==UserScript==
// @name Metalens Embed Twitter
// @namespace Bitmonkey Scripts
// @match https://twitter.com/*
// @inject-into page
// @grant GM_log
// ==/UserScript==


var pageURLCheckTimer = setInterval (
    function () {
        if (    this.lastPathStr1  !== location.pathname
            ||  this.lastQueryStr1 !== location.search
            ||  this.lastPathStr1   === null
            ||  this.lastQueryStr1  === null
        ) {
            this.lastPathStr1  = location.pathname;
            this.lastQueryStr1 = location.search;
           if (document.location.href.indexOf('/status/') > 0){

            gmMain ();
          }
          else {

                }

        }
    }
    , 222
);



gmMain ()

function gmMain () {
  console.log(" gmMain: I got here babe");

  const metalens = (_ => {
  const baseUrl = 'https://metalens.allaboard.cash';

  const meta = document.querySelector('meta[name="bitcoin-tx"]'),
        txid = meta ? meta.getAttribute('content') : null;

  const canonical = document.querySelector('link[rel="canonical"]'),
        url = canonical ? canonical.getAttribute('href') : window.location.href;

  return {
    defaults: {
      txid,
      url,

      autoSize: false,
      width: '100%',
      height: '260px',
    },

    embed(el, opts) {
      const $el = !!el.nodeName ? el : document.querySelector(el);
      if ( !$el ) return false;

      const $iframe = document.createElement('iframe'),
            options = Object.assign({}, this.defaults, $el.dataset, opts),
            href    = baseUrl + ( options.txid ?
              `/tx/${ options.txid }` :
              `/url/${ encodeURIComponent(options.url) }` );

      options.autoSize = JSON.parse(options.autoSize);

      $iframe.src     = href;
      $iframe.width   = options.width;
      $iframe.height  = options.height;
      $iframe.setAttribute('frameborder', 0);
      $iframe.setAttribute('scrolling', 'no');
      $iframe.setAttribute('style', "overflow: hidden; background-color: #f5f8fa;" );

      const embedded = {
        $el,
        $iframe,

        resize({ width, height }) {
          if (width)  this.$iframe.width  = `${ width }px`;
          if (height) this.$iframe.height = `${ height }px`;
        },

        handleMessage(e) {
          //console.log('🔍', e)

        }
      }

      $el.innerHTML = '';
      $el.appendChild($iframe);
      window.addEventListener('message', e => embedded.handleMessage(e), false);


    }
  }
})();


/////////////////////////////////////////////////



    if (document.getElementById('metalens')) {
var elementId = 'metalens';
var element = document.getElementById(elementId);
element.parentNode.removeChild(element);
  }

if(document.querySelector('.inline-reply-tweetbox')){
var elem = document.createElement('div');
elem.style.cssText = 'width: 100%; font-size: 0.8em; padding-top: -15px; margin-top:10px; border-radius:20px;';
elem.setAttribute("id", "metalens");
document.querySelector('.inline-reply-tweetbox').appendChild(elem);

// document.addEventListener('DOMContentLoaded', _ => {  document.getElementById('metalens') .forEach(el => metalens.embed(el)) });
}
metalens.embed('#metalens', {url: window.location.href, autoSize: false});

 }
