
function newItem() {

   let li = $("<li></li>");
   let inputValue = $("#input").val();
   li.append(inputValue);

   if (inputValue === "") {
     alert("You must write something!");
   } else {
     let list = $("#list");
     $("#list").append(li);
   }

 //2. Crossing out an item from the list of items:
   function crossOut() {
 		li.addClass("strike");

 	 li.on("dblclick", function crossOut() {
     li.toggleClass("strike");
   });

 //3(i). Adding the delete button "X":
   let crossOutButton = $("<crossOutButton>X</crossOutButton>");
 	crossOutButton.append(document.createTextNode("X"));
  li.append(crossOutButton);

 	crossOutButton.on("click", deleteListItem);
 //3(ii). Adding CLASS DELETE (DISPLAY: NONE) from the css:
   function deleteListItem(){
 		li.addClass("delete")
 	}
 // 4. Reordering the items:
}
   $("#list").sortable();

}


// // 1. Adding a new item to the list:
// functon newItem() {
//
//   let li = $("<li></li>");
//   let inputValue = $("#input").val();
//   li.append(inputValue);
//
//   if (inputValue === "") {
//     alert("You must write something!");
//   } else {
//     $("#list").append(li);
//   }
//   button.on("click" append)
// //2. Crossing an item out:
//   function crossOut() {
// 		li.toggleClass("strike");
// 	}
//
// 	li.on("dblclick", function crossOut() {
// 		li.toggleClass("strike");
// 	});
// //3. Adding a delete button
//   let crossOutButton = $("<crossOutButton></crossOutButton>");
//   crossOutButton.append(document.createTextNode("X"));
//   li.append(crossOutButton);
//
// //   crossOutButton.on("click", deleteListItem);
// //   function deleteListItem(){
// // 		li.addClass("delete")
// // 	}
//    $("#list").sortable();
// }