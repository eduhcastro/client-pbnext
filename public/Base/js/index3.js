//<![CDATA[
    var logger = {
        log: function(format) {
            var arg = arguments;
            var str = "";
            try {
                if (arg.length > 0)
                    str = arg[0];
                for (var i = 1; i < arg.length; i++) {
                    str = str.replace("{" + (i - 1) + "}", arg[i]);
                }
                window.console.log(str);
            } catch (e) {}
        },
        trace: function(format) {
            var arg = arguments;
            var str = "";
            try {
                if (arg.length > 0)
                    str = arg[0];
                for (var i = 1; i < arg.length; i++) {
                    str = str.replace("{" + (i - 1) + "}", arg[i]);
                }
                window.console.trace(str);
            } catch (e) {}
        }
    };
    
    String.prototype.trim = function() {
        return this.replace(/(^\s*)|(\s*$)/g, "");
    }
    
    function isBlank(obj, strMsg, useFocus) {
        if (obj.val().trim().length > 0) {
            return false;
        } else {
            alert(strMsg);
            if (useFocus == "Y") {
                obj.focus();
            }
            return true;
        }
    }
    
    function isTextBlank(obj, strMsg, useFocus) {
        if (obj.text().trim().length > 0) {
            return false;
        } else {
            alert(strMsg);
            if (useFocus == "Y") {
                obj.focus();
            }
            return true;
        }
    }
    
    function isCheckRadio(strName, strMsg, useFocus, nIndex) {
        if ($("input[name=" + strName + "]:radio:checked").length > 0) {
            return false;
        } else {
            alert(strMsg);
            if (useFocus == "Y") {
                if (nIndex && nIndex != null && nIndex != "" && nIndex != "undefined") {
                    $("input[name=" + strName + "]")[nIndex].focus();
                } else {
                    $("input[name=" + strName + "]")[0].focus();
                }
            }
            return true;
        }
    }
    
    function isCheckEmail(obj) {
        var str = obj.val();
        return isCheckEmailStr(str);
    }
    
    function isCheckEmailStr(str) {
        if (str.trim().length > 0) {
            if (str.match(/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/)) {
                return true;
            } else {
                return false;
            }
        }
    }
    
    function hasNum(obj, strMsg, useFocus) {
        var rtn = hasNumStr(obj.val());
        if (!rtn) {
            alert(strMsg);
            if (useFocus == 'Y') obj.focus();
        }
        return rtn;
    }
    
    function hasNumStr(str) {
        return str.match(/[0-9]/gi);
    }
    
    function hasSpecialChar(obj, strMsg, useFocus) {
        var rtn = hasSpecialCharStr(obj.val());
        if (!rtn) {
            alert(strMsg);
            if (useFocus == 'Y') obj.focus();
        }
        return rtn;
    }
    
    function hasSpecialCharStr(str) {
        return str.match(/[\{\}\[\]\/?.,;:|\)*~`!^\-_+┼<>@\#$%&\'\"\\\(\=]/gi);
    }
    
    function hasEngChar(obj, strMsg, useFocus) {
        var rtn = hasEngCharStr(obj.val());
        if (!rtn) {
            alert(strMsg);
            if (useFocus == 'Y') obj.focus();
        }
        return rtn;
    }
    
    function hasEngCharStr(str) {
        return str.match(/[a-zA-Z]/gi);
    }
    
    function validEngNum(obj, strMsg, useFocus) {
        var rtn = validEngNumStr(obj.val());
        if (!rtn) {
            alert(strMsg);
            if (useFocus == 'Y') obj.focus();
        }
        return rtn;
    }
    
    function validEngNumStr(str) {
        return str.match(/^[a-zA-Z0-9]+$/);
    }
    
    function validNum(obj, strMsg, useFocus) {
        var rtn = validNumStr(obj.val());
        if (!rtn) {
            alert(strMsg);
            if (useFocus == 'Y') obj.focus();
        }
        return rtn;
    }
    
    function validNumStr(str) {
        return str.match(/^[0-9]+$/);
    }
    
    function getCKEditorObj(objID) {
        return eval("CKEDITOR.instances." + objID);
    }
    
    function getCKEditorContents(objID) {
        return getCKEditorObj(objID).getData().trim();
    }
    
    function setCookie(name, value, expiredays) {
        var todayDate = new Date();
        if (expiredays && expiredays != 0) {
            todayDate.setDate(todayDate.getDate() + expiredays);
            document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";"
        } else {
            document.cookie = name + "=" + escape(value) + "; path=/;"
        }
    }
    
    function GetFileName(str) {
        var rtn = "";
        var temp = null;
        temp = str.split("/");
        rtn = temp[temp.length - 1];
        return rtn;
    }
    
    function GetFilePath(str) {
        var rtn = [];
        var temp = null;
        temp = str.split("/");
        for (var i = 0; i < temp.length - 1; i++) {
            rtn[i] = temp[i];
        }
        return rtn.join("/");
    }
    
    function IsNullOrEmpty(str) {
        var strData = str + "";
        if (strData != null && strData != undefined && strData != "undefined" && strData.length > 0) {
            return false;
        } else {
            return true;
        }
    }
    
    function IsNullOrEmptyObj(obj) {
        if (obj != null && obj != undefined && obj != "undefined" && obj) {
            return false;
        } else {
            return true;
        }
    }
    
    function SendAjaxDFSuccess(data) {}
    
    function SendAjaxDFError() {}
    
    function SendAjaxDFBeforeSubmit() {
        return true;
    }
    
    function SendAjax(p) {
        var targetUrl = p.url;
        var sendParam = p.parammeters;
        var sendType = p.requestMethod;
        var cbTarget = p.fnTarget;
        var cbComplete = IsNullOrEmptyObj(p.completeHandler) ? null : p.completeHandler;
        var cbSucess = p.successHandler;
        var cbError = p.failHandler;
        var date = new Date();
        if (IsNullOrEmpty(sendType)) {
            sendType = "GET";
        }
        if (!p.formsend || p.formsend == null || p.formsend == undefined) {
            if (sendParam) {
                sendParam.Dummy = date.getTime();
                sendParam.mobile = "";
            } else {
                sendParam = {
                    "Dummy": date.getTime(),
                    "mobile": ""
                };
            }
        }
        if (IsNullOrEmptyObj(cbTarget)) {
            cbTarget = null;
        }
        if (IsNullOrEmptyObj(cbSucess)) {
            cbSucess = SendAjaxDFSuccess;
        }
        if (IsNullOrEmptyObj(cbError)) {
            cbError = SendAjaxDFError;
        }
        $.ajax({
            type: sendType,
            url: targetUrl,
            data: sendParam,
            dataType: "json",
            timeout: 30000,
            async: true,
            cache: false,
            beforeSubmit: SendAjaxDFBeforeSubmit,
            success: function(xhr) {
                if (cbComplete != null) {
                    cbComplete.apply(cbTarget, [true, xhr]);
                }
                cbSucess.apply(cbTarget, [xhr]);
            },
            error: function() {
                if (cbComplete != null) {
                    cbComplete.apply(cbTarget, [false]);
                }
                cbError.apply(cbTarget);
            }
        });
    }
    
    function layer_open(ml, el) {
        $('.' + ml).fadeIn();
        var temp = $('#' + el);
        if (temp.outerHeight() < $(document).height()) temp.css('margin-top', '-' + temp.outerHeight() / 2 + 'px');
        else temp.css('top', '0px');
        if (temp.outerWidth() < $(document).width()) temp.css('margin-left', '-' + temp.outerWidth() / 2 + 'px');
        else temp.css('left', '0px');
        $('body').css("position", "fixed");
    }
    $(document).ready(function() {
        $(".dev_check_enter").bind("keyup", function(e) {
            if (e.keyCode == 13) {
                try {
                    var fn = "cbEnter";
                    var target = null;
                    var evtType = "";
                    if ($(this).attr("cbFn") && $(this).attr("cbFn").length > 0) {
                        fn = $(this).attr("cbFn");
                    }
                    if ($(this).attr("cbTarget") && $(this).attr("cbTarget").length > 0) {
                        target = eval($(this).attr("cbTarget"));
                    }
                    if ($(this).attr("cbEvtType") && $(this).attr("cbEvtType").length > 0) {
                        evtType = $(this).attr("cbEvtType");
                    }
                    eval(fn).apply(target, [$(this).attr("id"), evtType]);
                } catch (e) {}
            }
        });
        $(".image_over_dy").each(function() {
            var obj = $(this);
            obj.bind("mouseover", function() {
                try {
                    var src = $(this).attr("src");
                    var temp = src.split("/");
                    var img = temp[temp.length - 1];
                    temp.pop();
                    var path = temp.join("/");
                    temp = img.split(".");
                    var target = temp[0];
                    var ext = temp[1];
                    if (target.length > 3) {
                        if (target.substr(target.length - 3, 3) != "_on") {
                            target += "_on";
                        }
                    }
                    img = path + "/" + target + "." + ext;
                    $(this).attr("src", img);
                } catch (e) {}
            });
            obj.bind("mouseout", function() {
                try {
                    var src = $(this).attr("src");
                    var temp = src.split("/");
                    var img = temp[temp.length - 1];
                    temp.pop();
                    var path = temp.join("/");
                    temp = img.split(".");
                    var target = temp[0];
                    var ext = temp[1];
                    if (target.length > 3) {
                        if (target.substr(target.length - 3, 3) == "_on") {
                            target = target.substr(0, target.length - 3);
                        }
                    }
                    img = path + "/" + target + "." + ext;
                    $(this).attr("src", img);
                } catch (e) {}
            });
        });
    });
    var landing = {
        noview: function(n, url) {
            var day = n ? n : 1;
            setCookie("landing", "noview", day);
            if (url) {
                document.location.href = url;
            }
        },
        gohome: function(url) {
            setCookie("landingHome", true, 0);
            logger.log(document.cookie);
            var strUrl = url ? url : "/";
            document.location.href = strUrl;
        }
    }
    
    function Close_Promotion() {
        document.getElementById("promotion").style.display = 'none';
    }
    $(window).scroll(function() {
        var scrollTop = $(document).scrollTop();
        if (scrollTop < 383) {
            scrollTop = 383;
        }
        $(".left_banner").stop();
        $(".left_banner").animate({
            "top": scrollTop
        });
    });
    $(window).scroll(function() {
        var scrollTop = $(document).scrollTop();
        if (scrollTop < 383) {
            scrollTop = 383;
        }
        $(".quick_menu").stop();
        $(".quick_menu").animate({
            "top": scrollTop
        });
    });
    
    function close_layer_pop() {
        document.getElementById("layer_popup_block").style.display = 'none';
    }
    
    function layer_popup_open_w550(el) {
        var temp = $('#' + el);
        var layer_bg_dim = temp.prev().hasClass('layer_bg_dim');
        if (layer_bg_dim) {
            $("#Layout").fadeIn();
        } else {
            temp.fadeIn();
        }
        if (temp.outerHeight() < $(document).height()) temp.css('margin-top', '-' + temp.outerHeight() / 2 + 'px');
        else temp.css('top', '0px');
        if (temp.outerWidth() < $(document).width()) temp.css('margin-left', '-' + temp.outerWidth() / 4.2 + 'px');
        else temp.css('left', '0px');
        temp.find('a.close_btn').click(function(e) {
            if (layer_bg_dim) {
                $("#Layout").fadeOut();
            } else {
                temp.fadeOut();
            }
            e.preventDefault();
        });
        $('.layer_popup .layer_bg_dim').click(function(e) {
            $("#Layout").fadeOut();
            e.preventDefault();
        });
    }
    
      
    function layer_popup_open_w550X(el) {
        var temp = $('#' + el);
        var layer_bg_dim = temp.prev().hasClass('layer_bg_dim');
        if (layer_bg_dim) {
            $("#pagesinfo2").fadeIn();
        } else {
            temp.fadeIn();
        }
        if (temp.outerHeight() < $(document).height()) temp.css('margin-top', '-' + temp.outerHeight() / 2 + 'px');
        else temp.css('top', '0px');
        if (temp.outerWidth() < $(document).width()) temp.css('margin-left', '-' + temp.outerWidth() / 4.2 + 'px');
        else temp.css('left', '0px');
        temp.find('a.close_btn').click(function(e) {
            if (layer_bg_dim) {
                $("#pagesinfo2").fadeOut();
            } else {
                temp.fadeOut();
            }
            e.preventDefault();
        });
        $('.layer_popup .layer_bg_dim').click(function(e) {
            $("#pagesinfo2").fadeOut();
            e.preventDefault();
        });
    }

    function layer_popup_open_w600(el) {
        var temp = $('#' + el);
        var layer_bg_dim = temp.prev().hasClass('layer_bg_dim');
        if (layer_bg_dim) {
            $('.layer_popup').fadeIn();
            $(document).bind("keyup", function(e) {
                if (e.keyCode == 27) {
                    $('.layer_popup').fadeOut();
                    $(document).unbind("keyup");
                }
            });
        } else {
            temp.fadeIn();
            $(document).bind("keyup", function(e) {
                if (e.keyCode == 27) {
                    $('.layer_popup').fadeOut();
                    $(document).unbind("keyup");
                }
            });
        }
        if (temp.outerHeight() < $(document).height()) temp.css('margin-top', '-' + temp.outerHeight() / 2 + 'px');
        else temp.css('top', '0px');
        if (temp.outerWidth() < $(document).width()) temp.css('margin-left', '-' + temp.outerWidth() / 3.85 + 'px');
        else temp.css('left', '0px');
        temp.find('a.close_btn').click(function(e) {
            if (layer_bg_dim) {
                $('.layer_popup').fadeOut();
                $(document).unbind("keyup");
            } else {
                temp.fadeOut();
                $(document).unbind("keyup");
            }
            e.preventDefault();
        });
        $('.layer_popup .layer_bg_dim').click(function(e) {
            $('.layer_popup').fadeOut();
            $(document).unbind("keyup");
            e.preventDefault();
        });
    }
    
    function View_week_list_more() {
        document.getElementById("week_list_more").style.display = 'inline'
    }
    
    function Close_week_list_more() {
        document.getElementById("week_list_more").style.display = 'none';
    }
    
   
    function get_season(season) {
        var value = season.value;
        location.href = '/ranking/individual/list.do?ranktype=elo&season=' + value;
    }
    
    function cont_tab_show(signup) {
        document.all.tab_Kull.style.display = "none";
        document.all.tab_Gizl.style.display = "none";
        document.all.tab_Hile.style.display = "none";
        switch (signup) {
            case '1':
                document.all.tab_Kull.style.display = "";
                break;
            case '2':
                document.all.tab_Gizl.style.display = "";
                break;
            case '3':
                document.all.tab_Hile.style.display = "";
                break;
        }
    }
    
    function tab_menu_two(tab_two) {
        document.all.tab_two_first.style.display = "none";
        document.all.tab_two_second.style.display = "none";
        switch (tab_two) {
            case '1':
                document.all.tab_two_first.style.display = "";
                break;
            case '2':
                document.all.tab_two_second.style.display = "";
                break;
        }
    }
    
    function tab_menu_five(tab_five) {
        document.all.tab_five_first.style.display = "none";
        document.all.tab_five_second.style.display = "none";
        document.all.tab_five_third.style.display = "none";
        document.all.tab_five_fourth.style.display = "none";
        document.all.tab_five_fifth.style.display = "none";
        document.all.tab_five_sixth.style.display = "none";
        switch (tab_five) {
            case '1':
                document.all.tab_five_first.style.display = "";
                break;
            case '2':
                document.all.tab_five_second.style.display = "";
                break;
            case '3':
                document.all.tab_five_third.style.display = "";
                break;
            case '4':
                document.all.tab_five_fourth.style.display = "";
                break;
            case '5':
                document.all.tab_five_fifth.style.display = "";
                break;
            case '6':
                document.all.tab_five_sixth.style.display = "";
                break;
        }
    }
    
    function tab_menu_five_dn(tab_five_dn) {
        document.all.tab_five_dn_first.style.display = "none";
        document.all.tab_five_dn_second.style.display = "none";
        document.all.tab_five_dn_third.style.display = "none";
        document.all.tab_five_dn_fourth.style.display = "none";
        document.all.tab_five_dn_fifth.style.display = "none";
        document.all.tab_five_dn_sixth.style.display = "none";
        switch (tab_five_dn) {
            case '1':
                document.all.tab_five_dn_first.style.display = "";
                break;
            case '2':
                document.all.tab_five_dn_second.style.display = "";
                break;
            case '3':
                document.all.tab_five_dn_third.style.display = "";
                break;
            case '4':
                document.all.tab_five_dn_fourth.style.display = "";
                break;
            case '5':
                document.all.tab_five_dn_fifth.style.display = "";
                break;
            case '6':
                document.all.tab_five_dn_sixth.style.display = "";
                break;
        }
    }
    
    $(document).ready(function() {});
    $(document).ready(function() {
        var current = 0;
        var slide_length = $('.main_event_slide li').length;
        var btn = '<ul class="main_event_slide_btn"></ul>';
        $('.main_event_slide li').hide();
        $('.main_event_slide li').first().show();
        $(btn).prependTo($('.event'))
        for (var i = 0; i < slide_length; i++) {
            var child = '<li><a href="#none">' + i + '</a></li>';
            $(child).appendTo($('.main_event_slide_btn'));
        }
        $('.main_event_slide_btn li a').first().addClass('active');
        $('.main_event_slide_btn li a').on('click', slide_stop);
    
        function autoplay() {
            if (current == slide_length - 1) {
                current = 0;
            } else {
                current++;
            }
            $('.main_event_slide li').stop().fadeOut(200);
            $('.main_event_slide li').eq(current).stop().fadeIn(200);
            $('.main_event_slide_btn li a').removeClass('active');
            $('.main_event_slide_btn li a').eq(current).addClass('active');
        }
        setInterval(autoplay, 2800);
    
        function slide_stop() {
            var fade_idx = $(this).parent().index();
            current = $(this).parent().index();
            if ($('.main_event_slide li:animated').length >= 1) return false;
            $('.main_event_slide li').fadeOut(200);
            $('.main_event_slide li').eq(fade_idx).fadeIn(200);
            $('.main_event_slide_btn li a').removeClass('active');
            $(this).addClass('active');
        }
    });
    //]]>