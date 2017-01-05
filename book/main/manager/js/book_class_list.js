/**
 * Created by androidlongs on 17/1/3.
 */


//获取书籍分类列表
function getBookClassListData() {

    var url = getBookClassListURL();
    $.get(
        url,
        {},
        function (data, textStatus) {
            console.log("获取书籍分类列表 响应数据为 " + decodeURI(data) + " 请求结果为  " + textStatus);
            createTable(data);
        });

}
//添加书籍分类
function addBookClassRequest() {
    var url = addBookClassURL();

    var $selfsTitle = $('.selfs_name');
    var $selfsDesc = $('.selfs_desc');

    var selfsTitleString = $selfsTitle.val();
    var selfsDescString = $selfsDesc.val();
    if (selfsTitleString == null || selfsTitleString.length <= 0) {
        alert("类别名称不可为空")
        return;
    }

    if (selfsDescString == null || selfsDescString.length <= 0) {
        alert("类别描述不可为空")
        return;
    }

    //提交数据
    $.post(
        url,
        {
            "selfsTitle": encodeURI(selfsTitleString),
            "selfsDesc": encodeURI(selfsDescString)
        },
        function (data, textStatus) {
            if (textStatus == "success") {
                alert("添加成功");
                //清空
                $('.selfs_name').val("");
                $('.selfs_desc').val("");
                //跳转到类别查看页面
                selectBookClassListPage();
            } else {
                alert("添加失败");
                $('.submit_add_book_class').html("重新添加");
            }
            var result = "getJson 响应数据为 " + decodeURI(data) + " 请求结果为  " + textStatus;
        }, "json");


}


//修改书籍分类
function updateBookClassRequest() {
    var url = updateBookClassRequest();
}


function createTable(result) {

    var obj = eval('(' + result + ')');

    var arr = obj.contentList;

    var $table = $('#book_class_table');
    $("#book_class_table  tr:not(:first)").remove();

    $table.append($(
        '<tr>' +
        '<th class="bname">类名</th>' +
        '<th class="bname">描述</th>' +
        '<th class="bname">操作</th>' +
        '</tr>'
    ));
    if (arr.length == 0) {
        var $tr = $('<tr></tr>');
        var $td1 = $('<th class="bname" colspan="3">' + '无数据，请点击添加' + '</th>');
        $tr.append($td1);
        $table.append($tr);

        $table.css({
            "height": "auto",
            "width": "6.4rem",
            "margin-left": "0.5rem",
            "margin-right": "0.5rem",
            "font-size": "0.14rem",
            "border:": "solid 1px #47802f",
            "table-layout": "fixed"
        });
        $(".bname").css({
            "height": "0.2rem",
            "width": "2rem",
            "font-size": "0.24rem",
            "border": "solid 0.5px #47802f",
            "white-space": "nowrap",
            "text-overflow": "ellipsis",
            "overflow": "hidden"
        });

    } else {
        for (var i = 0; i < arr.length; i++) {

            var child = arr[i];

            var $td1 = $('<th class="bname">' + child.bcname + '</th>');
            var $td2 = $('<td class="bdesc" >' + child.bcdesc + '</td>');

            var $td3 =
                $('<td class="balert">' +
                    '<input bcuuid=' + child.bcuuid +
                    '  class="balert_button"  type="button" ' +
                    '  value="删除"  onclick="bookClassListTableItemClick(this)" >' +
                    '</td>');

            var $tr = $('<tr></tr>');
            $tr.append($td1);
            $tr.append($td2);
            $tr.append($td3);

            $table.append($tr);
        }

        $table.css({
            "height": "auto",
            "width": "6.4rem",
            "margin-left": "0.5rem",
            "margin-right": "0.5rem",
            "font-size": "0.14rem",
            "border:": "solid 1px #47802f",
            "table-layout": "fixed"
        });

        $(".bname").css({
            "height": "0.2rem",
            "width": "2rem",
            "font-size": "0.24rem",
            "border": "solid 0.5px #47802f",
            "white-space": "nowrap",
            "text-overflow": "ellipsis",
            "overflow": "hidden"
        });
        $(".bdesc").css({
            "height": "0.2rem",
            "width": "2.5rem",
            "font-size": "0.2rem",
            "border": "solid 0.5px #47802f",
            "white-space": "nowrap",
            "text-overflow": "ellipsis",
            "overflow": "hidden"
        });
        $(".balert").css({
            "height": "0.2rem",
            "width": "2rem",
            "font-size": "0.14rem",
            "border": "solid 0.5px #47802f",
            "white-space": "nowrap",
            "text-overflow": "ellipsis",
            "overflow": "hidden"
        });

        $('.balert_button').css(
            {
                "width": "1.8rem"
            }
        );
    }


}


function bookClassListTableItemClick(detalTag) {
    var bcuuid = detalTag.getAttribute("bcuuid");
    deleteBookClassRequest(bcuuid);
}

//删除书籍分类
function deleteBookClassRequest(bookClassUUid) {
    var url = deleteBookClassURL();
    $.post(
        url,
        {
            "bookUuid": encodeURI(bookClassUUid),
        },
        function (data, textStatus) {
            if (textStatus == "success") {
                console.log("响应数据为 " + decodeURI(data) + " 请求结果为  " + textStatus);
                alert("删除成功");
                getBookClassListData();
            }else{
                alert("删除成功 异常");
                console.log("异常 "+data);
            }
        }, "json");
}