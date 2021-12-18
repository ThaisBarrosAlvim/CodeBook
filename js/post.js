/*
Autores
Thaís Barros Alvim - RA: 2020008082 
Thiago Henrique Cruz de Moura - RA: 2020023875
*/
// Like Button
async function LikeClick(param) {
  postID =
    param.parentElement.parentElement.parentElement.parentElement.parentElement
      .parentElement.id;
  postIdAPI = parseInt(postID.split("-")[1]);


  console.log("Clicked on Like button");
  let resp = await fetch("http://127.0.0.1:8000/code-book/api/click_like", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      post: postIdAPI,
      user: User.id,
    }),
  })
    .then((resp) => {
      return resp;
    })
    .catch((e) => console.log("ERRO12" + e));

  console.log(await resp);
  ButtonClick(param);
}

function ButtonClick(param) {
  let clicked = "btn-click";
  let unclicked = "btn-unclick";

  if (param.classList.contains(unclicked)) {
    param.classList.remove(unclicked);
    param.classList.add(clicked);
  } else {
    param.classList.remove(clicked);
    param.classList.add(unclicked);
  }
}


// Post submit

function PostSubmit(param) {
  console.log("Clicked on Post button");
  let postId = getPostId(param);
  let commentEl = document.querySelector(postId + " .card-footer input");
  if (commentEl.value) {
    postIdConverted = parseInt(postId.split("-")[1])
    AddComment(commentEl.value, postIdConverted);
    commentEl.value = null;
  } else {
    return;
  }
}

function getPostId(param) {
  return (
    "#" +
    param.parentElement.parentElement.parentElement.parentElement.parentElement
      .id
  );
}

function AddComment(comment, post) {
  fetch("http://127.0.0.1:8000/code-book/api/create_comment", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      creator: User.id,
      text: comment,
      post: post,
    }),
  })

  getFeedByFetch();
}


async function CodeSnippedClick(param) {
  postID =
    param.parentElement.parentElement.parentElement.parentElement.parentElement
      .parentElement.id;
  postIdAPI = parseInt(postID.split("-")[1]);

  console.log("Clicked on CodeSnipped button");
  let resp = await fetch("http://127.0.0.1:8000/code-book/api/click_snip", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      post: postIdAPI,
      user: User.id,
    }),
  })
    .then((resp) => {
      return resp;
    })
    .catch((e) => console.log("ERRO12" + e));

  console.log(await resp);
  ButtonClick(param);
}