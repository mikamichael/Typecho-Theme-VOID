console.log(" %c Theme VOID %c https://blog.imalan.cn/archives/247/ ","color: #fadfa3; background: #23b7e5; padding:5px;","background: #1c2b36; padding:5px;");var VOID_Content={countWords:function(){var n;$("#totalWordCount").length&&(n=0,$.each($("a.archive-title"),function(t,e){n+=parseInt($(e).attr("data-words"))}),$("#totalWordCount").html(n))},parseTOC:function(){0<$(".TOC").length&&(tocbot.init({tocSelector:".TOC",contentSelector:"div.articleBody",headingSelector:"h2, h3, h4, h5",collapseDepth:6}),$.each($(".toc-link"),function(t,e){$(e).click(function(){return VOID_SmoothScroller.scrollTo($(this).attr("href"),-60),window.innerWidth<1200&&TOC.close(),!1})}),1200<=window.innerWidth&&TOC.open())},parsePhotos:function(){$.each($("div.articleBody figure:not(.size-parsed)"),function(t,n){var a=new Image;a.onload=function(){var t=parseFloat(a.width),e=parseFloat(a.height);$(n).addClass("size-parsed"),$(n).css("width",t+"px"),$(n).css("flex-grow",50*t/e),$(n).find("a").css("padding-top",e/t*100+"%")},a.src=$(n).find("img").attr("data-src")})},parseBoardThumbs:function(){$.each($(".board-thumb"),function(t,e){VOIDConfig.lazyload?VOIDConfig.browserLevelLoadingLazy?$(e).html('<img class="lazyload browserlevel-lazy" src="'+$(e).attr("data-thumb")+'" loading="lazy">'):$(e).html('<img class="lazyload" data-src="'+$(e).attr("data-thumb")+'">'):$(e).html('<img src="'+$(e).attr("data-thumb")+'">')})},parseUrl:function(){var n=document.domain;$('a:not(a[href^="#"]):not(".post-like")').each(function(t,e){$(e).attr("target")&&(""!=!$(e).attr("target")||"_self"!=!$(e).attr("target"))||e.hostname==n||$(e).attr("target","_blank")}),VOIDConfig.PJAX&&($.each($('a:not(a[target="_blank"], a[no-pjax])'),function(t,e){e.hostname==n&&$(e).addClass("pjax")}),$(document).pjax("a.pjax",{container:"#pjax-container",fragment:"#pjax-container",timeout:8e3}))},highlight:function(){$.each($(".yue pre code"),function(t,e){var n=$(e).attr("class");-1==(n=void 0===n?"language-none":n).indexOf("lang")&&(n+=" language-none"),$(e).attr("class",n)}),Prism.highlightAll()},bigfoot:function(){$.bigfoot({actionOriginalFN:"ignore"})},pangu:function(){pangu.spacingElementByTagName("p")},math:function(){VOIDConfig.enableMath&&"undefined"!=typeof MathJax&&(MathJax.Hub.Config({tex2jax:{inlineMath:[["$","$"],["\\(","\\)"]]}}),MathJax.Hub.Queue(["Typeset",MathJax.Hub]))},hyphenate:function(){$("div.articleBody p, div.articleBody blockquote").hyphenate("en-us")}},VOID={init:function(){VOID_Ui.checkHeader(),VOID_Ui.MasonryCtrler.init(),VOID_Ui.DarkModeSwitcher.checkColorScheme(),VOID_Ui.checkScrollTop(),VOID_Content.parseBoardThumbs(),VOID_Ui.lazyload(),VOID_Ui.headroom(),VOID_Content.countWords(),VOID_Content.parseTOC(),VOID_Content.parsePhotos(),VOID_Content.highlight(),VOID_Content.parseUrl(),VOID_Content.pangu(),VOID_Content.bigfoot(),VOID_Content.math(),VOID_Content.hyphenate(),VOID_Vote.reload(),AjaxComment.init(),$("body").on("click",function(t){return VOID_Util.clickIn(t,".mobile-search-form")||VOID_Util.clickIn(t,"#toggle-mobile-search")||!$(".mobile-search-form").hasClass("opened")?VOID_Util.clickIn(t,"#toggle-setting-pc")||VOID_Util.clickIn(t,"#toggle-setting")||!$("body").hasClass("setting-panel-show")||VOID_Util.clickIn(t,"#setting-panel")?void 0:($("body").removeClass("setting-panel-show"),setTimeout(function(){$("#setting-panel").hide()},300),!1):($(".mobile-search-form").removeClass("opened"),!1)})},beforePjax:function(){NProgress.start(),VOID_Ui.reset()},afterPjax:function(){NProgress.done(),VOID_Content.parseBoardThumbs(),$("#loggin-form").length&&$("#loggin-form").addClass("need-refresh"),VOID_Ui.MasonryCtrler.init(),VOID_Ui.lazyload(),VOID_Ui.checkScrollTop(),VOID_Content.countWords(),VOID_Content.parseTOC(),VOID_Content.parsePhotos(),VOID_Content.parseUrl(),VOID_Content.highlight(),VOID_Content.math(),VOID_Content.hyphenate(),VOID_Content.pangu(),VOID_Content.bigfoot(),VOID_Vote.reload(),0<$(".OwO").length&&new OwO({logo:"OωO",container:document.getElementsByClassName("OwO")[0],target:document.getElementsByClassName("input-area")[0],api:"/usr/themes/VOID/assets/libs/owo/OwO_03.json",position:"down",width:"400px",maxHeight:"250px"}),AjaxComment.init()},endPjax:function(){$(".TOC").length<1&&TOC.close()},alert:function(t,e){var n=(new Date).getTime(),t=($("body").prepend('<div class="msg" id="msg{id}">{Text}</div>'.replace("{Text}",t).replace("{id}",n)),$.each($(".msg"),function(t,e){$(e).attr("id")!="msg"+n&&$(e).css("top",$(e).offset().top-$(document).scrollTop()+$(".msg#msg"+n).outerHeight()+20+"px")}),$(".msg#msg"+n).addClass("show"),e);"number"!=typeof e&&(t=2500),setTimeout(function(){$(".msg#msg"+n).addClass("hide"),setTimeout(function(){$(".msg#msg"+n).remove()},1e3)},t)},startSearch:function(t){var e=$(t).val();$(t).val(""),$(t).blur(),e&&""!=e?(e=VOIDConfig.searchBase+e,VOIDConfig.PJAX?$.pjax({url:e,container:"#pjax-container",fragment:"#pjax-container",timeout:8e3}):window.open(e,"_self")):$(t).attr("placeholder","你还没有输入任何信息")},enterSearch:function(t){13==(window.event||arguments.callee.caller.arguments[0]).keyCode&&VOID.startSearch(t)}},VOID_Vote={vote:function(n){var t=$(n).attr("data-type"),a=$(n).attr("data-item-id"),e=$(n).attr("data-table"),o="void_vote_"+e+"_"+t,m=VOID_Util.getCookie(o);if(-1!=(m=null==m?",":m).indexOf(","+a+","))return $(n).addClass("done"),void VOID.alert("您已经投过票了~");if($(n).hasClass("comment-vote")){var r="",r="up"==t?"down":"up";if(VOID_Vote.checkVoted(r,a,e))return void VOID.alert("暂不支持更改投票哦～")}$.ajax({url:VOIDConfig.votePath+e,type:"POST",data:JSON.stringify({id:parseInt(a),type:t}),contentType:"application/json; charset=utf-8",dataType:"json",success:function(t){switch(200<=t.code&&t.code<400&&($(n).addClass("done"),m+=a+",",VOID_Util.setCookie(o,m,7776e3)),t.code){case 200:var e=parseInt($(n).find(".value").text());$(n).find(".value").text(e+1);break;case 302:VOID.alert("您好像已经投过票了呢～");break;case 403:VOID.alert("暂不支持更改投票哦～")}},error:function(){VOID.alert("投票失败 o(╥﹏╥)o，请稍后重试")}})},checkVoted:function(t,e,n){n=VOID_Util.getCookie("void_vote_"+n+"_"+t);return-1!=(n=null==n?",":n).indexOf(","+e+",")},reload:function(){$.each($(".vote-button"),function(t,e){var n=$(e).attr("data-type"),a=$(e).attr("data-item-id"),o=$(e).attr("data-table");VOID_Vote.checkVoted(n,a,o)&&$(e).addClass("done")})},toggleFoldComment:function(t,e){t="#comment-"+String(t);$(t).toggleClass("fold"),$(t).hasClass("fold")?$(e).text("点击展开"):$(e).text("还是叠上吧")}},Share={parseItem:function(t){return t=$(t).parent(),{url:$(t).attr("data-url"),title:$(t).attr("data-title"),excerpt:$(t).attr("data-excerpt"),img:$(t).attr("data-img"),twitter:$(t).attr("data-twitter"),weibo:$(t).attr("data-weibo")}},toWeibo:function(t){t=Share.parseItem(t),t="http://service.weibo.com/share/share.php?appkey=&title=分享《"+t.title+"》 @"+t.weibo+"%0a%0a"+t.excerpt+"&url="+t.url+"&pic="+t.img+"&searchPic=false&style=simple";window.open(t)},toTwitter:function(t){t=Share.parseItem(t),t="https://twitter.com/intent/tweet?text=分享《"+t.title+"》 @"+t.twitter+"%0a%0a"+t.excerpt+"%20"+t.url;window.open(t)}},AjaxComment={noName:"必须填写用户名",noMail:"必须填写电子邮箱地址",noUrl:"必须填写 URL",noContent:"必须填写评论内容",invalidMail:"邮箱地址不合法",commentsOrder:"DESC",commentList:".comment-list",comments:"#comments .comments-title",commentReply:".comment-reply",commentForm:"#comment-form",respond:".respond",textarea:"#textarea",submitBtn:"#comment-submit-button",newID:"",parentID:"",bindClick:function(){$(AjaxComment.commentReply+" a, #cancel-comment-reply-link").unbind("click"),$(AjaxComment.commentReply+" a").click(function(){AjaxComment.parentID=$(this).parent().parent().parent().attr("id"),$(AjaxComment.textarea).focus()}),$("#cancel-comment-reply-link").click(function(){AjaxComment.parentID=""})},err:function(){$(AjaxComment.submitBtn).attr("disabled",!1),AjaxComment.newID=""},finish:function(){TypechoComment.cancelReply(),$(AjaxComment.submitBtn).html("提交评论"),$(AjaxComment.textarea).val(""),$(AjaxComment.submitBtn).attr("disabled",!1),0<$("#comment-"+AjaxComment.newID).length&&(VOID_SmoothScroller.scrollTo($("#comment-"+AjaxComment.newID).offset().top,-60),$("#comment-"+AjaxComment.newID).fadeTo(500,1)),$(".comment-num .num").html(parseInt($(".comment-num .num").html())+1),AjaxComment.bindClick(),VOID_Content.highlight()},init:function(){AjaxComment.bindClick(),$(AjaxComment.commentForm).submit(function(){if($(AjaxComment.submitBtn).attr("disabled",!0),$(AjaxComment.commentForm).find("#author")[0]){if(""==$(AjaxComment.commentForm).find("#author").val())return VOID.alert(AjaxComment.noName),AjaxComment.err(),!1;if(void 0!==$(AjaxComment.commentForm).find("#mail").attr("required")&&""==$(AjaxComment.commentForm).find("#mail").val())return VOID.alert(AjaxComment.noMail),AjaxComment.err(),!1;if(""!=$(AjaxComment.commentForm).find("#mail").val())if(!/^[^@\s<&>]+@([a-z0-9]+\.)+[a-z]{2,4}$/i.test($(AjaxComment.commentForm).find("#mail").val()))return VOID.alert(AjaxComment.invalidMail),AjaxComment.err(),!1;if(""==$(AjaxComment.commentForm).find("#url").val()&&void 0!==$(AjaxComment.commentForm).find("#url").attr("required"))return VOID.alert(AjaxComment.noUrl),AjaxComment.err(),!1}var t=$(AjaxComment.commentForm).find(AjaxComment.textarea).val().replace(/(^\s*)|(\s*$)/g,"");return null==t||""==t?(VOID.alert(AjaxComment.noContent),AjaxComment.err()):($(AjaxComment.submitBtn).html("提交中"),$.ajax({url:$(AjaxComment.commentForm).attr("action"),type:$(AjaxComment.commentForm).attr("method"),data:$(AjaxComment.commentForm).serializeArray(),error:function(){return VOID.alert("提交失败！请重试。"),$(AjaxComment.submitBtn).html("提交评论"),AjaxComment.err(),!1},success:function(t){try{var e;if($(AjaxComment.commentList,t).length){if(AjaxComment.newID=$(AjaxComment.commentList,t).html().match(/id="?comment-\d+/g).join().match(/\d+/g).sort(function(t,e){return t-e}).pop(),$(".pager .prev").length&&""==AjaxComment.parentID)return VOID.alert("评论成功！请回到评论第一页查看。"),AjaxComment.newID="",AjaxComment.parentID="",AjaxComment.finish(),!1;var n=""==AjaxComment.parentID?"comment-parent":"comment-child",a='<div id="comment-'+AjaxComment.newID+'" style="opacity:0" class="comment-body '+n+'">'+$(t).find("#comment-"+AjaxComment.newID).html()+"</div>";return $(AjaxComment.commentList).length<=0&&$("#comments").append('<h3 class="comment-separator"><div class="comment-tab-current"><span class="comment-num">已有 <span class="num">0</span> 条评论</span></div></h3>').append('<div class="comment-list"></div>'),""==AjaxComment.parentID?($("#comments>.comment-list").prepend(a),VOID.alert("评论成功！"),AjaxComment.finish()):($("#"+AjaxComment.parentID).hasClass("comment-parent")?0<$("#"+AjaxComment.parentID+" > .comment-children").length?$("#"+AjaxComment.parentID+" > .comment-children > .comment-list").prepend(a):(a='<div class="comment-children"><div class="comment-list">'+a+"</div></div>",$("#"+AjaxComment.parentID).append(a)):$("#"+AjaxComment.parentID).after(a),VOID.alert("评论成功！"),AjaxComment.finish(),AjaxComment.parentID=""),AjaxComment.newID="",!1}return e="提交失败！请重试。"+$($(t)[7]).text(),VOID.alert(e),$(AjaxComment.submitBtn).html("提交评论"),AjaxComment.err(),!1}catch(t){window.location.reload()}}})),!1})}};$(document).ready(function(){VOID.init(),VOIDConfig.PJAX&&($(document).on("pjax:send",function(){VOID.beforePjax()}),$(document).on("pjax:complete",function(){VOID.afterPjax()}),$(document).on("pjax:end",function(){VOID.endPjax()}))}),window.setInterval(function(){var t=(new Date).getTime()-Date.parse(VOIDConfig.buildTime),t=Math.floor(t/1e3),e=Math.floor(t/86400),n=(t%=86400,Math.floor(t/3600)),a=(t%=3600,Math.floor(t/60)),t=(t%=60,Math.floor(t));$("#uptime").html(e+" 天 "+n+" 小时 "+a+" 分 "+t+" 秒 ")},1e3);