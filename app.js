const body = document.querySelector(".bod");
const tex = document.getElementById("text");
const btn = document.querySelector(".btn");
const array = [];
const addElement = () => {
  let word = tex.value.trim();
  return word;
};

const createElement = () => {
  if (addElement() === "") {
    return;
  }
  let lis = document.createElement("li");
  lis.innerHTML = `
  <input type="text" name="" id="te" />
        <div class="li-end">
          <h3 class="ed">Edit</h3>
          <h3 class="de">Delete</h3>
        </div>
  `;

  body.append(lis);
  lis.children[0].value = addElement();

  // body.input.value = addElement();
  lis.children[0].disabled = true;

  const obj = {
    id: Math.random(),
    data: addElement(),
  };
  array.push(obj);
  lis.querySelector(".ed").addEventListener("click", edi.bind(null, obj.id));
  lis
    .querySelector(".de")
    .addEventListener("click", deleteLis.bind(null, obj.id));
  clearInput();
};
const edi = (Id) => {
  let index = 0;
  //console.log(Id);
  for (const item of array) {
    if (item.id === Id) {
      break;
    }
    index++;
  }
  //console.log(index);
  body.children[index].querySelector("input").disabled = !body.children[
    index
  ].querySelector("input").disabled;
  array[index].data = body.children[index].querySelector("input").value;
};
const deleteLis = (Id) => {
  let index = 0;
  //console.log(Id);
  for (const item of array) {
    if (item.id === Id) {
      break;
    }
    index++;
  }
  //console.log(index);
  array.splice(index, 1);
  body.children[index].remove();
};
const clearInput = () => {
  tex.value = "";
};
btn.addEventListener("click", createElement);

addEventListener("keyup", function (event) {
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    createElement();
  }
});

// addEventListener("click", () => {
//   if (array.length !== 0) {
//     for (let i = 0; i < array.length; i++) {
//       body.children[i].querySelector("input").disabled = true;
//     }
//   }
// });
