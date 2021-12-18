/*
Autores
Thaís Barros Alvim - RA: 2020008082 
Thiago Henrique Cruz de Moura - RA: 2020023875
*/
var User = {};

window.onload = function getUserByFetch(){
  fetch("http://127.0.0.1:8000/code-book/api/user/1")
    .then((resp) => resp.json())
    .then((json) => {
      User.id = json.id
      User.username = json.username
      User.password = json.password
      User.profile_image = json.profile_image
      User.email = json.email
    });
}

function getFeedByFetch(){
  var url = new URL("http://127.0.0.1:8000/code-book/api/feed"),
    params = {user: User.id}
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
  fetch(url)
  .then((resp) => resp.json())
  .then((json) => {
    json.data.forEach((element) => {
      let postLiFeed = document.createElement("li");
      postLiFeed.innerHTML = `<article class="Post">
                        <div class="card text-center text-white m-5 my-post" style="width: 43rem">
                    
                          <div class="card-header">
                    
                            <a href="#">
                              <div class="UserId">
                                <div class="UserAvatar">
                                  <img
                                    src="${userImgPath}"
                                    width="35" align="left" />
                                </div>
                                <h1>${userName}</h1>
                              </div>
                            </a>
                    
                            <a href="#">
                              <div class="language-id">
                                <div class="language-box">
                                  <img src="${languageImg[1]}" alt="${languageImg[0]} Icon" />
                                  <p>${languageImg[0]}</p>
                                </div>
                              </div>
                            </a>
                    
                          </div>
                    
                    
                          <div class="card-body">
                    
                            <div class="PostImage">
                              <img class="card-img-top" src="src/img/image-post.png" alt="Card image cap" />
                            </div>
                    
                            <div class="PostIcons">
                    
                              <div class="like-button">
                                <button class="btn-unclick" onclick="LikeClick(this)">
                                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                    y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                                    <g>
                                      <g transform="translate(0.000000,511.000000) scale(0.100000,-0.100000)">
                                        <path
                                          d="M5921,4962.3c-112.8-59.8-179.5-154.2-289.9-405c-409.6-931.8-934.2-1704.9-1787.8-2632.2c-168-184.1-460.2-474-648.8-644.2c-497-453.3-529.2-487.8-570.6-623.5c-50.6-177.2-52.9-4440.6,0-4567.2c41.4-101.3,126.5-135.8,379.6-156.5c400.3-29.9,846.7-158.7,1339.1-384.2c324.4-151.9,455.6-186.4,913.4-250.8c524.6-73.6,1046.9-98.9,1716.4-85.1c895,18.4,1373.6,98.9,1797,303.7c453.3,218.6,607.4,549.9,455.6,966.4c-110.5,301.4-105.9,324.4,82.8,529.2c158.8,170.3,223.2,287.6,255.4,467.1c41.4,225.5-2.3,375.1-232.4,775.4c-71.3,126.6-55.2,177.2,122,356.6c193.3,200.2,255.4,331.3,255.4,540.7c0,209.4-59.8,361.2-237,595.9c-156.5,207.1-179.5,287.6-128.8,432.6c20.7,52.9,57.5,156.5,82.8,225.5c179.5,501.6-41.4,876.6-628.1,1056.1c-434.8,131.2-1274.6,165.7-2066.2,80.5c-474-48.3-579.8-52.9-591.3-18.4c-4.6,13.8,50.6,96.6,124.3,179.5C7034.6,2597,7269.3,3568,6903.5,4354.9C6673.4,4856.4,6233.9,5125.6,5921,4962.3z" />
                                        <path
                                          d="M389.8,970.3c-27.6-18.4-59.8-62.1-75.9-96.6c-18.4-48.3-25.3-750.1-20.7-2694.3l6.9-2632.2l64.4-55.2l64.4-55.2h598.2h600.5l66.7,66.7l66.7,66.7v2650.6V871.4l-66.7,66.7l-66.7,66.7h-595.9C546.2,1004.8,428.9,997.9,389.8,970.3z" />
                                      </g>
                                    </g>
                                  </svg>
                                </button>
                              </div>
                    
                              <div class="share-btn">
                                <button class="btn-unclick" onclick="ShareClick()">
                                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px"
                                    y="0px" viewBox="0 0 1000 1000" enable-background="new 0 0 1000 1000" xml:space="preserve">
                                    <g>
                                      <path
                                        d="M464.1,161.2H180.6c-39.6,0-75-2.8-75,37.3v567.6c0,40.1,32.1,72.6,71.7,72.6H751c39.6,0,71.7-32.5,71.7-72.6V621h95.6v242c0,40.1-32.1,72.6-71.7,72.6H81.7C42.1,935.6,10,903.1,10,863V137c0-40.1,32.1-72.6,71.7-72.6h382.4V161.2z" />
                                      <path
                                        d="M193.2,635.4c0,0,28.8-384.2,489.6-380.9V64.4L990,350.9L682.8,637.4V448.7C682.8,448.7,391.6,398.8,193.2,635.4z" />
                                    </g>
                                  </svg>
                                </button>
                              </div>
                    
                              <div class="code-snip-btn">
                                <button class="btn-unclick" onclick="CodeSnippedClick(this)">
                                  <svg  viewBox="0 0 45 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                      d="M22.4737 20.1011C22.1394 20.1011 21.8051 20.0048 21.5169 19.8128C20.197 18.9284 13.5285 14.2731 11.7736 9.39359C10.8742 6.89008 11.1034 4.50875 12.4183 2.68653C13.6379 1.01452 15.6719 0.0195704 17.8629 0.0195704C19.5626 0.0195704 21.162 0.591364 22.4851 1.65191C23.8103 0.590836 25.4336 0 27.1029 0C29.2885 0 31.323 0.998125 32.5426 2.6696C33.8635 4.49447 34.0938 6.88056 33.1922 9.39465C31.3853 14.4329 24.2324 19.2802 23.4229 19.8165C23.1358 20.0075 22.8053 20.1011 22.4737 20.1011ZM17.8624 3.32179C16.7631 3.32179 15.7591 3.79838 15.1772 4.59603C14.5135 5.51481 14.4365 6.83295 14.9637 8.29972C15.998 11.1761 19.8156 14.4974 22.4764 16.4244C25.044 14.5709 28.9596 11.2021 29.9999 8.30396C30.5298 6.82713 30.4523 5.50476 29.7842 4.58122C29.2013 3.78198 28.1968 3.30275 27.1023 3.30275C25.9613 3.30275 24.8381 3.84598 24.0205 4.79438L23.7745 5.07949C23.4522 5.45028 22.9803 5.6645 22.4829 5.6645C22.4802 5.6645 22.4786 5.6645 22.4758 5.6645C21.9758 5.66292 21.5022 5.44446 21.182 5.06944L20.9425 4.78804C20.1152 3.83223 19.0468 3.32179 17.8624 3.32179Z"
                                      fill="black" />
                                    <path
                                      d="M8.07031 18.0868C7.63795 18.0868 7.20451 17.9245 6.87455 17.6023L0.495345 11.3734C-0.165115 10.7287 -0.165115 9.68345 0.495345 9.03919L6.87455 2.81136C7.53501 2.16604 8.60616 2.16604 9.26608 2.81136C9.92708 3.45562 9.92708 4.50135 9.26608 5.14561L4.08263 10.2071L9.26608 15.2681C9.92654 15.9118 9.92654 16.9581 9.26608 17.6018C8.93612 17.9245 8.50322 18.0868 8.07031 18.0868Z"
                                      fill="black" />
                                    <path
                                      d="M36.8965 18.0869C36.4642 18.0869 36.0307 17.9245 35.7007 17.6023C35.0408 16.9575 35.0408 15.9123 35.7007 15.2686L40.8847 10.2076L35.7013 5.14614C35.0414 4.50188 35.0414 3.45615 35.7013 2.81136C36.3623 2.1671 37.4324 2.16657 38.0928 2.81189L44.4715 9.03973C45.1325 9.68398 45.1325 10.7292 44.4715 11.374L38.0923 17.6023C37.7623 17.9245 37.3289 18.0869 36.8965 18.0869Z"
                                      fill="black" />
                                  </svg>
                                </button>
                              </div>
                    
                            </div>
                    
                            <br />
                            <br />
                    
                            <ol class="CommentList">
                    
                            </ol>

                          </div>
                    
                    
                          <div class="card-footer my-footer-color">
                            <div class="Comentinput">
                              <input class="UserComment" type="text" placeholder="Add a comment..." />
                              <button class="post-btn" type="button" onclick="PostSubmit(this)">
                                Post
                              </button>
                            </div>
                          </div>
                    
                        </div>
                      </article>`;      
    });
  })
}

function updateFeedHeader(option) {
  let feedHeader = document.getElementById("feedHeader");
  feedHeader.children[0].innerText = option;
  getFeedByFetch();
}
