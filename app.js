//CARDS ITEMS

const add = document.querySelector(".btn");
const container = document.querySelector(".container");

add.addEventListener("click", addItem);
container.addEventListener("click", removeItem);
container.addEventListener("click", changeColor);

function addItem(e) {
  e.preventDefault();
  //Create Item
  const item = document.createElement("div");
  item.classList.add("item");
  //Create delete button
  const delButton = document.createElement("button");
  delButton.innerText = "Remove";
  delButton.classList.add("delButton");
  //Create change color buttons
  const change = document.createElement("button");
  change.innerText = "Blue";
  change.classList.add("change", "blue");

  const change2 = document.createElement("button");
  change2.innerText = "Green";
  change2.classList.add("change2", "green");

  const change3 = document.createElement("button");
  change3.innerText = "Yellow";
  change3.classList.add("change3", "yellow");

  const change4 = document.createElement("button");
  change4.innerText = "Red";
  change4.classList.add("change4", "red");

  //Append div and buttons
  item.appendChild(delButton);
  item.appendChild(change);
  item.appendChild(change2);
  item.appendChild(change3);
  item.appendChild(change4);
  container.appendChild(item);
}

function removeItem(e) {
  const item = e.target;
  if (item.classList[0] === "delButton") {
    console.log("work2");
    const itemDiv = item.parentElement;
    itemDiv.remove();
  }
}

// function changeColor(e) {
//   const item = e.target;
//   if (item.classList[0] === "change") {
//     item.parentElement.classList.toggle("blue");
//   }
//   if (item.classList[0] === "change2") {
//     item.parentElement.classList.toggle("green");
//   }
//   if (item.classList[0] === "change3") {
//     item.parentElement.classList.toggle("yellow");
//   }
// }

function changeColor(e) {
  const item = e.target;
  if (item.classList[0] === "change") {
    item.parentElement.classList.add("blue");
    item.parentElement.classList.remove("green");
    item.parentElement.classList.remove("yellow");
    item.parentElement.classList.remove("red");
  }
  if (item.classList[0] === "change2") {
    item.parentElement.classList.add("green");
    item.parentElement.classList.remove("blue");
    item.parentElement.classList.remove("yellow");
    item.parentElement.classList.remove("red");
  }
  if (item.classList[0] === "change3") {
    item.parentElement.classList.add("yellow");
    item.parentElement.classList.remove("blue");
    item.parentElement.classList.remove("green");
    item.parentElement.classList.remove("red");
  }
  if (item.classList[0] === "change4") {
    item.parentElement.classList.add("red");
    item.parentElement.classList.remove("yellow");
    item.parentElement.classList.remove("blue");
    item.parentElement.classList.remove("green");
  }
}
