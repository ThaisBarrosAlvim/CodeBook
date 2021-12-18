/*
Autores
Thaís Barros Alvim - RA: 2020008082 
Thiago Henrique Cruz de Moura - RA: 2020023875
*/

async function CreateUser(name, pass, mail, image) {
  let resp = await fetch("http://127.0.0.1:8000/code-book/api/create_user", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username: name,
      password: pass,
      email: mail,
      profile_image: image,
    }),
  }).then((resp) => {

      return resp;
    
  })
    .catch((e) => console.log("ERRO12" + e));
  
  console.log(await resp);
  return resp;
}

async function SignUp() {
  console.log("SignUp function!");
  pass = document.getElementById("InputPassword").value;
  user = document.getElementById("InputUsername").value;
  iemail = document.getElementById("InputEmail").value;

  const resp = await CreateUser(user, pass, iemail, null);
  if (resp.ok) {
    window.location.href = "/index.html";
  } else {
    console.log(resp);
    alert("Erro ao logar: " + resp.statusText);
  }
}
