


var product = document.getElementById('product');
var price = document.getElementById('price');
var type = document.getElementById('type');
var submit = document.getElementById('submit');
var boxModal = document.querySelector(".nocontent");
var suuccessdiv = document.querySelector(".suuccessdiv");
var upadatesuccess = document.querySelector(".upadatesuccess");



var InvalidpAddedProduct = document.querySelector(".InvalidpAddedProduct");

var delallbtn = document.querySelector(".delallbtn");
var validname  = document.getElementById('validname');
var valideprice  = document.getElementById('valideprice');
var validtype  = document.getElementById('validtype');
var close  = document.getElementById('close');






   
// console.log(product + price + type + submit +"hr");


var temp // var global whmy 3shan ast5dm {i} bta3t update fe mkan tane

var mood = 'create'



                    //  crud \\

// var datapro =[];
//   8lt kbeer awy l2n lma a3ml reload localstorage h tfda

var datapro ;
if(localStorage.product != null){
 datapro = JSON.parse(localStorage.product)  

//  When receiving data from a web server, the data is always a string.

//  Parse the data with JSON.parse(), and the data becomes a JavaScript object.

}else{
    datapro = [];

}

submit.onclick = function () {
    
   

  if (validation()===true) {
    let newprod =
    { product:product.value,
      price:price.value,

      type:type.value
        
    }
   
    if(mood === 'create'){
        datapro.push(newprod)


        suuccessdiv.classList.replace("d-none","d-flex");
    const myTimeout = setTimeout(x, 3000);

    function x() {
        suuccessdiv.classList.replace("d-flex","d-none");
    }
    
    
     }else{
        datapro[temp]= newprod;
        submit.innerHTML =  "update";
        mood ='create'
        document.getElementById("submit").value = "Add product";
   console.log("updaated");

      

    
     }
     console.log(datapro);
         localStorage.setItem('product', JSON.stringify(datapro))
         displayproducts( datapro)
         clearform() 

    
  }

  else{
    console.log("NOt valid input");
    // InvalidpAddedProduct.classList.replace("d-none","d-flex");
       
    InvalidpAddedProduct.classList.replace("d-none","d-flex");
    const myTimeout = setTimeout(x, 5000);

    function x() {
        InvalidpAddedProduct.classList.replace("d-flex","d-none");

    }
  }
  
  checkarray()
}













function displayproducts( list) {
    var cartoona = ""
    var i ;
    for (var i = 0 ; i <list.length; i++) {
        // console.log(list[i]);
        cartoona = cartoona + 
        `
        <tr> 		
        			<td>${i+1}</td>
					<td>${list[i].product}</td>
					<td>${list[i].price}</td>
					<td>${list[i].type}</td>
					<td> 
                    <button onclick="deleteproduct(${i})" type="button" class="btn btn-warning">delete</button>
					</td>

                    <td> 
                    <button onclick="updateproduct(${i})"  type="button" class="btn btn-success">update</button>

					</td>
                   
				</tr>
        `
        //i+1 awl wa7da 3san nbyn rkm el product
    } 
    
    document.getElementById("products").innerHTML = cartoona
    // checkarray()
}

function clearform() {

    product.value="",

    price.value="",

    type.value=""

 // 3lama s7 bta3t validation
    validname.innerHTML= ''
        ;
        valideprice.innerHTML =''
        validtype.innerHTML =''

        
}


function deleteproduct(index) {
    datapro.splice(index,1)
 displayproducts( datapro) 
 localStorage.setItem('product', JSON.stringify(datapro))
 checkarray();
}

function DeleteAll(index) {
    console.log("All");

    datapro.splice(index,datapro.length)
    displayproducts( datapro) 
    localStorage.setItem('product', JSON.stringify(datapro))
    console.log("All");
    refreshPage()


}



displayproducts(datapro)  
//3shan daymn tkon bayna awl lma ad5l



function updateproduct(i) {
    // console.log(i);

    product.value = datapro[i].product
    price.value = datapro[i].price
    type.value = datapro[i].type
  

    //
    document.getElementById("submit").value = "Update All";
    
   mood = 'update';

   temp = i

   scroll({
    top : 0 ,
    behavior:'smooth'
   })



}



function searchproduct() {


    var keyword =document.getElementById("searchproduct").value;

    var matchedlist =[];  ///zy container kda
      for (let i = 0; i < datapro.length; i++) 
      {
          console.log(            datapro[i].product.toLowerCase().includes(keyword.toLowerCase())
  
              );
  
     if 
      (     datapro[i].product.toLowerCase().includes(keyword.toLowerCase())
      )
      { 
        
        matchedlist.push(datapro[i])
          console.log(matchedlist);



          displayproducts(matchedlist);
          
        //   datapro[i].product = datapro[i].product.
        //                toLowerCase()
        //              .replace(
        //               keyword,
        //               `            
        //               <span class="text-danger ">${keyword}</span>
        //               `
        //           )
          
      }
      else{
  
      }
  
      
      }
     
   }
  
  
  



function checkarray() {
   if(Array.isArray(datapro) && datapro.length)
   {
       output = true;

   }else{
    output = false;
    boxModal.classList.remove("d-none");
    delallbtn.classList.replace("d-block","d-none")

   }
    console.log(output);



   }



   checkarray();


   
function validation() {
    
    var pnamregex =/^[0-9A-Za-z ]{3,20}$/;
    var pnamregex22 =/^[0-9]{1,6}$/;
    var regex = /(^mobile$|^screen$)/;




    var y = product.value
    var q = price.value
    var s = type.value.toLowerCase()
    if (pnamregex.test(y) == true  && pnamregex22.test(q)==true && regex.test(s) == true ) {
        // console.log("match");
        validname.innerHTML=`<p class="text-success d-flex "><i class="fa-solid fa-check"></i> valid value</p>`
        ;
        valideprice.innerHTML =`<p class="text-success"><i class="fa-solid fa-check"></i> valid value</p>`
        validtype.innerHTML =`<p class="text-success"><i class="fa-solid fa-check"></i> valid value</p>`

        const myTimeout = setTimeout(bb, 5000);
    
        function bb() {
            validname.classList.replace("d-flex","d-none");
    
        }


       

        



        return true;
        
    }else{
        console.log("not match");
         
        validname.innerHTML=`<p class="text"><i class="fa-solid fa-xmark"></i> Must contain 3 characters at least and not more than 11</p>`
        valideprice.innerHTML=`<p class="text"><i class="fa-solid fa-xmark"></i> Must be Number between 1:1,000,000)</p>`
        validtype.innerHTML=`<p class="text"><i class="fa-solid fa-xmark"></i> choose between mobile or screen  )</p>`



        return false;
    }
    
    }

    function refreshPage(){
        window.location.reload();
    } 