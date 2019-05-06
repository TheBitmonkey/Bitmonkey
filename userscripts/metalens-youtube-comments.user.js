// ==UserScript==
// @name metalens code break
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


// "19HxigV4QyBv3tHpQVcUEQyq1pzZVdoAuttesty tests again text/markdownUTF-8|"1PuQa7K62MiKCtssSLKy1kh56WWU7MtUR5SETappmetalenstypecommenturl2https://www.youtube.com/watch?v=3KngXMPhxzg&t=210susertestymctestface


  var h = window.location.href;
  console.log('This is h:'+ h)
var mode = "raw"
var converter = new showdown.Converter();
var n = {
  "$nin": [
    "2ac1586cbdfa760b3a06fba737c46d15366152b6e1bab82075626e95732d0b70",
    "244f5d97018f9c84f2828456c122d3d10092b42c58a6271a3b6b4cbfbf79db77",
    "355baf48b70bfd4d900391ee579b9ba1f5c5eb55b87dcb49cad88c0996f3bfc0",
    "3bb441fed7a2cf04f962ba4cf9ed2c258137bfcb841ea25e48b52b70662dacbb",
    "6b9bf18f86045495251ffbf46deca0ba11e7efb059a6dd41b7af2dd66ce6505f",
    "23ebe216c10a102080c3906155d46ee47e4204a60917c24c6ceb0cb5eca2b45b",
    "0864291665a5bec72395ead32c07cdea33de9f4333eba15aed0a41d1f5d7bdd0",
    "464548eb797d0404df1609f8d27e745dbfbbffbf779523d9d8d99653cf47771f",
  ]
}
var sensitive = [
  "9bcfbbf97a0fa96d2799689995cb51ecb48306d1363abe42f9874c4379ecf708",
  "55cf6cef4f6a18e31737bfe6a0b01ead58b87193ff900ef0e54dceeb7a789f0a",
  "9fe839a03d616b08cc0c7a097939e9356cdd4d376a8aac4a9407c21ab5784051",
  "1a0b6994582bfaa097f02df2a8b45a4033bfa855313a7daec9b1a3aabdc8ce61",
  "fe45bfa3091d6a099093c1c60e9a2b11e5b5cc92d3d14ffb25e7ccdfd3e48d8d",
  "002ec3e0285949fccd627c1beecb768af3b8ad98b6376e18c622c456381358ac",
  "baa50b0e20173156ae461f6053bca841ee4f952f4977a72330c20b1ee4d1f4d0",
  "9be7c74afc4c774db51255acc8afac95ee9798ed56ab212575872b17ec1c0a8b",
  "7e9c2cccbd7a2b8fc9877cd49a5dc3b608aa7bec7f4641bb14bc137a1c95ba7f",
  "e03639b1c8d50a61cc1f9c53219e4b4fd91e4b5b6d386a6823c4d65d6f78c40d",
  "407aba5daea5f9fa7d5592850c34413a420b39eb3960085719eb91025279bb61",
  "f9b4f7c742bd3b4128a547217df0042bb0a2c5eaa8cec673c6b21c5a75a7832b",
  "42ac3737c1d3da1aa7808e1daa391bcd4f5b365503ab7220cf81a325b0ef91b1",
  "15d503eaa26220906f8b00e0a090c2967979c2bea688669b0df4c1c70d5fad78",
  "66e04d12680f899c8c15037713b0b57f44539dc6f3866768730e97155e83f8b7",
  "f510d7043abc9a8fb71eaa0009baf9956a87577052f529c97121c51234e03577",
  "bac28b929e93d4c9a5325fea6d629ec675856c0c7aeba13860f3a09cd4d65099",
  "14903c7a80597bf6559e7f562c25ff31328be740b991af74bdacf270aaac96a5",
  "53b0d3b0afbf341f11f761a9d707d6312b68d3ecc791c1c7ab0e4b1516e11f9e",
  "11faedfd1f4cf65703daa0063434f456fe15f498a74709b6586ca51fda9268aa",
  "01d135d8d7f85483496a19806b5788a2e6308dfef06f9af9319d274c3eee4704",
  "2f2bf6af0db46413d083dd8b3d83177898ced587b6de33a82a9cdee15cfce32a",
  "d61ec05bb3a62d81b17b39c2afd20e8f4f1f18677544387545ec117b673c6163",
  "e01f21d5058c5d37abd627f07dd0fafd9ecdb8030398ff33c28051257a78b543",
  "70aee5affc387f34ff587d73d6ed68a17840adcb06652985ac378221ff972702",
  "98e74be60ee99fb8520c5f3d677cf1d213ec616c09f2ca46466ff0f27d53de19",
  "c85012947b4dbed0ac0a4bcee33664cf7ff1612af89e816ef368b0a638701f17",
  "55486fec1cba143e12dc713abed23ad82002526057019ec5386b505c07b9bdb6",
  "43269d755e31760802de016ba5ad152d40b0dc10d3450ca05d0c11d8a1dd198a",
  "7978c05dc37ee3e44a86a34f3b08a3984898d9745bb460888754751907759f55",
  "269aa56de967feee526a4d6c07342893a03d3d04799a6833e1554557394225e1",
  "82ccc9c4dccdf850c062653336f65a4bf5d8fce86968db21fc9f591173d71072",
  "c570cdf21167d2472123265848c8e536198170a1294c40f57044c75305d15ca6",
  "293730fe9654fe4b07fd9ea7772937ae475e2e6714ef00798fc21a142a8539a1",
  "c3eb947fc10f158cd8b1e77b42841caefebb10bd220fbb3894ddfb923126a40b",
  "dbb5bb46e1f783f3e9997391349acf91f3f274ec4608cae7edf785ac6ba2692d",
  "22b22ada7e063202878e980463d7f37338555563053bd1cc1f6a2da75871cc5b",
  "63ea2eb5787fa1e09db14db2b05302a1c0edc881152638724b1f6b58e332a404",
  "0d68e4a1a0515698b9d6c99558b682e281d203543c69f2d06052ca6232f0a74e",
  "bc9b114982388bc73875e18775bd84a9904c957dd52b1f5785778b594b5b6b48",
  "66cd9d961bb36f1b33587e0e5c59e8af2789aaf50c08049fd41709994835ff3e",
]

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
'<div class="metalenscontainernew"><div class="items" style="font-size:15px;"></div></div>' +
      "<h2>Metalens Comments</h2>" +
        "<div class='metanetcomments' style='margin-left:50px;'></div>" +
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

//var h = encodeURIComponent("url2https://www.youtube.com/watch?v=3KngXMPhxzg&t=210s");




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
            return "<div class='line' target='_blank'><h3>" + item.out[0].s15 + "</h3>&nbsp;<div style='margin-left:130px'>" + converter.makeHtml(content) + "</div> <a class='ts' target='_blank' style='float:right;' href='https://graph.bitdb.network/#tx/" + item.tx.h + "'>" + (item.blk ? "block " + item.blk.i : "mempool") + "</a></div>"
          }).join("")
          document.querySelector(".metanetcomments").innerHTML = replies
        })


  fetch(url, header).then(function(r) {
    return r.json()
  }).then(function(r) {

    console.log(r);
    //let res = r.t
    let modes = ['raw', 'sepia', 'pixel', 'blur']
    let html = res.map(function(re) {
      let like = '<a class="like"><img class="like" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJ7SURBVGhD7Zg9a1RREIYH1MJGBSGFipVgo4UkxI/dTYSIH9jYWIudf8HSRrQJktrCHyFoI+oiBISwaheIiIUgi/iBjRae6zM3Ywg6m3t2996cFc4DL3uzd87Me+Z+nD2RTCaTyWRiCXPSCR1ZRL3Qlo98/kJ9jrt83grzcsRCB6IxZez6mH6ZYz1XDy1y3LLQ+ghnZKboyDNUbCU1U7TlQTgtUzZ0gzArezB3v4xxxm4WMU/JM21Dx4Oi19EPr9AgYeCDTtpSlA3gu7de7CBpTcZcsxSjoea95FFqy1duuePohB67MREaeRIMnEU/vaSx0q6rvHOxUg+br2Y0DHzhJUwh7oSu2YqjaMlZL1FK0dA5s1cNwUtekpTiKtwze9UQ/MZLklI0tWf2qiG47yVJKfVk9qoheKy3TxPSdcHsVcME3ntJUooJvDN71RD80EuSUurJ7FXDFbjhJUkp9WT2qinOyV4GfPYSpRDd/6KezF4cTOCmlyyF1IvZiqeYl53M/KWXcDuFh5ViWnaZreGwzUeyNUFrx2yStoQOnCTRN69Ak6Lud61tNsajnIQ+SE6hRqR7ibq3lvwmP8qVWHUL1ihqrHHbHLOy9cKDvY/OPPYK1yFyPwkLst/KNUNxVXZQ7A6dCn8bGFWaCy3pm8/KNA8FL9OxT56hYVQ+W225Ymm3F+7VQxjoesZiRBOW2f0dtnRpsAXvNmYq/9/zR3bL3B15gWoCDJ1HlYuexoSWXLJhkwWv2gMYfOUZV3HudTglBy18MrFX7fN/zOuzwjkLm2zo8m4Mb6wXdP6Rfmen/w9sT7GGVof+LT8pcBUuMoEL9mcmk8lkMjUj8hve1EnqIT28ygAAAABJRU5ErkJggg=="></a>';
      let tips = ""




      if (h) {





        let aaa = re.in[0].e.a
        if (re.blk) {
          let qq = {
            "v": 3,
            "q": {
              "find": {
                "out.e.a": re.in[0].e.a,
                "blk.i": {
                  "$gt": re.blk.i
                }
              }
            }
          }
          console.log("#2")
          console.log("qq = ", qq)
          let b64 = btoa(JSON.stringify(qq));
          let u = "https://euler.bitdb.network/q/13Q2RdxNQRYaPotZxJ64yZbWuHrpVwut1Z/" + b64
          fetch(u, header).then(function(rrr) {
            return rrr.json()
          }).then(function(rrr) {
            let k = rrr.u.concat(rrr.c).map(function(item) {
              // find the output
              let receiver = item.out.filter(function(o) {
                return o.e.a === aaa
              })[0]
              return {tx: item.tx.h, sender: item.in[0].e.a, receiver: receiver.e.v}
              //return {tx: item.tx.h, sender: item.in[0].e.a, receiver: item.out[0].e.v}
            })
            console.log("rrr = ",k)
            let lines = k.map(function(item) {
              return "<div class='line' target='_blank' href='https://graph.bitdb.network/#tx/" + item.tx + "'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAJ7SURBVGhD7Zg9a1RREIYH1MJGBSGFipVgo4UkxI/dTYSIH9jYWIudf8HSRrQJktrCHyFoI+oiBISwaheIiIUgi/iBjRae6zM3Ywg6m3t2996cFc4DL3uzd87Me+Z+nD2RTCaTyWRiCXPSCR1ZRL3Qlo98/kJ9jrt83grzcsRCB6IxZez6mH6ZYz1XDy1y3LLQ+ghnZKboyDNUbCU1U7TlQTgtUzZ0gzArezB3v4xxxm4WMU/JM21Dx4Oi19EPr9AgYeCDTtpSlA3gu7de7CBpTcZcsxSjoea95FFqy1duuePohB67MREaeRIMnEU/vaSx0q6rvHOxUg+br2Y0DHzhJUwh7oSu2YqjaMlZL1FK0dA5s1cNwUtekpTiKtwze9UQ/MZLklI0tWf2qiG47yVJKfVk9qoheKy3TxPSdcHsVcME3ntJUooJvDN71RD80EuSUurJ7FXDFbjhJUkp9WT2qinOyV4GfPYSpRDd/6KezF4cTOCmlyyF1IvZiqeYl53M/KWXcDuFh5ViWnaZreGwzUeyNUFrx2yStoQOnCTRN69Ak6Lud61tNsajnIQ+SE6hRqR7ibq3lvwmP8qVWHUL1ihqrHHbHLOy9cKDvY/OPPYK1yFyPwkLst/KNUNxVXZQ7A6dCn8bGFWaCy3pm8/KNA8FL9OxT56hYVQ+W225Ymm3F+7VQxjoesZiRBOW2f0dtnRpsAXvNmYq/9/zR3bL3B15gWoCDJ1HlYuexoSWXLJhkwWv2gMYfOUZV3HudTglBy18MrFX7fN/zOuzwjkLm2zo8m4Mb6wXdP6Rfmen/w9sT7GGVof+LT8pcBUuMoEL9mcmk8lkMjUj8hve1EnqIT28ygAAAABJRU5ErkJggg=='> <a target='_blank' href='https://graph.bitdb.network/#tx/" + item.tx + "'>" + item.sender + " tipped <span class='amount' data-amount=" + item.receiver + ">" + item.receiver + " sats.</a></div>"
            }).join("")
            document.querySelector(".item[data-addr='"+re.in[0].e.a+"'] .tips").innerHTML = lines
            fetch("https://api.cryptonator.com/api/ticker/bsv-usd").then(function(_r) {
              return _r.json()
            }).then(function(_r) {
              console.log(_r)
              let rate = parseFloat(_r.ticker.price)
              document.querySelectorAll(".line .amount").forEach(function(item) {
                let v = Math.floor(parseInt(item.dataset.amount) * 0.00000001 * rate * 1000)/1000
                let converted = " (" + v + " USD)"
                item.innerHTML = item.innerHTML + converted
              })
            })
          })
        }
      }
      let btns = modes.map(function(m) {
        return "<a class='permalink' href='/m/" + m + '/' + re.h + "'>" + m + "</a>"
      }).join("")
      return "<div class='item' data-sensitive='" + (!h && sensitive.includes(re.h)) + "' data-addr='" + re.in[0].e.a + "'>" +
        "<a class='permalink' href='/m/raw/" + re.h + "'>" +
        "<img onerror='this.style.height=0' src='https://lol.bitdb.network/assets/1BvPxwDoz6DR9qedZrKJjWio6Gm7UCPGXU/" + mode + "/" + re.h + "'>" +
        "</a>" +
        "<div class='item_row'>" + like + "<div class='flex'></div>" + btns + "</div>" +
        "<div class='tips'></div>" +
        "<h6>comments</h6>" +
        "<div class='comment_explanation'>To comment, download <a href='https://chrome.google.com/webstore/detail/metalens-extension/odoinflckdonpofihlicjjknlgnhhaem'>Metalens Chrome extension</a></div>" +
        "<div class='comments'></div>" +
        "</div>"
    }).join("")
    let container = document.querySelector(".metalenscontainer .items")
    container.innerHTML = html
  })



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
      reply.innerHTML = "<a class='name' href='https://blockchair.com/bitcoin-sv/address/" + item.in[0].e.a + "' target='_blank'>" + item.out[0].s15 + "</a>&nbsp;" + converter.makeHtml(content) + "<a class='ts' target='_blank' href='https://graph.bitdb.network/#tx/" + item.tx.h + "'>" + (item.blk ? "block " + item.blk.i : "mempool") + "</a>"
      document.querySelector(".metanetcomments").appendChild(reply)
      reply.scrollIntoView(false);
      document.querySelector(".metanetcomments").scrollTop = document.querySelector(".metanetcomments").scrollHeight;
    }
  }



/*
  var buttonEl = document.querySelector("#button")
  var fileEl = document.querySelector("#file")
    fileEl.onchange = function(e) {
    var btn = document.querySelector("#button")

    var btn2 = document.createElement("div")
    btn2.id = 'button'
    btn.replaceWith(btn2);

    var type = e.target.files[0].type
    var name = e.target.files[0].name
    var file = e.target.files[0]
    buttonEl.innerHTML = "<img src='./loading.gif'>"
    var options = {
      maxSizeMB: 0.09,
      maxWidthOrHeight: 800,
      useWebWorker: true
    }
    try {
      imageCompression(file, options).then(function(compressedFile) {
        console.log('compressedFile instanceof Blob', compressedFile instanceof Blob); // true
        console.log(`compressedFile size ${compressedFile.size / 1024 / 1024} MB`); // smaller than maxSizeMB
        var reader = new FileReader();
        reader.addEventListener('load', function(event) {
          var file = event.target.result
          console.log("type = ", type)
          console.log("name = ", name)
          console.log("file = ", file)
          databutton.build({
            data: [
              "19HxigV4QyBv3tHpQVcUEQyq1pzZVdoAut",
              file,
              type,
              "binary",
              name
            ],
            button: {
              $el: "#button",
              onPayment: function(msg) {
                console.log(msg)
                var current_query = {
                  v: 3,
                  q: {
                    find: { "tx.h": msg.txid },
                    limit: 1
                  }
                };
                var b64 = btoa(JSON.stringify(current_query))
                //var current_url = 'https://babel.bitdb.network/s/1DHDifPvtPgKFPZMRSxmVHhiPvFmxZwbfh/'+b64
                var current_url = 'https://babel.bitdb.network/s/1DHDifPvtPgKFPZMRSxmVHhiPvFmxZwbfh/'+b64
                var bitsocket = new EventSource(current_url)
                bitsocket.onmessage = function(ee) {
                  var m = JSON.parse(ee.data)
                  console.log("postsocket = ", m)
                  if (m.type === 'u') {
                    let tx = m.data[0].tx.h
                    location.href = location.protocol + "//" + location.host + "/" + mode + "/" + tx
                  }
                }
              }
            }
          })
          setTimeout(function() {
            document.querySelector("#button img").remove()
            window.scrollY += 1
          }, 1000)
        });
        reader.readAsArrayBuffer(compressedFile)
      })
    } catch (error) {
      console.log(error);
    }
  }

 */

}
