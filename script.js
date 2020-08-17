var button=document.getElementById("create");
var input=document.getElementById("input");//當按鈕被按時，出現input的打得值
var list=document.getElementById("list");//把hello塞進去html

//寫一個array儲存我們打的每個字 Storage寫完是表示重新整理完原本的操作不會消失
var todolist =JSON.parse(localStorage.getItem("listItems"))||[];
render();

//先對按鈕進行設定
button.addEventListener("click",addData);    //對按鈕進行監聽，當按鈕被按時，執行addData這個function

function addData(){
  if(input.value !=""){         //!=""是指輸入值為0不可按新增
    todolist.push(input.value)  //寫一個array儲存我們打的每個字 
    input.value="";                 //打完字輸入框內的字會消失
    render();                       //寫一個function把todolist印出來
  }                                    
}

//刪除資料後
//更新顯示畫面:render()
function delData(i){
  todolist.splice(i,1);
  render();
}

//印出todolist的function
function render(){
  var content="";
  for(var i=0;i<todolist.length;i++){   //把逗號拿掉
    content=content+"<div><button class='delete' onclick='delData("+i+")'>刪除</button>"+todolist[i]+"</div>";   
    //+div自動換行的概念 用"跟+連結i跟前後的字串(每一個""都是一個字串)因為i是字串不是變數所以只打i電腦不懂要幹嘛  藍色字體是變數綠色字體是字串
  }
  alert(content);        //確定點了一下有進addData這個function
  list.innerHTML=content;//再寫要顯示於htmlㄉCode
  localStorage.setItem("listItems",JSON.stringify(todolist));
}