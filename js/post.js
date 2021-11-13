String.prototype.format = String.prototype.format = function () {
  var s = this,
    i = arguments.length;

  while (i--) {
    s = s.replace(new RegExp("\\{" + i + "\\}", "gm"), arguments[i]);
  }
  return s;
};

const UserName = "Markinho";
const UserPicture =
  "https://conteudo.imguol.com.br/c/noticias/21/2019/10/31/ceo-mark-zuckerberg-tem-defendeu-regras-da-plataforma-diante-de-protestos-1572539681496_v2_1x1.jpg";

// Get environment variables
function getUserName() {
  return UserName;
}

function getUserImg() {
  return UserPicture;
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
  let postId = "#" + param.classList[1];
  let commentEl = document.querySelector(postId + " .card-footer input");
  if (commentEl.value) {
    console.log("Processando comentario: " + commentEl.value);
    AddComment(commentEl.value, postId);
    commentEl.value = null;
  } else {
    return;
  }
}

function AddComment(comment, post) {
  userName = getUserName();
  userImg = getUserImg();

  commentList = document.querySelector(post + " .CommentList");
  console.log("CommentList: ", commentList);
  let commentEl = document.createElement("li");

  let test = "dede ${userName}";
  commentEl.innerHTML =
    '<div class="Comentario"> \
                      <div class="UserId"> \
                        <div class="UserAvatar">  \
                          <img\
                            src="{0}" \
                            width="20" \
                            align="left" \
                          /> \
                        </div> \
                        <p class="ComenUser"> \
                      <a href="#"> \
                        {1} \
                      </a> \
                    </p> \
                        <p class="ComenCont">{2}</p> \
                      </div> \
                    </div>'.format(
      userImg,
      userName,
      comment
    );

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
