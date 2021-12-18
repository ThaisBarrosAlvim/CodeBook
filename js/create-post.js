/*
Autores
Thaís Barros Alvim - RA: 2020008082 
Thiago Henrique Cruz de Moura - RA: 2020023875
*/

//Make a post
async function makePostByFetch(image, language) {
  var data = new FormData();
  data.append("image", image);
  data.append("creator", User.id);
  data.append("language", language);

  let resp = await fetch("http://127.0.0.1:8000/code-book/api/create_post", {
    method: "POST",
    body: data,
  })
    .then((resp) => {
      return resp;
    })
    .catch((e) => console.log("ERRO12" + e));

  console.log(resp);
  return resp;
}

// Create a Post
async function PostCreate() {
  console.log("Clicked on Post Create!");

  // Check the variables
  let formFile = document.querySelector("#formFile");
  let languageId = document.querySelector("#createPost .form-select");
  console.log("languageId: " + languageId.value);
  if (formFile.files.length == 0 || languageId.value < 0) {
    console.log("não validou");
    alert("Preencha todos os campos!");
    return;
  } else {
    console.log("validou");
  }
  //handles the file input
  let file = formFile.files[0];
  //Add the post
  let resp = await makePostByFetch(file, languageId.value);
  if (resp.ok) {
    getFeedByFetch();
    //clear the file input
    formFile.value = "";
    //clear the language selector
    document.querySelector("#createPost .form-select").value = -1;
    // Close modal
    closeOneModal("CreatePostModal");
  } else {
    alert("Erro ao postar: " + resp.statusText);
    return;
  }
}

function closeOneModal(modalId) {
  // get modal
  const modal = document.getElementById(modalId);

  // change state like in hidden modal
  modal.classList.remove("show");
  modal.setAttribute("aria-hidden", "true");
  modal.setAttribute("style", "display: none");

  // get modal backdrop
  const modalBackdrops = document.getElementsByClassName("modal-backdrop");

  // remove opened modal backdrop
  document.body.removeChild(modalBackdrops[0]);
}

