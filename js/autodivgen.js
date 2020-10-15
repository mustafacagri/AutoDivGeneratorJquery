$(".autodivgen").each(function(i, item) {
    $t = $(this);
    ($t.attr("id") == "" || $t.attr("id") == undefined) ? $t.attr("id", "autodivgen" + i): $t.attr("id");
    var AutoDivGenId = $t.attr("id");
    var AutoDivGenFromURL = $t.attr("data-from-url");
    var AutoDivGenIcon = $t.attr("data-icon") != undefined ? `<i class="${$t.attr("data-icon")}"></i>` : "";
    var AutoDivGenTitle = $t.attr("data-title") != undefined ? $t.attr("data-title") : "";
    var AutoDivGenContentAlign = $t.attr("data-content-align") != undefined ? $t.attr("data-content-align") : "left";
    var AutoDivGenTitleAlign = $t.attr("data-title-align") != undefined ? $t.attr("data-title-align") : "left";
    var AutoDivGenTitle = AutoDivGenTitleAlign != "right" ? `<div class="title">${AutoDivGenIcon + AutoDivGenTitle}</div>` : `<div class="title">${AutoDivGenTitle + AutoDivGenIcon}</div>`;
    var AutoDivGenTitleArea = ($t.attr("data-title") == "" || $t.attr("data-title") == undefined) ? "" : AutoDivGenTitle
    var AutoDivGenShadowBg = ($t.attr("data-shadow-bg") == undefined) ? "" : true; // If data-shadow-bg is undefined, we leave it blank. if not; If we fill it we will use the same data, otherwise we will use the title's icon here as well.
    var AutoDivGenFromObject;
    if (AutoDivGenFromURL.length > 0) {
        AutoDivGenFromObject = $t.attr("data-from-object");
    }
    if (AutoDivGenShadowBg) {
        if ($t.attr("data-shadow-bg") == "") { AutoDivGenShadowBg = `<i class="shadowBg ${$t.attr("data-icon")}"></i>` } else { AutoDivGenShadowBg = `<i class="shadowBg ${$t.attr("data-shadow-bg")}"></i>` }
    }

    var AutoDivGenContent = $t.html();
    if (AutoDivGenFromURL.length > 0) {
        $.ajax({
            url: AutoDivGenFromURL,
            type: "GET",
            crossDomain: true,
            headers: { "accept": "application/json", "Access-Control-Allow-Origin": "*" },
            success: function(data) {
                AutoDivGenContent = AutoDivGenContent + " " + data;
            },
            complete: function(data) {
                appendExecute();
            }
        });
    } else {
        appendExecute();
    }

    function appendExecute() {
        $(`#${AutoDivGenId}`).empty();
        $(`#${AutoDivGenId}`).html(`
                ${AutoDivGenTitleArea}
                <div class="content">${AutoDivGenContent}</div>
                ${AutoDivGenShadowBg}
        `).ready(function() {
            $(`#${AutoDivGenId} .content`).css("text-align", AutoDivGenContentAlign);
            $(`#${AutoDivGenId} .title`).css("text-align", AutoDivGenTitleAlign);
        });
    }
});