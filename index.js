let scrollBox = document.getElementById("scrollDiv");

function addItem(start, end){
    for(let i = start; i <= end; i++){
        let h1 = document.createElement("h1");
        h1.setAttribute("id",`element${i}`)
        h1.textContent = `Masai student ${i}`;
        scrollBox.append(h1)
    }
}
let start = 1;
let end = 25;
addItem(start, end)

let lastElem = document.getElementById(`scrollBox`);
let id;

function getLastElemData(){
 let totalHeight = lastElem.scrollHeight;
 let totalScroll = lastElem.scrollTop;
console.log(["brain time",totalHeight,totalScroll])

 let distance = totalHeight - totalScroll;

 if(distance < 700){
 
    clearTimeout(id)

    id = setTimeout(()=>{
        console.log(distance)
       start += 25;
       end += 25;
       addItem(start, end)
    },200)
 }



}