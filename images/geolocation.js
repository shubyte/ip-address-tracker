let query = "";
let endpoint = `http://ip-api.com/json/${query}?fields=583665`;

let xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    let response = JSON.parse(this.responseText);
    if (response.status !== "success") {
      console.log("query failed: " + response.message);
      return;
    }
    // Redirect
    console.log(response);
  }
};
xhr.open("GET", endpoint, true);
xhr.send();
