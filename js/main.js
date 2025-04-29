// 1- create a web page that open existing small window and scroll it’s
// content to the end .
// Then from console try the following:
// a- check if the small window still opened, close it.
// b- Try to write your name on the small window document using
// document.write (what is the problem)

let newWindow = open("../newWindow.html", "_blank", "width = 500px,height = 500px");


if (!newWindow.closed) {
    newWindow.close()
}

newWindow.document.write("my name is karim naser");//the problem is new tab is gone and there is no document

// Find all images in page by two ways (document default
//     collection and document methods).

console.log(document.images);
console.log(document.querySelectorAll("img"));

console.log(document.querySelector("select").children);

console.log(document.querySelectorAll("td"));


// Find all elements that contain class name fontBlue and BGrey.

const elem1 = document.getElementById('p1');

if (elem1.classList.contains("fontBlue") & elem1.classList.contains("BGrey")) {
    console.log(elem1);
}

// 4- Display the date with time on the document title
// (document.title) which changed every second to show time with
// date.
// Note: use .toLocalString() method of the Date Object


setInterval(() => {
    let d = new Date();
    document.title = d.toLocaleString();

}, 100)

// Using location Object with simple HTML Form Page

function handleSubmit(e) {
    e.preventDefault()
   let str = location.search.substring(1)
   let parms = str.split("&");
   let obj = {};
   for(let item of parms) {
    let keyValue = item.split("=");
    let key = keyValue[0];
    let value = keyValue[1];
    obj[key] = value;
   }
   console.log(obj);
}