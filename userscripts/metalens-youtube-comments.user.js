// ==UserScript==
// @name metalens-youtube-integration
// @namespace Bitmonkey Scripts
// @require https://gc.kis.v2.scr.kaspersky-labs.com/1C95596D-A013-404D-9471-9F1A4878594A/main.js
// @require https://www.moneybutton.com/moneybutton.js
// @require https://unpkg.com/datapay
// @require https://unpkg.com/databutton
// @require https://cdnjs.cloudflare.com/ajax/libs/qrious/4.0.2/qrious.min.js
// @require https://cdn.jsdelivr.net/npm/browser-image-compression@1.0.0/dist/browser-image-compression.js
// @require https://cdnjs.cloudflare.com/ajax/libs/showdown/1.9.0/showdown.min.js
// @require https://code.jquery.com/jquery-3.4.1.min.js
// @require https://gist.githubusercontent.com/BrockA/2625891/raw/9c97aa67ff9c5d56be34a55ad6c18a314e5eb548/waitForKeyElements.js
// @match https://www.youtube.com/watch*
// @grant none
// @insert-into content
// ==/UserScript==

//Metalens


// "


var h = window.location.href;

var mode = "raw"
var converter = new showdown.Converter();


var n = {
  "$nin": []
}
var sensitive = []

var comment = {
  "v": 3,
  "q": {
    "find": {
      "out.b0": {
        "op": 106
      },
      "out.s6": "1PuQa7K62MiKCtssSLKy1kh56WWU7MtUR5",
      "out.s7": "SET",
      "out.s13": window.location.href
    },
    "sort": {
      "blk.i": 1
    },
    "limit": 99
  }
}

var query = {
  "v": 3,
  "q": {
    "find": {
      "tx.h": n
    },
    "limit": 100
  },
  "r": {
    "f": "[ .[] | {h: .tx.h, in: .in, blk: .blk} ]"
  }
};


if (h) {
  query.q.find["tx.h"] = h
  delete query.q.skip
  delete query.q.limit
}
var b64 = btoa(JSON.stringify(query));
var url = "https://lol.bitdb.network/q/1BvPxwDoz6DR9qedZrKJjWio6Gm7UCPGXU/" + b64;
//var url = "https://chronos.bitdb.network/q/1P6o45vqLdo6X8HRCZk8XuDsniURmXqiXo/" + b64;
var header = {
  headers: { key: "1KJPjd3p8khnWZTkjhDYnywLB2yE1w5BmU" }
};
console.log("query = ", query)
var _x = '3330a08167a1b44fa3cb8262fce9db32b655db92bacd8a2dd0356c5ecde44a24'

var comment_url = "https://babel.bitdb.network/q/1DHDifPvtPgKFPZMRSxmVHhiPvFmxZwbfh/" + btoa(JSON.stringify(comment));
var comment_sock = "https://babel.bitdb.network/s/1DHDifPvtPgKFPZMRSxmVHhiPvFmxZwbfh/" + btoa(JSON.stringify(comment));


waitForKeyElements("#primary #pla-shelf", doSomeStuff);


function doSomeStuff(){

var htmlBlob ='<div id="frame">' +
'<div class="metalenscontainernew"><div class="items" style="font-size:15px; padding-top:40px;"></div></div>' +
      "<h2>Metalens Comments</h2>" +
        "<div class='metanetcomments' style='margin-left:100px;margin-top:40px;'></div>" +
        "</div>"

var metalensYoutube = document.createElement('div');
metalensYoutube.style.cssText = 'width:100%; font-size:.8em; margin-top:15px; min-height:50px;';
metalensYoutube.setAttribute("id", "metalensdiv");
metalensYoutube.innerHTML = htmlBlob;
  if(document.getElementById('info')){
document.getElementById('info').appendChild(metalensYoutube);
  }else{
    console.log('does not exist yet')
  }



/////////////////////////////////////////////////////////////////////////

   console.log("#1")
        fetch(comment_url, header).then(function(r) {
          return r.json()
        }).then(function(r) {
          console.log("Comments = ", r)
          let replies = r.c.concat(r.u).map(function(item) {
            let stub = "https://lol.bitdb.network/assets/1BvPxwDoz6DR9qedZrKJjWio6Gm7UCPGXU/raw/";
            console.log("c = ", item.out[0].s2);
            let content = item.out[0].s2.replace(/b:\/\//g, stub)
            console.log("content = ", content);
            return "<div class='line' style='margin-top:20px; border:solid; border-color:#ddd; border-width:1px; border-radius:5px; padding:15px;'><img id='img' style='float:left; margin-right:20px;' class='style-scope yt-img-shadow' alt='Mr Bitmonkey' height='40' width='40' src='https://yt3.ggpht.com/-ju1FRlgZVeI/AAAAAAAAAAI/AAAAAAAAAAA/S3cjU_Uqb1g/s76-c-k-no-mo-rj-c0xffffff/photo.jpg'><h2 style='padding-left:20px;'>" + item.out[0].s15 + "</h2>&nbsp;<div style='margin-left:130px'>" + converter.makeHtml(content) + "</div> <a class='ts' target='_blank' style='float:right;' href='https://graph.bitdb.network/#tx/" + item.tx.h + "'>" + (item.blk ? "block " + item.blk.i : "mempool") + "</a></div>"

          }).join("")
          document.querySelector(".metanetcomments").innerHTML = replies
        })

/*
        return '<ytd-comment-thread-renderer class="style-scope ytd-item-section-renderer"><ytd-comment-renderer id="comment" class="style-scope ytd-comment-thread-renderer" comment-style="unknown"><div id="body-inappropriate-reply" class="style-scope ytd-comment-renderer" hidden=""> <div id="author-thumbnail-placeholder" class="style-scope ytd-comment-renderer"></div><div id="inappropriate-alert" class="style-scope ytd-comment-renderer" hidden="">        <span class="style-scope ytd-comment-renderer"></span><span id="inappropriate-text-click" class="style-scope ytd-comment-renderer">VIEW</span></div></div><div id="body" class="style-scope ytd-comment-renderer"><div id="author-thumbnail" class="style-scope ytd-comment-renderer"><a class="yt-simple-endpoint style-scope ytd-comment-renderer" href="/channel/UCP2rNcWu1OROhziiT27TtlA"><yt-img-shadow id="author-thumbnail" height="40" width="40" class="style-scope ytd-comment-simplebox-renderer no-transition" style="background-color: transparent;" loaded=""><img id="img" class="style-scope yt-img-shadow" alt="Mr Bitmonkey" height="40" width="40" src="https://yt3.ggpht.com/-ju1FRlgZVeI/AAAAAAAAAAI/AAAAAAAAAAA/S3cjU_Uqb1g/s76-c-k-no-mo-rj-c0xffffff/photo.jpg"></yt-img-shadow>        </a></div><div id="main" class="style-scope ytd-comment-renderer"><div id="header" class="style-scope ytd-comment-renderer"><div id="header-badge" class="style-scope ytd-comment-renderer" hidden=""><div id="linked-comment-badge" class="style-scope ytd-comment-renderer" hidden=""></div>            <div id="pinned-comment-badge" class="style-scope ytd-comment-renderer" hidden=""></div></div><div id="header-author" class="style-scope ytd-comment-renderer"><a id="author-text" class="yt-simple-endpoint style-scope ytd-comment-renderer" href="/channel/UCP2rNcWu1OROhziiT27TtlA"><span class="style-scope ytd-comment-renderer">' +
    item.out[0].s15 +
    '</span></a><span id="author-comment-badge" class="style-scope ytd-comment-renderer" hidden=""></span><span id="sponsor-comment-badge" class="style-scope ytd-comment-renderer" hidden=""></span><yt-formatted-string class="published-time-text above-comment style-scope ytd-comment-renderer" has-link-only_=""><a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=3KngXMPhxzg&amp;lc=Ugy-pz1WoylYi5ZZJnN4AaABAg">2 days ago</a></yt-formatted-string><span id="author-reputation" class="style-scope ytd-comment-renderer"></span>            <span id="sponsors-only-badge" class="style-scope ytd-comment-renderer" hidden=""></span>          <span id="moderation-reason-divider" class="style-scope ytd-comment-renderer" hidden="">•</span><span id="moderation-reason-text" class="style-scope ytd-comment-renderer" hidden=""></span></div></div><ytd-expander id="expander" class="style-scope ytd-comment-renderer" collapsed="" style="--ytd-expander-collapsed-height:80px;"><div id="content" class="style-scope ytd-expander"><yt-formatted-string id="voted-option" slot="content" class="style-scope ytd-comment-renderer" hidden="" disable-upgrade=""></yt-formatted-string><yt-formatted-string id="content-text" slot="content" split-lines="" class="style-scope ytd-comment-renderer">' +
  converter.makeHtml(content) +
    '</yt-formatted-string></div><paper-button id="less" aria-expanded="true" noink="" class="style-scope ytd-expander" hidden="" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false"><!--css-build:shady--><span class="less-button style-scope ytd-comment-renderer" slot="less-button">Show less</span>    </paper-button>    <paper-button id="more" aria-expanded="false" noink="" class="style-scope ytd-expander" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false" hidden=""><!--css-build:shady-->      <span class="more-button style-scope ytd-comment-renderer" slot="more-button">Read more</span>    </paper-button>  </ytd-expander>                <yt-formatted-string class="published-time-text below-comment style-scope ytd-comment-renderer" hidden="" has-link-only_=""><a class="yt-simple-endpoint style-scope yt-formatted-string" spellcheck="false" href="/watch?v=3KngXMPhxzg&amp;lc=Ugy-pz1WoylYi5ZZJnN4AaABAg">2 days ago</a></yt-formatted-string>        <ytd-comment-action-buttons-renderer id="action-buttons" poll-status="null" class="style-scope ytd-comment-renderer" action-buttons-style="desktop-toolbar">        <div id="toolbar" class="style-scope ytd-comment-action-buttons-renderer">      <div id="reply-button" class="style-scope ytd-comment-action-buttons-renderer">      </div>' +
      '<span id="vote-count-left" class="style-scope ytd-comment-action-buttons-renderer" hidden="" aria-label="2.1K likes"> 2.1K </span><ytd-toggle-button-renderer id="like-button" class="style-scope ytd-comment-action-buttons-renderer style-text size-default" button-renderer="" new-subscribe-color="" is-icon-button="" has-no-text=""><a class="yt-simple-endpoint style-scope ytd-toggle-button-renderer" tabindex="-1"><yt-icon-button id="button" class="style-scope ytd-toggle-button-renderer style-text size-default" aria-pressed="false"><button id="button" class="style-scope yt-icon-button" aria-label="like this comment along with 2,190 other people"><yt-icon class="style-scope ytd-toggle-button-renderer"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon">        <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" class="style-scope yt-icon"></path></g></svg></yt-icon></button></yt-icon-button></a></ytd-toggle-button-renderer> ' +
  '<span id="vote-count-middle" class="style-scope ytd-comment-action-buttons-renderer" aria-label="2.1K likes"> 2.1K' +
  '</span><ytd-toggle-button-renderer id="dislike-button" class="style-scope ytd-comment-action-buttons-renderer style-text size-default" button-renderer="" new-subscribe-color="" is-icon-button="" has-no-text=""><a class="yt-simple-endpoint style-scope ytd-toggle-button-renderer" tabindex="-1"><yt-icon-button id="button" class="style-scope ytd-toggle-button-renderer style-text size-default" aria-pressed="false"><button id="button" class="style-scope yt-icon-button" aria-label="Dislike this comment"><yt-icon class="style-scope ytd-toggle-button-renderer"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon">       <path d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z" class="style-scope yt-icon"></path>     </g></svg>       </yt-icon></button></yt-icon-button><paper-tooltip class="style-scope ytd-toggle-button-renderer" role="tooltip" tabindex="-1" style="left: 119.129px; right: auto; bottom: 3932.86px; top: auto;"><!--css-build:shady-->    <div id="tooltip" class="style-scope paper-tooltip hidden">      Dislike    </div></paper-tooltip></a></ytd-toggle-button-renderer>      <div id="creator-heart" class="style-scope ytd-comment-action-buttons-renderer"></div>      <div id="reply-button-end" class="style-scope ytd-comment-action-buttons-renderer">      <ytd-button-renderer class="style-scope ytd-comment-action-buttons-renderer style-text size-default" button-renderer="" new-subscribe-color="" is-paper-button=""><a class="yt-simple-endpoint style-scope ytd-button-renderer" tabindex="-1"><paper-button id="button" class="style-scope ytd-button-renderer style-text size-default" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false" aria-label="Reply"><!--css-build:shady--><yt-formatted-string id="text" class="style-scope ytd-button-renderer style-text size-default">Reply</yt-formatted-string></paper-button></a></ytd-button-renderer></div>    </div>    <div id="reply-dialog" class="style-scope ytd-comment-action-buttons-renderer"></div>  </ytd-comment-action-buttons-renderer>        <div id="moderation-buttons" class="style-scope ytd-comment-renderer" hidden=""></div>      </div>      <div id="action-menu" class="style-scope ytd-comment-renderer"><ytd-menu-renderer class="style-scope ytd-comment-renderer">        <div id="top-level-buttons" class="style-scope ytd-menu-renderer"></div>    <yt-icon-button id="button" class="dropdown-trigger style-scope ytd-menu-renderer"><button id="button" class="style-scope yt-icon-button" aria-label="Action menu">      <yt-icon class="style-scope ytd-menu-renderer"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon">        <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z" class="style-scope yt-icon"></path>      </g></svg>          </yt-icon>    </button></yt-icon-button>  </ytd-menu-renderer></div>    </div>    <div id="edit-dialog" class="style-scope ytd-comment-renderer" hidden=""></div>  </ytd-comment-renderer>    <div id="replies" class="style-scope ytd-comment-thread-renderer"><ytd-comment-replies-renderer class="style-scope ytd-comment-thread-renderer">        <ytd-expander id="expander" always-collapsible="" collapsed-height="0" reversed="" class="style-scope ytd-comment-replies-renderer" collapsed="" style="--ytd-expander-collapsed-height:0px;">  <paper-button id="more" aria-expanded="false" noink="" class="style-scope ytd-expander" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false"><!--css-build:shady-->      <div class="more-button style-scope ytd-comment-replies-renderer" slot="more-button">        <span id="more-text" class="style-scope ytd-comment-replies-renderer">          View 83 replies        </span>        <yt-icon icon="yt-icons:expand-more" class="style-scope ytd-comment-replies-renderer"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon">        <path d="M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z" class="style-scope yt-icon"></path>      </g></svg>          </yt-icon>' +
   '</div></paper-button><paper-button id="less" aria-expanded="true" noink="" class="style-scope ytd-expander" hidden="" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false"><!--css-build:shady--> <div class="less-button style-scope ytd-comment-replies-renderer" slot="less-button">       <span id="less-text" class="style-scope ytd-comment-replies-renderer">          Hide replies        </span>        <yt-icon icon="yt-icons:expand-less" class="style-scope ytd-comment-replies-renderer"><svg viewBox="0 0 24 24" preserveAspectRatio="xMidYMid meet" focusable="false" class="style-scope yt-icon" style="pointer-events: none; display: block; width: 100%; height: 100%;"><g class="style-scope yt-icon">        <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z" class="style-scope yt-icon"></path>      </g></svg>          </yt-icon>      </div>    </paper-button>        <div id="content" class="style-scope ytd-expander">            <div id="expander-contents" slot="content" class="style-scope ytd-comment-replies-renderer">        <yt-sort-filter-sub-menu-renderer id="sort-menu" class="style-scope ytd-comment-replies-renderer" hidden="" disable-upgrade="">        <paper-tooltip class="style-scope yt-sort-filter-sub-menu-renderer" role="tooltip" tabindex="-1"><!--css-build:shady-->   <div id="tooltip" class="hidden style-scope paper-tooltip">           </div></paper-tooltip>    <yt-dropdown-menu class="style-scope yt-sort-filter-sub-menu-renderer">        <paper-menu-button dynamic-align="" class="style-scope yt-dropdown-menu" role="group" aria-haspopup="true" horizontal-align="left" vertical-align="top" aria-disabled="false"><!--css-build:shady-->    <div id="trigger" class="style-scope paper-menu-button">      <paper-button id="label" class="dropdown-trigger style-scope yt-dropdown-menu" slot="dropdown-trigger" aria-expanded="false" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false"><!--css-build:shady-->        <dom-if class="style-scope yt-dropdown-menu" style="display: none;"><template is="dom-if"></template></dom-if>        <dom-if class="style-scope yt-dropdown-menu" style="display: none;"><template is="dom-if"></template></dom-if>      </paper-button>    </div>    <iron-dropdown id="dropdown" class="style-scope paper-menu-button" horizontal-align="left" vertical-align="top" aria-disabled="false" aria-hidden="true" style="outline: none; display: none;"><!--css-build:shady-->    <div id="contentWrapper" class="style-scope iron-dropdown">      <div slot="dropdown-content" class="dropdown-content style-scope paper-menu-button">        <paper-listbox id="menu" class="dropdown-content style-scope yt-dropdown-menu" slot="dropdown-content" role="listbox" tabindex="0"><!--css-build:shady-->            <dom-repeat class="style-scope yt-dropdown-menu" style="display: none;"><template is="dom-repeat"></template></dom-repeat>      </paper-listbox>      </div>    </div></iron-dropdown></paper-menu-button>  </yt-dropdown-menu>  </yt-sort-filter-sub-menu-renderer>        <div id="loaded-replies" class="style-scope ytd-comment-replies-renderer"></div>      </div><div id="continuation" slot="content" class="style-scope ytd-comment-replies-renderer"><yt-next-continuation class="style-scope ytd-comment-replies-renderer">            <dom-if class="style-scope yt-next-continuation" style="display: none;"><template is="dom-if"></template></dom-if>          <paper-button noink="" class="style-scope yt-next-continuation" role="button" tabindex="0" animated="" elevation="0" aria-disabled="false"><!--css-build:shady-->        <yt-formatted-string class="style-scope yt-next-continuation">Show more replies</yt-formatted-string>      </paper-button>    <dom-if class="style-scope yt-next-continuation" style="display: none;"><template is="dom-if"></template></dom-if>  </yt-next-continuation></div>    </div>        </ytd-expander>    <div id="teaser-replies" class="style-scope ytd-comment-replies-renderer"></div>  </ytd-comment-replies-renderer></div>  </ytd-comment-thread-renderer>';

*/

  var commentsocket = new EventSource(comment_sock)
  commentsocket.onmessage = function(ee) {
    var m = JSON.parse(ee.data)
    console.log("commentsocket = ", m)
    if (m.type === 'u') {
      let item = m.data[0];
      let reply = document.createElement("div")
      reply.className = 'highlighted line'
      reply.setAttribute('target', '_blank')
      let stub = "https://lol.bitdb.network/assets/1BvPxwDoz6DR9qedZrKJjWio6Gm7UCPGXU/raw/";
      let content = item.out[0].s2.replace(/b:\/\//g, stub)
      reply.innerHTML = "<div class='line' style='margin-top:20px; border:solid; border-color:#ddd; border-width:1px; border-radius:5px; padding:15px;'><img id='img' style='float:left; margin-right:20px;' class='style-scope yt-img-shadow' alt='Mr Bitmonkey' height='40' width='40' src='https://yt3.ggpht.com/-ju1FRlgZVeI/AAAAAAAAAAI/AAAAAAAAAAA/S3cjU_Uqb1g/s76-c-k-no-mo-rj-c0xffffff/photo.jpg'><h2 style='padding-left:20px;'>" + item.out[0].s15 + "</h2>&nbsp;<div style='margin-left:130px'>" + converter.makeHtml(content) + "</div> <a class='ts' target='_blank' style='float:right;' href='https://graph.bitdb.network/#tx/" + item.tx.h + "'>" + (item.blk ? "block " + item.blk.i : "mempool") + "</a></div>"
      document.querySelector(".metanetcomments").appendChild(reply)
      reply.scrollIntoView(false);
      document.querySelector(".metanetcomments").scrollTop = document.querySelector(".metanetcomments").scrollHeight;
    }
  }



}

waitForKeyElements(".metanetcomments", makeMoneybutton);


function makeMoneybutton(){


var divMbYoutubeMetanet = document.createElement('div');
divMbYoutubeMetanet.style.cssText = 'width:300px; font-size:.8em; margin-top:15px; min-height:50px;';
divMbYoutubeMetanet.setAttribute("id", "bitmonkey-youtube-metanet-moneybutton");
document.querySelector('.metanetcomments').appendChild(divMbYoutubeMetanet);

/*
  var userNameHolder = document.querySelector('.ProfileHeaderCard-screennameLink');
  var userName = userNameHolder.getAttribute('href').slice(1); //.toString('hex');
  console.log("Username:"+ userName);
*/
  var newUserComment = "This is a wonderful video";

  databutton.build({
    data: ["19HxigV4QyBv3tHpQVcUEQyq1pzZVdoAut", newUserComment, "text/markdown", "UTF-8", "|", "1PuQa7K62MiKCtssSLKy1kh56WWU7MtUR5SET", "app", "metalens","type", "comment", "url", h ,"user","Bitmonkey" ],
    button: {
      $el: "#bitmonkey-youtube-metanet-moneybutton",
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
