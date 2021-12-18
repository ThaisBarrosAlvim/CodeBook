/*
Autores
Thaís Barros Alvim - RA: 2020008082 
Thiago Henrique Cruz de Moura - RA: 2020023875
*/


async function LogUser(name, pass) {
  let resp = await fetch("http://127.0.0.1:8000/code-book/api/login", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({
      username: name,
      password: pass
    }),
  })
    .then((resp) => {
      return resp;
    })
    .catch((e) => console.log("ERRO12" + e));

  console.log(await resp);
  return resp;
}

async function Login() {
  console.log("Login function!");
  pass = document.getElementById("InputPassword").value;
  user = document.getElementById("InputUsername").value;

  const resp = await LogUser(user, pass);
  if (resp.ok) {
     window.location.href = "/index.html";
  } else {
    console.log(resp);
    alert("Erro ao logar: " + resp.statusText);
  }
}

