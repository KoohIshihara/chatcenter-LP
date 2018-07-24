
riot.tag2('app', '<header></header> <div class="wrap-content"> <content></content> <modal-content></modal-content> </div>', 'app,[data-is="app"]{display:block;width:100%;height:100vh} app .wrap-content,[data-is="app"] .wrap-content{position:relative;display:block;width:100%;height:100%;overflow-x:hidden} app .wrap-content content,[data-is="app"] .wrap-content content{display:block;position:absolute;z-index:1;width:100%;height:100%;overflow:scroll;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;top:0;left:0;background:#fff;transition:all .4s;opacity:0} app .wrap-content .not-opacity,[data-is="app"] .wrap-content .not-opacity{opacity:1} app .wrap-content modal-content,[data-is="app"] .wrap-content modal-content{display:block;position:absolute;z-index:2;width:100%;height:100%;overflow:scroll;-webkit-overflow-scrolling:touch;overflow-scrolling:touch;top:0;background:#fff;transition:all .4s;opacity:0;left:100%} app .wrap-content .show,[data-is="app"] .wrap-content .show{opacity:1;left:0}', '', function(opts) {
    var self = this;

    this.contents = {
      test: {
        title: 'title',
        body: 'body',
        label: 'link label',
      },
    };
});

riot.tag2('item-article-card', '<a class="wrap-item" href="{opts.content.href}" target="brank"> <div class="wrap-img f fh"><img riot-src="{opts.content.src}"></div> <div class="wrap-texts py8 pl8"> <p class="title mb4">{opts.content.title}</p> <p class="date">{opts.content.date}</p> </div></a>', 'item-article-card,[data-is="item-article-card"]{display:block;width:48%;background:#ffffff} item-article-card .wrap-item,[data-is="item-article-card"] .wrap-item{width:100%} item-article-card .wrap-item .wrap-img,[data-is="item-article-card"] .wrap-item .wrap-img{overflow:hidden} item-article-card .wrap-item .wrap-texts .date,[data-is="item-article-card"] .wrap-item .wrap-texts .date{font-weight:lighter;color:#999999}@media only screen and (max-width : 600px){ item-article-card,[data-is="item-article-card"]{width:100%;margin-bottom:14px}}', '', function(opts) {
});

riot.tag2('item-authority-card', '<div class="wrap-item px18 py12"> <div class="wrap-name pb12 f fm"> <div class="wrap-img mr16 f fh"><img riot-src="{opts.content.src}"></div> <p>{opts.content.name}</p> </div> <div class="wrap-text pt12"> <p>{opts.content.text}</p> </div> </div>', 'item-authority-card,[data-is="item-authority-card"]{display:block;width:48%;background:#ffffff;border-radius:3px}@media only screen and (max-width : 600px){ item-authority-card,[data-is="item-authority-card"]{width:100%}} item-authority-card .wrap-item .wrap-name,[data-is="item-authority-card"] .wrap-item .wrap-name{border-bottom:solid .8px rgba(155,155,155,0.4)} item-authority-card .wrap-item .wrap-name .wrap-img,[data-is="item-authority-card"] .wrap-item .wrap-name .wrap-img{width:48px} item-authority-card .wrap-item .wrap-name .wrap-img img,[data-is="item-authority-card"] .wrap-item .wrap-name .wrap-img img{width:100%} item-authority-card .wrap-item .wrap-text p,[data-is="item-authority-card"] .wrap-item .wrap-text p{font-weight:lighter;line-height:1.4}', 'class="mb24"', function(opts) {
});

riot.tag2('item-button-cta', '<div class="wrap-item py24 f fc"><a class="px16 py12" href="{opts.content.href}">{opts.content.label}</a></div>', 'item-button-cta a,[data-is="item-button-cta"] a{display:inline-block;border-radius:34px;background:#EB5757;color:#ffffff;letter-spacing:1.2px;cursor:pointer}', 'if="{opts.content}"', function(opts) {
});

riot.tag2('item-h2', '<div class="wrap-item"> <h2 class="mb30">{opts.content}</h2> </div>', 'item-h2,[data-is="item-h2"]{width:100%} item-h2 .wrap-item h2,[data-is="item-h2"] .wrap-item h2{color:#2a2a2a;text-align:center;font-size:26px;font-weight:500}', '', function(opts) {
});

riot.tag2('item-how-card', '<div class="wrap-item"> <div class="wrap-img mb20 f fh"><img riot-src="{opts.content.src}"></div> <div class="wrap-texts"> <p class="title mb12">{opts.content.title}</p> <p class="position mb12">{opts.content.position}</p> <p class="sentence">{opts.content.text}</p> </div> </div>', 'item-how-card,[data-is="item-how-card"]{display:block;width:30%} item-how-card .wrap-item,[data-is="item-how-card"] .wrap-item{width:100%;height:100%} item-how-card .wrap-item .wrap-img img,[data-is="item-how-card"] .wrap-item .wrap-img img{width:40%;border-radius:50%} item-how-card .wrap-item .wrap-texts,[data-is="item-how-card"] .wrap-item .wrap-texts{width:90%;margin:0 auto} item-how-card .wrap-item .wrap-texts .title,[data-is="item-how-card"] .wrap-item .wrap-texts .title{text-align:center;font-size:14px;color:#2a2a2a} item-how-card .wrap-item .wrap-texts .position,[data-is="item-how-card"] .wrap-item .wrap-texts .position{text-align:center;font-size:14px;color:#999999;font-weight:lighter;line-height:1.4} item-how-card .wrap-item .wrap-texts .sentence,[data-is="item-how-card"] .wrap-item .wrap-texts .sentence{text-align:center;font-size:14px;color:#999999;font-weight:lighter;line-height:1.4;width:80%;margin:0 auto}@media only screen and (max-width : 600px){ item-how-card,[data-is="item-how-card"]{width:100%;margin-bottom:14px}}', '', function(opts) {
});

riot.tag2('item-menu-icon-sp', '<div class="wrap-icon f fh flex-wrap"> <div class="a bar"></div> <div class="b bar"></div> <div class="c bar"></div> </div>', 'item-menu-icon-sp,[data-is="item-menu-icon-sp"]{display:block;position:relative;width:48px;height:48px;z-index:301} item-menu-icon-sp .wrap-icon,[data-is="item-menu-icon-sp"] .wrap-icon{width:100%;height:100%} item-menu-icon-sp .wrap-icon .bar,[data-is="item-menu-icon-sp"] .wrap-icon .bar{display:block;width:80%;height:2px;border-radius:3px;background:#ffffff;transition-property:all;transition-duration:400ms;transition-delay:0s;transition-timing-function:ease} item-menu-icon-sp .wrap-icon .a,[data-is="item-menu-icon-sp"] .wrap-icon .a{transform:translate(0, 6px) rotateZ(0deg)} item-menu-icon-sp .wrap-icon .b,[data-is="item-menu-icon-sp"] .wrap-icon .b{transform:translate(0, 0) rotateZ(0deg)} item-menu-icon-sp .wrap-icon .c,[data-is="item-menu-icon-sp"] .wrap-icon .c{transform:translate(0, -6px) rotateZ(0deg)} item-menu-icon-sp .wrap-icon .a-active,[data-is="item-menu-icon-sp"] .wrap-icon .a-active{transform:translate(0, 16px) rotateZ(45deg)} item-menu-icon-sp .wrap-icon .b-active,[data-is="item-menu-icon-sp"] .wrap-icon .b-active{transform:translate(-40px, 0) rotateZ(0deg);opacity:0} item-menu-icon-sp .wrap-icon .c-active,[data-is="item-menu-icon-sp"] .wrap-icon .c-active{transform:translate(0, -16px) rotateZ(-45deg)}', 'class="s-show"', function(opts) {
    this.on('mount', function(){
      $('.wrap-icon, .overlay-sp, atom-menu-li-sp').click(function() {
        $('.a').toggleClass('a-active');
        $('.b').toggleClass('b-active');
        $('.c').toggleClass('c-active');

        $('menu-sp').toggleClass('active');
        $('.overlay-sp').fadeToggle(400);

      });
    });
});

riot.tag2('item-use-case-list', '<div class="wrap-item px8 py12"> <div class="wrap-img pr12"><img src="./img/icon/check.svg"></div> <div class="wrap-text"> <p class="title mb4">{opts.content.title}</p> <p class="text">{opts.content.text}</p> </div> </div>', 'item-use-case-list,[data-is="item-use-case-list"]{display:inline-block} item-use-case-list .wrap-item,[data-is="item-use-case-list"] .wrap-item{display:inline-flex} item-use-case-list .wrap-item .wrap-img img,[data-is="item-use-case-list"] .wrap-item .wrap-img img{width:24px} item-use-case-list .wrap-item .wrap-text,[data-is="item-use-case-list"] .wrap-item .wrap-text{width:100%} item-use-case-list .wrap-item .wrap-text .title,[data-is="item-use-case-list"] .wrap-item .wrap-text .title{font-weight:bold} item-use-case-list .wrap-item .wrap-text .text,[data-is="item-use-case-list"] .wrap-item .wrap-text .text{font-weight:lighter}', '', function(opts) {
});

riot.tag2('item-what-card', '<div class="wrap-item py30"> <div class="wrap-img mb20 f fh"><img riot-src="{opts.content.src}"></div> <div class="wrap-texts"> <p class="title mb12">{opts.content.title}</p> <p class="sentence">{opts.content.text}</p> </div> </div>', 'item-what-card,[data-is="item-what-card"]{display:block;width:30%;background:#ffffff} item-what-card .wrap-item,[data-is="item-what-card"] .wrap-item{width:100%;height:100%} item-what-card .wrap-item .wrap-img img,[data-is="item-what-card"] .wrap-item .wrap-img img{width:60%} item-what-card .wrap-item .wrap-texts,[data-is="item-what-card"] .wrap-item .wrap-texts{width:90%;margin:0 auto} item-what-card .wrap-item .wrap-texts .title,[data-is="item-what-card"] .wrap-item .wrap-texts .title{text-align:center;font-size:14px;color:#2a2a2a} item-what-card .wrap-item .wrap-texts .sentence,[data-is="item-what-card"] .wrap-item .wrap-texts .sentence{text-align:center;font-size:14px;color:#999999;font-weight:lighter;line-height:1.4}@media only screen and (max-width : 600px){ item-what-card,[data-is="item-what-card"]{width:100%;margin-bottom:14px}}', '', function(opts) {
});

riot.tag2('item-why-points-point', '<div class="wrap-item f flex-around"> <div class="wrap-img mr12 f fh"><img riot-src="{opts.content.src}"></div> <div class="wrap-text f fh"> <div> <p class="title mb12">{opts.content.title}</p> <p class="text">{opts.content.text}</p> </div> </div> </div>', 'item-why-points-point,[data-is="item-why-points-point"]{display:block;width:100%;border-radius:3px;background:#ffffff} item-why-points-point .wrap-item .wrap-img,[data-is="item-why-points-point"] .wrap-item .wrap-img{width:300px} item-why-points-point .wrap-item .wrap-img img,[data-is="item-why-points-point"] .wrap-item .wrap-img img{width:80%} item-why-points-point .wrap-item .wrap-text .title,[data-is="item-why-points-point"] .wrap-item .wrap-text .title{font-weight:bold} item-why-points-point .wrap-item .wrap-text .text,[data-is="item-why-points-point"] .wrap-item .wrap-text .text{line-height:1.4}', 'class="px20 py32 mb12"', function(opts) {
});

riot.tag2('module-article', '<div class="wrap-module"> <item-h2 if="{opts.content.title}" content="{opts.content.title}"></item-h2> <div class="wrap-card f flex-between flex-wrap"> <item-article-card each="{item in opts.content.cards}" content="{item}"></item-article-card> </div> </div>', 'module-article,[data-is="module-article"]{display:block;width:100%;background:#f2f2f2} module-article .wrap-module,[data-is="module-article"] .wrap-module{width:90%;max-width:1048px;margin:0 auto} module-article .wrap-module .wrap-card,[data-is="module-article"] .wrap-module .wrap-card{width:80%;margin:0 auto}', 'class="py40"', function(opts) {
    this.on('mount', function(){
      var cardNum = $('item-article-card').length;
      if(cardNum > 2){
        for(var i=0; i<cardNum; i++){
          $('item-article-card')[i].classList.add('mb32');
        }
      }
    });
});

riot.tag2('module-authority', '<div class="wrap-module"> <item-h2 if="{opts.content.title}" content="{opts.content.title}"></item-h2> <div class="wrap-card f flex-between flex-wrap"> <item-authority-card each="{item in opts.content.cards}" content="{item}"></item-authority-card> </div> </div>', 'module-authority,[data-is="module-authority"]{display:block;width:100%;background:#e0e0e0} module-authority .wrap-module,[data-is="module-authority"] .wrap-module{width:90%;max-width:1048px;margin:0 auto} module-authority .wrap-module .wrap-card,[data-is="module-authority"] .wrap-module .wrap-card{width:80%;margin:0 auto}@media only screen and (max-width : 600px){ module-authority .wrap-module .wrap-card,[data-is="module-authority"] .wrap-module .wrap-card{width:90%}}', 'class="py40"', function(opts) {
});

riot.tag2('module-hiro', '<div class="wrap-module"></div>', 'module-hiro,[data-is="module-hiro"]{display:block;width:100%;height:80vh;background:#dedede}', '', function(opts) {
});

riot.tag2('module-how', '<div class="wrap-module f flex-between flex-wrap"> <item-h2 if="{opts.content.title}" content="{opts.content.title}"></item-h2> <div class="wrap-card f flex-between flex-wrap"> <item-how-card each="{item in opts.content.cards}" content="{item}"></item-how-card> </div> </div>', 'module-how,[data-is="module-how"]{display:block;width:100%;background:#f2f2f2} module-how .wrap-module,[data-is="module-how"] .wrap-module{margin:0 auto;width:90%;max-width:1048px}', 'class="py40"', function(opts) {
    this.on('mount', function(){
      var cardNum = $('item-how-card').length;
      if(cardNum > 3){
        for(var i=0; i<cardNum; i++){
          $('item-how-card')[i].classList.add('mb40');
        }
      }
    });
});

riot.tag2('module-price-table', '<div class="wrap-module"> <item-h2 if="{opts.content.title}" content="{opts.content.title}"></item-h2> <div class="wrap-table"> <table> <thead> <th each="{th in opts.content.table.thead}">{th}</th> </thead> <tbody> <tr each="{trs in opts.content.table.trs}"> <td each="{td in trs}"> <p if="{td.text}">{td.text}</p> <div class="img f fh"><img if="{td.check}" src="./img/icon/check.svg"></div> </td> </tr> </tbody> </table> </div> </div>', 'module-price-table,[data-is="module-price-table"]{display:block;width:100%;background:#e0e0e0} module-price-table .wrap-module,[data-is="module-price-table"] .wrap-module{width:90%;max-width:1048px;margin:0 auto} module-price-table .wrap-module .wrap-table,[data-is="module-price-table"] .wrap-module .wrap-table{margin:0 auto} module-price-table .wrap-module .wrap-table table,[data-is="module-price-table"] .wrap-module .wrap-table table{width:100%;background:#ffffff;border-radius:3px;overflow:hidden} module-price-table .wrap-module .wrap-table table tr td,[data-is="module-price-table"] .wrap-module .wrap-table table tr td{text-align:center;font-weight:lighter} module-price-table .wrap-module .wrap-table table,[data-is="module-price-table"] .wrap-module .wrap-table table,module-price-table .wrap-module .wrap-table th,[data-is="module-price-table"] .wrap-module .wrap-table th,module-price-table .wrap-module .wrap-table td,[data-is="module-price-table"] .wrap-module .wrap-table td{border-collapse:collapse;border:.5px solid rgba(0,0,0,0.1);line-height:1.5;padding:6px}', 'class="py40"', function(opts) {
    this.on('mount', function(){

    });
});

riot.tag2('module-use-case', '<div class="wrap-module"> <item-h2 if="{opts.content.title}" content="{opts.content.title}"></item-h2> <div class="f fc"> <div class="wrap-lists f flex-column"> <item-use-case-list each="{item in opts.content.items}" content="{item}"></item-use-case-list> </div> </div> </div>', 'module-use-case,[data-is="module-use-case"]{display:block;width:100%;background:#f2f2f2} module-use-case .wrap-module,[data-is="module-use-case"] .wrap-module{width:90%;max-width:1048px;margin:0 auto}', 'class="py40"', function(opts) {
});

riot.tag2('module-what', '<div class="wrap-module py40"> <item-h2 if="{opts.content.title}" content="{opts.content.title}"></item-h2> <div class="wrap-card f flex-between flex-wrap"> <item-what-card each="{item in opts.content.cards}" content="{item}"></item-what-card> </div> <div class="wrap-button f fc"> <item-button-cta content="{opts.content.cta}"></item-button-cta> </div> </div>', 'module-what,[data-is="module-what"]{display:block;width:100%;background:#e0e0e0} module-what .wrap-module,[data-is="module-what"] .wrap-module{width:90%;max-width:1048px;margin:0 auto}', '', function(opts) {
    this.on('mount', function(){
      var cardNum = $('item-what-card').length;
      if(cardNum > 3){
        for(var i=0; i<cardNum; i++){
          $('item-what-card')[i].classList.add('mb40');
        }
      }
    });
});

riot.tag2('module-why-points', '<div class="wrap-module"> <p class="lead mb24">{content.lead_text}</p> <item-why-points-point each="{item in content.contents}" content="{item}"></item-why-points-point> <div class="wrap-button f fc"> <item-button-cta content="{content.cta}"></item-button-cta> </div> </div>', 'module-why-points,[data-is="module-why-points"]{display:block;width:100%;background:#f2f2f2} module-why-points .wrap-module,[data-is="module-why-points"] .wrap-module{width:90%;max-width:1048px;margin:0 auto} module-why-points .wrap-module .lead,[data-is="module-why-points"] .wrap-module .lead{text-align:center}', 'class="py40"', function(opts) {
this.content = Contents.why_points;
});

riot.tag2('module-why', '<div class="wrap-module py40"> <item-h2 if="{opts.content.title}" content="{opts.content.title}"></item-h2> <div class="wrap-img mb24 f fh"><img riot-src="{opts.content.src}"></div> <div class="wrap-text f fc"> <div> <p class="mb8" each="{item in opts.content.explanation}">{item}</p> </div> </div> </div>', 'module-why,[data-is="module-why"]{display:block;width:100%;background:#f2f2f2} module-why .wrap-module,[data-is="module-why"] .wrap-module{width:90%;max-width:1048px;margin:0 auto} module-why .wrap-module .wrap-img img,[data-is="module-why"] .wrap-module .wrap-img img{object-fit:cover;width:100%;max-width:640px} module-why .wrap-module .wrap-text div,[data-is="module-why"] .wrap-module .wrap-text div{display:inline-block;max-width:640px} module-why .wrap-module .wrap-text div p,[data-is="module-why"] .wrap-module .wrap-text div p{color:#2a2a2a;font-weight:lighter;line-height:1.4}', '', function(opts) {
});

riot.tag2('page-about', '<div class="warp-page"> <h2>About</h2> </div>', 'page-about .warp-page,[data-is="page-about"] .warp-page{display:block;width:100%;height:100%;background:#FF00FF}', '', function(opts) {
    this.on('mount', function(){

    });
});

riot.tag2('page-chat', '<div class="wrap-page pt48"> <iframe riot-src="{src}"></iframe> </div>', 'page-chat .wrap-page,[data-is="page-chat"] .wrap-page{display:block;width:100%;height:100%} page-chat .wrap-page iframe,[data-is="page-chat"] .wrap-page iframe{width:100%;height:100%;border:none}', '', function(opts) {
    var self = this;

    this.on('mount', function(){
      $('modal-content').addClass('show');
      $('modal-content').scrollTop(0);

      riot.enableFadeIn = false;

      $(document).on("custom:close", function() {
        $('modal-content').removeClass('show');
        self.unmount(true);
      });
    });

    this.src = ChatcenterHrefForContact;
});

riot.tag2('page-test', '<div class="wrap-page"></div> <h2>test</h2>', 'page-test .wrap-page,[data-is="page-test"] .wrap-page{display:block;width:100%;height:100%;background:#00FFFF}', '', function(opts) {
    var self = this;

    this.on('mount', function(){
      $('modal-content').addClass('show');
      $('modal-content').scrollTop(0);

      riot.enableFadeIn = false;

      $(document).on("custom:close", function() {
        $('modal-content').removeClass('show');
        self.unmount(true);
      });
    });
});

riot.tag2('page-top', '<div class="wrap-page"> <module-hiro content="{contents.hiro}"></module-hiro> <module-why-points content="{contents.why_points}"></module-why-points> <module-what content="{contents.what}"></module-what> <module-use-case content="{contents.use_case}"></module-use-case> <module-how content="{contents.how}"></module-how> <module-authority content="{contents.authority}"></module-authority> <module-article content="{contents.article}"></module-article> <module-price-table content="{contents.price}"></module-price-table> <footer></footer> </div> <float-action-button></float-action-button>', 'page-top .wrap-page,[data-is="page-top"] .wrap-page{display:block;width:100%;height:100%;background:#FFFFFF}', '', function(opts) {
    var self = this;

    this.contents = Contents;
    console.log(this.contents)
    this.on('mount', function(){

    });
});

riot.tag2('temp', '', '', '', function(opts) {
    this.on('mount', function(){

    });
});

riot.tag2('float-action-button', '<a class="f fh" href="#chat"><img src="./img/icon/chat.svg"></a>', 'float-action-button,[data-is="float-action-button"]{position:fixed;z-index:10;display:block;width:48px;height:48px;right:20px;bottom:20px;border-radius:50%;background:#4a4a4a;filter:drop-shadow(1px 1px 1px rgba(100,100,100,0.6))} float-action-button a,[data-is="float-action-button"] a{width:100%;height:100%} float-action-button a img,[data-is="float-action-button"] a img{width:24px;height:24px}', '', function(opts) {
});

riot.tag2('footer', '<div class="wrap-menu py40 f flex-around flex-wrap"> <div class="mr12 mb12 f fc" each="{item in menu}"><a href="{item.href}" target="brank">{item.label}</a></div> </div> <div class="wrap-copy f fh"> <p class="copy">© 2011-2018 AppSocially Inc.</p> </div>', 'footer,[data-is="footer"]{display:block;width:100%;background:#4a4a4a} footer .wrap-menu,[data-is="footer"] .wrap-menu{width:90%;margin:0 auto;max-width:1048px} footer .wrap-menu div a,[data-is="footer"] .wrap-menu div a{display:inline-block;color:#ffffff;font-weight:lighter} footer .wrap-copy,[data-is="footer"] .wrap-copy{width:100%;height:80px} footer .wrap-copy .copy,[data-is="footer"] .wrap-copy .copy{text-align:center;color:#ffffff;font-weight:lighter;font-size:14px;letter-spacing:1.2px}', '', function(opts) {
    this.menu = FooterMenuContent;

    this.copy = CopyRight;
});

riot.tag2('header', '<div class="wrap-header f flex-between"><a class="wrap-logo f fm" href="./"> <p>TITLE LOGO</p> </a> <div class="wrap-menu-pc s-hide f flex-between fm"><a class="{item.func} item ml24" each="{item in contents}" href="{item.href}" target="{item.target}">{item.label}</a></div> <div class="wrap-icon-sp s-show"> <div class="overlay-sp"></div> <item-menu-icon-sp></item-menu-icon-sp> <menu-sp></menu-sp> </div> </div>', 'header,[data-is="header"]{position:fixed;z-index:100;display:block;width:100%;height:48px;top:0;background:#4a4a4a} header .wrap-header,[data-is="header"] .wrap-header{width:90%;height:100%;max-width:1048px;margin:0 auto} header .wrap-header .wrap-logo,[data-is="header"] .wrap-header .wrap-logo{cursor:pointer} header .wrap-header .wrap-logo p,[data-is="header"] .wrap-header .wrap-logo p{color:#ffffff;letter-spacing:1.4px;font-weight:normal} header .wrap-header .wrap-menu-pc .item,[data-is="header"] .wrap-header .wrap-menu-pc .item{letter-spacing:1.4px;color:#ffffff;font-weight:lighter;cursor:pointer} header .wrap-header .overlay-sp,[data-is="header"] .wrap-header .overlay-sp{display:none;position:fixed;width:100%;height:100%;top:0;left:0;background:rgba(0,0,0,0.4);cursor:pointer;z-index:90}', '', function(opts) {
    this.contents = MenuContent;

    this.logoSrc = MenuLogo;

    this.on('mount', function(){

      $('.to-top').click(function() {
        if(window.location.href.match('chat')!=null){
          $(document).trigger("custom:close");
          window.location.href='./'
        }else{
          $("content").animate({scrollTop:0}, 800, 'easeOutCubic');
        }
      });

      $('.to-contact').click(function() {
        window.location.href = '#/chat';
      });

    });
});

riot.tag2('menu-sp', '<div class="wrap-menu-sp"> <div class="menu mt50"><a class="{item.func} item mb16 px24" each="{item in contents}" href="{item.href}" target="{item.target}" onclick="{closeSpMenu}">{item.label}</a></div> </div>', 'menu-sp,[data-is="menu-sp"]{position:fixed;z-index:91;display:block;width:200px;height:100%;right:-200px;top:0;background:#4a4a4a;transition-property:all;transition-duration:400ms;transition-delay:0s;transition-timing-function:ease} menu-sp.active,[data-is="menu-sp"].active{right:0 !important} menu-sp .wrap-menu-sp .menu a,[data-is="menu-sp"] .wrap-menu-sp .menu a{display:block;color:#ffffff;letter-spacing:1.4px;font-weight:normal}', '', function(opts) {
    this.contents = MenuContent;

    this.closeSpMenu = function(e) {
      $('.a').toggleClass('a-active');
      $('.b').toggleClass('b-active');
      $('.c').toggleClass('c-active');

      $('menu-sp').toggleClass('active');
      $('.overlay-sp').fadeToggle(400);
    }

    this.on('mount', function(){

    });
});