/*
Autores
Thaís Barros Alvim - RA: 2020008082 
Thiago Henrique Cruz de Moura - RA: 2020023875
*/
var Debug = null
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
    console.log("Processando comentario: " + commentEl.value);
    AddComment(commentEl.value, postId);
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
  let userName = getUserName();
  let userImg = getUserImg();

  let commentList = document.querySelector(post + " .CommentList");
  console.log("CommentList: ", commentList);
  let commentEl = document.createElement("li");

  commentEl.innerHTML = `<div class="Comentario">
        <a href="#">
          <div class="UserId">
            <div class="UserAvatar">
              <img
                src="${userImg}"
                width="20" align="left" />
            </div>
            <p class="ComenUser">
              ${userName}
            </p>
          </div>
        </a>
        <div class="ComenCont">
          <p>${comment}</p>
        </div>
      </div>`;

  commentList.append(commentEl);
}


function CodeSnippedClick(param) {
  console.log("Clicked on CodeSnipped button");
  ButtonClick(param);
}
