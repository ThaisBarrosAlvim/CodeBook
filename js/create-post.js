const languages = ["Python", "JavaScript", "Rust", "CSS", "HTML"];

function PostCreate() {
  console.log("Clicked on Post Create!");
  
  //handles the file input
  formFile = document.querySelector("#formFile");
  console.log("Submit file: " + formFile.files[0].name);
  formFile.value = '';

  //handles the language selector
  languageId = document.querySelector("#createPost .form-select").value;
  console.log("Selected language: " + languages[languageId])
}
