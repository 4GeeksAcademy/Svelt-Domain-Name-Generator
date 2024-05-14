/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./index.html";

function generateDomainNames() {
  let pronouns = ["the", "our"];
  let adjectives = ["great", "big"];
  let nouns = ["jogger", "racoon"];
  let ends = [".com", ".net"];
  const domainNames = [];

  for (const pronoun of pronouns) {
    for (const adjective of adjectives) {
      for (const noun of nouns) {
        for (const end of ends) {
          const domainName = `${pronoun}${adjective}${noun}${end}`;
          domainNames.push(domainName);
        }
      }
    }
  }
  return domainNames;
}

window.onload = () => {
  const button = document.querySelector("#domainbutton");
  const p = document.querySelector("#domain");
  button.onclick = () => {
    p.innerHTML = generateDomainNames().join(
      '<marquee><i class="fa-solid fa-flag-checkered" style="color: #511F1F;"></i></marquee>'
    );
  };
};



