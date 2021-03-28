$('.register-form input').keypress(function (e) {
    if (e.which == 13) {
        sendIt();
        return false;
    }
});
function drawMsg(key, str) {
    $("#notice_txt_" + key).html(str).fadeIn();
}

function useridCheck() {
    if ($("#userid").val().trim() == "") {
        formSubmit();
        return;
    }

    var userid = $("#userid").val();

    axios.post('/api/tools/check_member', {
        userid: userid,
    })
    .then(function (rs) {
        if (rs == null || rs == undefined) {
            alert("Network error.");
        } else {
            $("#userid").attr("checkid", "0");
            if (rs.data.success == true) {
                //drawMsg("userid", "The ID is available.");
                $("#userid").attr("checkid", "1");
            }
            if (rs.data.message.length > 0) {
                //drawMsg("userid", rs.message);
            }
            formSubmit();
        }
    })
    .catch(function (error) {
        console.log(error);
    });
}

$(document).ready(function () {
    //document.title = "title.site.register.title";
    $('#userid').keyup(function (evt) {
        if (evt.keyCode == 13) {
            return false;
        }
    });
    $('.notice_txt').hide();
});

var focusId = "";
var errorCount = 0;

function formSend() {
    sendIt();
    return false;
}

function sendIt() {
    focusId = "";
    errorCount = 0;

    $('.notice_txt').hide();
    setSubmitBlock(true);

    if ($('#countryCode').val() == "") {
        drawMsg("countryCode", "Please choose your country.");
        if (focusId == "") focusId = "countryCode";
        errorCount++;
    }

    var regExp = /^[0-9a-zA-Z]([-_\.]*[0-9a-zA-Z]*)*@([0-9a-zA-Z_-]+)(\.[0-9a-zA-Z_-]+){1,2}$/;
    if ($("#userid").val().trim() == "" || $("#userid").val().trim() == "title.single.join.email") {
        drawMsg("userid", "Please enter E-Mail address.");
        if (focusId == "") focusId = "userid";
        errorCount++;
    }
    else if ($("#userid").val().trim().length < 6 || $("#userid").val().trim().length > 60) {
        drawMsg("userid", "E-Mail has to be between 6-60 characters long");
        if (focusId == "") focusId = "userid";
        errorCount++;
    }
    else if (!$('#userid').val().match(regExp)) {
        drawMsg("userid", "Please enter a valid e-mail address.");
        if (focusId == "") focusId = "userid";
        errorCount++;
    }

    if (errorCount > 0) {
        formSubmit();
    }
    else {
        useridCheck();
    }
}

function setSubmitBlock(stat) {
    if (stat) {
        $("#btnSubmit").attr("disabled", "true");
        //$(".loding").show();        //$("#loading_progress").show();
    }
    else {
        $("#btnSubmit").removeAttr("disabled");
        //$(".loding").hide();        //$("#loading_progress").hide();
    }
}

function formSubmit() {
    var checkid = $("#userid").attr("checkid");

    if ($.trim(checkid) != "" && checkid != "1") {
        drawMsg("userid", "Existing Account With Same E-Mail");
        if (focusId == "") focusId = "userid";
        errorCount++;
    }

    //var regPwd1 = /[^a-zA-Z0-9~`!@#$%^&*()_\-+={}[\]|\\;:'""<>,.?/]/g;
    var regPwd1 = /^[a-zA-Z0-9-_.]+$/;
    var regPwd2 = /([a-zA-Z0-9])\1{2,}/g;

    if ($("#password").val().trim().length <= 0 || $("#password").val().trim() == "title.single.join.password") {
        drawMsg("password", "Please enter your password.");
        if (focusId == "") focusId = "password";
        errorCount++;
    } else if ($("#password").val().trim().length < 6 || $("#password").val().trim().length > 16) {
        drawMsg("password", "Password has to be between 6-16 characters long");
        if (focusId == "") focusId = "password";
        errorCount++;
    //} else if (regPwd1.test($("#password").val().trim())) {
    } else if ($("#password").val().search(regPwd1)) {
        drawMsg("password", "You can use only alphanumeric, dot, underscore or hyphen characters for password.");
        if (focusId == "") focusId = "password";
        errorCount++;
    } else if (regPwd2.test($("#password").val().trim())) {
        drawMsg("password", "Please do not use repeating characters in your password.");
        if (focusId == "") focusId = "password";
        errorCount++;
    }/* else if ($("#password").val().trim() != $("#password_confirmation").val().trim()) {
        drawMsg("password_confirmation", "Passwords does not match.");
        $("#password_confirmation").val("");
        if (focusId == "") focusId = "password_confirmation";
        errorCount++;
    }*/

    if ($.trim($("#g-recaptcha-response").val()) == "") {  //geegle recaptcha v2
        drawMsg("capcha", "Please check out Google ReCaptcha.");
        errorCount++;
    }

    if ($.trim(focusId) != "") $('#' + focusId).focus();
    if (errorCount > 0) {
        setSubmitBlock(false);
        return;
    }

    if (errorCount > 0) {
        setSubmitBlock(false);
        return;
    }

    if (!$("#join_agree").is(":checked")) {
        alert("Please agree the terms and conditions.");
        $("#join_agree").focus();
        setSubmitBlock(false);
        return;
    }


    var frm = $("#userForm");
    frm.attr("method", "POST");
    frm.attr("onsubmit", "return true");
    //setSubmitBlock(false);
    //console.log(frm.serialize());
    frm.submit();
}

function cbEnter() {
    sendIt();
}

$(document).ready(function() {
    $(".show-password").click(function() {
        input = $(this).prev('input');
        icon = $(this).find('i');
        if (input.attr('type') == 'password') {
            input.attr('type', 'text');
            icon.attr('class', 'far fa-eye');
        } else {
            input.attr('type', 'password');
            icon.attr('class', 'far fa-eye-slash');
        }
    });
});