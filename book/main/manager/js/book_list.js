/**
 * Created by androidlongs on 17/1/3.
 */



//获取书籍列表
function getBookListData() {
    var url = getBookListURL();

    $.get(
        url,
        {},
        function (data, textStatus) {
            console.log("获取书籍列表 响应数据为 " + decodeURI(data) + " 请求结果为  " + textStatus);

            if (textStatus == 'success') {
                createBookListTable(data);
            } else {
                console.log("请求异常 " + textStatus);
                alert("请求异常");
            }

        });

}
//添加书籍分类
function addBookRequest() {
    var url = addBookRequest();
}
//删除书籍分类
function deleteBookClassRequest() {
    var url = deleteBookURL();
}
//修改书籍分类
function updateBookRequest() {
    var url = updateBookRequest();
}


function createBookListTable(data) {
    var resultObj = eval('(' + data + ')')
    var $bookListTable = $('#book_list_table');
    var $trTitle = $('<tr> </tr>');
    var $thTitleNumber = $('<th class="bnumber">类别</th>');
    var $thTitleBookName = $('<th class="bname">书名</th>');
    var $thTitleBookDesc = $('<th class="bdesc">描述</th>');
    var $thTitleDetale = $('<th class="balert">详情</th>');
    $trTitle.append($thTitleNumber);
    $trTitle.append($thTitleBookName);
    $trTitle.append($thTitleBookDesc);
    $trTitle.append($thTitleDetale);

    $bookListTable.append($trTitle);

    for (var i = 0; i < resultObj.length; i++) {
        var obj = resultObj[i];
        var $tr = $('<tr></tr>');
        var $tdNumber = $('<th class="bnumber">' + (i + 1) + '</th>');
        var $tdBookName = $('<th class="bname">' + obj.bname + '</td>');
        var $tdBookDesc = $('<th class="bdesc">' + obj.bdesc + '</td>');
        var $tdDeatl = $(
            '<td class="balert">' +
            '<input' +
            ' class="balert_button" ' +
            'type="button" value="详情" ' +
            'onclick="+bookListTableItemClick(this)" ' +
            'idd="' + obj.uuid +
            '">' +
            '</td>');
        $tr.append($tdNumber);
        $tr.append($tdBookName);
        $tr.append($tdBookDesc);
        $tr.append($tdDeatl);

        $bookListTable.append($tr);
    }

    $bookListTable.css({
        "height": "11.1rem",
        "width": "98%",
        "margin-left": "1%",
        "margin-right": "1%",
        "font-size": "0.14rem",
        "border:": "solid 1px #47802f",
        "table-layout": "fixed"
    });

    $(".bnumber").css({
        "height": "0.2rem",
        "width": "0.6rem",
        "font-size": "0.24rem",
        "border": "solid 0.5px #47802f",
        "white-space": "nowrap",
        "text-overflow": "ellipsis",
        "overflow": "hidden"
    });
    $(".bname").css({
        "height": "0.2rem",
        "width": "1.4rem",
        "font-size": "0.24rem",
        "border": "solid 0.5px #47802f",
        "white-space": "nowrap",
        "text-overflow": "ellipsis",
        "overflow": "hidden"
    });
    $(".bdesc").css({
        "height": "0.2rem",
        "width": "3rem",
        "font-size": "0.2rem",
        "border": "solid 0.5px #47802f",
        "white-space": "nowrap",
        "text-overflow": "ellipsis",
        "overflow": "hidden"
    });
    $(".balert").css({
        "height": "0.2rem",
        "width": "auto",
        "font-size": "0.22rem",
        "border": "solid 0.5px #47802f",
        "white-space": "nowrap",
        "text-overflow": "ellipsis",
        "overflow": "hidden"
    });

    $('.balert_button').css(
        {
            "width": "98%",
            "margin-left": "1%",
            "margin-right": "1%"
        }
    );

}


function bookListTableItemClick(detalTag) {
    var idd = detalTag.getAttribute("idd");
    alert(idd);
}


