// // window.onload=()=>{
// //     document.querySelector(".ss").style.display="none"
// // }

// // const numbers = "abdelrahman"
// // let y= numbers.split("")
// // let z = y.reverse()
// // let x = y.join("")


// // const maxNumber = ;
// // console.log(x);
// let y=document.querySelector("#t")
// let z=document.querySelector("#count")
// let s=document.querySelector("#s")


// // function cal ( num1,op ,  num2 ){
// //   return [num1,op,num2]


// // }

// // s.onclick=()=>{
// //   if(y.value== ""  ){
// //     console.log("nn")
// //     z.innerHTML="the value shouldn`t empty"
// //     z.style.color="red"
// //   }else if(y.value.length >= 3 ){
// //     console.log("z")
// //     z.innerHTML="success"
// //     z.style.color="green"
// //   }else if(y.value.length < 3){
// //     console.log("f")
// //        z.innerHTML="the value should greater than 3"

// //   }
  
// // }


/////////////////////////////////////////////////////

// // let zff =
// function ss(){
//   zz++;
//   if(zz >= arr.length  ){
//     zz = 0
//     document.querySelector(".im").src=arr[zz]

//   }else{
//     document.querySelector(".im").src=arr[zz]
//   }
// setTimeout("ss()", 2000)
// }
// ss()
// n.onclick=zff




let n=document.querySelector(".next")
let pre=document.querySelector(".pre")


let arr = ["img/1.jpg" ,"img/2.jpg","img/3.jpg",]

// var ff = 0;
// let zz= 0;

// pre.onclick=
// function coc(){
//     ff--;
//   if(ff < 0 ){
//      ff = arr.length - 1
//     document.querySelector(".im").src=arr[ff]
//   }else{
//     document.querySelector(".im").src=arr[ff]
//   }
//  setTimeout("coc()", 2000)

// }


// coc()

///////////////////////////////////////


let u =document.querySelectorAll(".cor button")

let cor = Array.from(u)
cor.map((element)=>{
  element.onclick=()=>{
    let des = element.nextElementSibling;
    des.classList.toggle("show")
  }

})




let q = 0;
// function slidar(){
  
//   if( q >= arr.length  ){
//     q = 0

//     document.querySelector("div img").src=arr[q]
//   }else{
//     document.querySelector("div img").src=arr[q]
//   }
//   q++
//   setTimeout("slidar()",2000)
// }
// slidar()
document.querySelector("div img").src=arr[q]
n.onclick=()=>{
  q++
  if( q >= arr.length ){
    q = 0 
    document.querySelector("div img").src=arr[q]

  }else{
    document.querySelector("div img").src=arr[q]

  }

}
pre.onclick=()=>{
  q--
  if( q < 0 ){
    q = 2 
    document.querySelector("div img").src=arr[q]

  }else{
    document.querySelector("div img").src=arr[q]

  }

}