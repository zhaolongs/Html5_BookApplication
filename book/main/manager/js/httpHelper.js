/**
 * Created by androidlongs on 17/1/3.
 */

function baseURL() {
    return "http://localhost:10008/Book/";
}

function getBookListURL() {

    return baseURL() + "/book/list?time=" + new Date();
}
function getBookClassListURL() {
    return baseURL() + "manager/getbookclass?time=" + new Date();
}

function addBookURL() {
    return baseURL() + "/manager/addbook?time=" + new Date();
}
function addBookClassURL() {

    return baseURL() + "manager/addbookclass?time=" + new Date();
}

function deleteBookURL() {

}
function deleteBookClassURL() {
    return baseURL() + "manager/deletebookclass?time=" + new Date();
}

//修改书籍分类信息
function updateBookClassURL() {

}

//修改书籍信息
function updateBookURL() {

}