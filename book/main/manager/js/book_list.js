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
//添加书籍
function addBookRequest() {
    var url = addBookURL();
    console.log("添加书籍")
    var bookName = $('#book_name').val();
    var bookAuthor = $('#book_author').val();
    var bookDesc = $('#book_desc').val();

    if (bookName == null || bookName.length < 0) {
        alert("请输入书名")
        return;
    }
    if (bookAuthor == null || bookAuthor.length < 0) {
        alert("请输入书籍作者")
        return;
    }
    if (bookDesc == null || bookDesc.length < 0) {
        alert("请输入书籍描述")
        return;
    }

    if (!("FormData" in window)) {
        // FormData is not supported; degrade gracefully/ alert the user as appropiate
        alert("formData is not supported ");
        return;
    }

    var oData = new FormData(document.forms.namedItem("fileinfo"));
    oData.append("CustomField", "This is some extra data");
    var oReq = new XMLHttpRequest();
    oReq.open("POST", url, true);
    oReq.onload = function (oEvent) {
        if (oReq.status == 200) {
            alert("成功");

        } else {
            alert("失败" + oReq.status);
        }
    };
    oReq.send(oData);

}

function addBookGetBookClassListRequest(){
    var $bookClassSelect = $('#add_book_bookclass_select');

    var bookClassUrl = getBookClassListURL();

    $.get(
        bookClassUrl,
        {},
        function (data, textStatus) {
            if(textStatus == "success") {
                console.log("获取书籍分类列表 响应数据为 " + decodeURI(data) + " 请求结果为  " + textStatus);
                var obj = eval('(' + data + ')');
                var arr = obj.contentList;

                for (var i = 0; i <= arr.length; i++) {

                    if(i==0){
                    var $no = $('<option>无</option>');
                        $bookClassSelect.append($no);
                    }else{
                        var child = arr[(i-1)];
                        var $childOptions = $('<option>'+child.bcname+'</option>');
                        $bookClassSelect.append($childOptions);
                    }
                }


            }else{
                alert("获取书籍分类列表异常")
            }

        });
}


//删除书籍
function deleteBookRequest() {
    var url = deleteBookURL();
}
//修改书籍
function updateBookRequest() {
    var url = updateBookRequest();


}





function createBookListTable(data) {
    var resultObj = eval('(' + data + ')')
    //$("#book_list_table  tr:not(:first)").html("");
    $("#book_list_table  tr:not(:first)").remove();
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


    if (resultObj.length == 0) {
        $bookListTable.append($(
            '<tr><th colspan="4">无数据，请点击添加</th></tr>'
        ));
    } else {
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

    }
    $bookListTable.css({
        "height": "auto",
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
        "overflow": "hidden",
        "z-index":"10"
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


