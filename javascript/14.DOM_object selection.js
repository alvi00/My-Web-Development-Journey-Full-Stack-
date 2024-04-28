// DOM (Document Object Model) represents the structure of an HTML document as a tree of objects.
// In the following code snippet, we first locate an HTML element with the ID "mainimg" in the DOM.
let imgobj=document.getElementById("mainimg");
//when we select by id then it returns an Object
// Then, we set the 'src' attribute of the found element to "Assets/Man.png".
imgobj.src="Assets/Man.png";
