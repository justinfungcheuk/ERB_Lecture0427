var a = 2;
b = 1; // expliction 
function f(z){
    b = 3;
    c = 4;
    var d = 6;
    e = 1;
    function g(){
        var e = 0;
        d = d * 3;
        return d;}
    return g;
    var e}
    var myG = f(1);
    myG();


// Closure local / global variable - f() 在 f內的所有資料會儲存起來
// closure代表將variable的資料先儲存起來，有需要時再使用
// 必須運行一次 excution content，它的生態環境會先把運行的資料儲存起來，再使用
    /* passing pharse:
       a
       f:{b=c;c=4..... {(prototype)}}
       myG
    */

    /**
     * excution pharse
     * a=2
     * b=1 當 passing pharse不存在時， js會創建一個
     * 
     */

    /** f
     * z=1
     * d=6
     * g:f()
     * 
     * e=1
     */


    /**
     * g 的 excution contents
     * ----
     * e=0
     * return後就會將之前運行的數據刪除及得出最後的答案
     */


    /**
     * [[scope]] - 會將之前得到的數值，儲存起來在需要時使用
     * - 表示那一個 function call 我
     * - excution content 裡面是哪一個 call 我 
     * [[closure]]
     * - [[closue]] = 0
     */



    /** 構造函數 constructor
     * current = new Date()
     * 如果不寫 new 就要做以下步驟
     * curretn._ _proto_ _ = date.prototype
     * 
     * 當中的 date 內部包含結構如下例子：
     * class function
     * date = a{
     * YEAR:
     * MONTH:
     * DAY:
     * TIME:
     * SEC:
     * }
     * - current = {內部有 prototype}
     * 
     * notes [{}, {}, {}]
     * note = {} 該單數 note 是由 雙數的 notes 抽出來的
     * 
     */


    /**
     * 
     * for(statement1; statement2; statement3){
     * // code to be excuted
     * }
     * 
     * 
     * let i = 0 可以擺在 for loop 之前
     * for(let i=0; i <= 10; i++){
     * i++
     * } 
     * syntax上，for loop 運行完 {} 該括號內的代碼，才會運行 i++，所以它也可以不寫在 for loop 的括號內
     * 
     * 當中的 i<= 10 是一個 expression statment 用於決定該 expression 是否可行
     */

    /**
     * function a(z) {
     * var a, b
     * }
     * 
     * ------------------
     * z=1 
     * excution content 註冊了 z=1後，所以就可以運行 pssing pharse 和 excution phase
     */

    /**
     * x = 4
     * y = "ALAN"   當中有 on 及 off 的機制，當它完成運行後會 off，就會形成刪除的結果
     * 
     * if(y="ALAN" && x="ALAN")  該整個代碼是一個 expression
     * z="ALAN"
     * "ALAN"=3 因為 ALAN出現了三次
     * 其中 on 和 off 的操作就是：
     * 當運行完 y="ALAN"就會將 "ALAN"=2, 運行完 x="ALAN" 就會將 "ALAN"=2,最後運行完 z="ALAN"，"ALAN"=0 此時就代表啟動了 off
     * 
     */


    /**
     * for in array
     * 結果會出現 1，2，3，4 等等
     * 
     * array 4大天王 - 最常用的 array方法
     * for each
     * map
     * filter
     * reduce
     * 
     */

    /**
     * "Hello" + name + "!"
     * 
     * ES6寫法 `Hello${name}!`
     * 
     * template literal 模板字面量
     */

    /**
     * function declaration
     * function a(){}
     * 
     * 
     * -----------------------------------------
     * 所有 function 都是一個地址 address
     * 例如：a = function x(){}
     * 當中 function x(){} 是一個 address，將它儲存到 a裡面
     * -----------------------------------------
     * 
     * function expression 是先寫 function該地址，再將它賦予 a
     * 例子：
     * let a = function x(){}
     * 注意！function expression 的好處：
     * - 不會佔用太多空間，所以會節省空間，在需要用時才調用它
     * - 有需要時調用該 function expression 即可， 我們可以在任何的行數調用它 a()，即使只調用一次也可以
     * 
     * 什麼時候用 function expression 和 什麼時候用 function declaration?
     * 
     * 
     * 
     * a = function x(){}
     * b = function y(){}
     * c = function z(){}
     * a(b(c))
     * 當處理debug時，為 function 加上名字，例如上題 x，y，z，可以方便找到那一個 function 出了問題
     * 如果沒有 x，y，z的匿名函數 anonymous function，則會出現我們不知道那一個 function expression 出了問題
     *
     */

    /**
     * 括號代表是 expression
     * arrow function 是 簡體版的 function expression / declaration
     * a = (a,b) => {
     * }
     */

    /**
     * IFFE
     * (function a(){})()  //沒有註冊該function address
     * - 有後面的 () 代表運行該 (function a(){})
     * - IFFE 內的代碼只會運行一次
     * IFFE好處：
     * - 運行一次後不再出現，只做一次，之後就會消失
     * - 可以寫一個 block () 內有很多function時，(function a(){}, function b(){}, functionc(){})也只會運行一次就消失
     * 
     * - Jquery 就是用 IFFE寫，用完即棄，即是用完一次就消失
     *  --》Jquery 有很多 searching
     */

    /**
     * a = {name:b}
     * a.bind(c)
     * 將 b 地址與 c 結合
     * 
     * 
     */