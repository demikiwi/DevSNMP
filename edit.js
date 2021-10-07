const json = require('./materiels.json')

for (var i=0; i<json.length; i++) {
  if (json[i].Id == 3) {
    json[i].Username = "choubi";
    break;
  }
}

alert("New Username: " + json[2].Username);