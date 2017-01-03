/**
 * Created by androidlongs on 17/1/3.
 */
//welcome页面

var loadingRender = (function(){

    return{
        init :function(){
            $('.welcome_sec').css('display','block');
            window.setTimeout(function(){
               $('.welcome_sec').css('display','none');
                //进入首页面
                homeRender.init();
            },2000);
        }
    }
})();
loadingRender.init();



//book home页面
var homeRender = (function(){
    return{
        init : function(){
            //菜单
            $('.home_menu_div').css('display','block');
            $('.book_list_home').css('display','block');

            $('.book_class_home').css('display','none');
            $('.book_add_class_home').css('display','none');
            $('.book_add_book_home').css('display','none');

        }
    }
})();


//add book home页面
var addBookRender = (function(){
    return{
        init : function(){
            //add book
            $('.book_class_home').css('display','none');
            $('.book_add_class_home').css('display','none');
            $('.book_add_book_home').css('display','block');
            $('.book_list_home').css('display','none');

        }
    }
})();


//book class list  home页面
var bookClassListRender = (function(){
    return{
        init : function(){
            //book class list
            $('.book_class_home').css('display','block');
            $('.book_add_class_home').css('display','none');
            $('.book_add_book_home').css('display','none');
            $('.book_list_home').css('display','none');

        }
    }
})();

//book class list  home页面
var addBookClassRender = (function(){
    return{
        init : function(){
            //book class add
            $('.book_class_home').css('display','none');
            $('.book_add_class_home').css('display','block');
            $('.book_add_book_home').css('display','none');
            $('.book_list_home').css('display','none');

        }
    }
})();



//选择书籍列表
function selectBookListPage(){
   homeRender.init();
}
//选择添加书籍
function selectAddBookPage(){
    addBookRender.init();
}

//选择书籍分类列表
function selectBookClassListPage(){
    bookClassListRender.init();
}


//选择添加书籍分类
function selectAddBookClassPage(){
    addBookClassRender.init();
}