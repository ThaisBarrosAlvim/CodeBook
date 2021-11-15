const languages = [
  ["Python", "src/img/python.png"],
  ["Javascript", "src/img/js-logo.png"],
  ["Ruby", "src/img/ruby-logo.png"],
  ["CSS", "src/img/css-logo.png"],
  ["HTML", "src/img/html-logo.png"],
];


const UserName = "Markinhos";
const UserPicture =
  "https://conteudo.imguol.com.br/c/noticias/21/2019/10/31/ceo-mark-zuckerberg-tem-defendeu-regras-da-plataforma-diante-de-protestos-1572539681496_v2_1x1.jpg";

// Get environment variables
function getUserName() {
  return UserName;
}

function getUserImg() {
  return UserPicture;
}

function getLanguageImg(index) {
  return languages[index];
}

// Like Button

function LikeClick(param) {
  console.log("Clicked on Like button");
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

function ActivateClick(element) {}

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

function ShareClick() {
  console.log("Clicked on Share button");
  alert("Compartilhar não implementado!");
}

function CodeSnippedClick(param) {
  console.log("Clicked on CodeSnipped button");
  ButtonClick(param);
}
