import "../style/index.css";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: null,
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
          <img src="${variables.avatarURL}" class="photo" />
          <h1>${variables.name} ${variables.lastname}
          </h1>
          <h2>${variables.role}  </h2>
          <h3>${variables.city} ,${variables.country} </h3>
          <ul class="${variables.socialMediaPosition} ">
            <li><a href="https://twitter.com/${variables.twitter} "><i class="fab fa-twitter"> </i></a></li>
            <li><a href="https://github.com/${variables.github}"><i class="fab fa-github"> </i></a></li>
            <li><a href="https://linkedin.com/${variables.likedin}"><i class="fab fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/${variables.instagram}"><i class="fab fa-instagram"></i></a></li>
          </ul>
        </div>
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwYjW7sgE_roIxuQZ9bIHQY6aX5Gq-P8A53A&usqp=CAU",
    // this is the url for the profile avatar
    avatarURL:
      "data:image/jpeg;base64,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",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: null,
    github: null,
    linkedin: null,
    instagram: null,
    name: null,
    lastname: null,
    role: null,
    country: null,
    city: null
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
