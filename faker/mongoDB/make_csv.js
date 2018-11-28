// var fsex = require("fs-extra");

// const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// const lowercase = "abcdefghijklmnopqrstuvwxyz";

// var field = "id,name,producer,length\n";

// var data = field;

// var random_uppercase = function () {
//   return uppercase.charAt(Math.floor(Math.random() * uppercase.length));
// }

// var random_lowercase = function () {
//   return lowercase.charAt(Math.floor(Math.random() * lowercase.length));
// }

// var random_string = function () {
//   str = random_uppercase();
//   l = Math.round(Math.random() * 6) + 1;
//   for (i = 0; i < l; i++) {
//     str = str + random_lowercase();
//   }

//   str = str + " " + random_uppercase();

//   l = Math.round(Math.random() * 6) + 1;
//   for (i = 0; i < l; i++) {
//     str = str + random_lowercase();
//   }

//   return str;
// }

// var fake_data = function () {
//   console.log(new Date().getHours().toString() + "h" + new Date().getMinutes().toString() + "m" + new Date().getSeconds().toString());
//   fsex.writeFileSync("fake_data_film.csv", data);
//   for (var i = 1; i <= 100 ; i++) {
//     text = i.toString() + "," + random_string() + "," + random_string() + "," + (Math.round(Math.random() * 290) + 10).toString() + "\n";
//     fsex.appendFileSync("fake_data_film.csv", text);
//   }

//   console.log("done.");
//   console.log(new Date().getHours().toString() + "h" + new Date().getMinutes().toString() + "m" + new Date().getSeconds().toString());
// }

// fake_data();

var fsex = require("fs-extra");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";

var field = "id,firstname,lastname,age,email\n";

var data = field;

var random_uppercase = function () {
  return uppercase.charAt(Math.floor(Math.random() * uppercase.length));
}

var random_lowercase = function () {
  return lowercase.charAt(Math.floor(Math.random() * lowercase.length));
}

var random_string = function () {
  str = random_uppercase();

  l = Math.round(Math.random() * 6) + 1;
  for (i = 0; i < l; i++) {
    str = str + random_lowercase();
  }

  str = str + " " + random_uppercase();

  l = Math.round(Math.random() * 6) + 1;
  for (i = 0; i < l; i++) {
    str = str + random_lowercase();
  }

  return str;
}

var random_email = function () {
  str = "";
  l = Math.round(Math.random() * 6) + 1;
  for (i = 0; i < l; i++) {
    str = str + random_lowercase();
  }

  str = str + "@";

  l = Math.round(Math.random() * 6) + 1;
  for (i = 0; i < l; i++) {
    str = str + random_lowercase();
  }

  return str + ".com"
}

var fake_data = function () {
  console.log(new Date().getHours().toString() + "h" + new Date().getMinutes().toString() + "m" + new Date().getSeconds().toString());
  fsex.writeFileSync("fake_data_user.csv", data);

  for (var i = 1; i <= 100; i++) {
    text = i.toString() + "," + random_string() + "," + random_string() + "," + (Math.round(Math.random() * 65) + 5).toString() + "," + random_email() + "\n";
    fsex.appendFileSync("fake_data_user.csv", text);
  }
  // text = "";
  // for (var i = 0; i < 100; i++) {
  //   text = text + (++id).toString() + "," + random_string() + "," + random_string() + "," + (Math.round(Math.random() * 65) + 5).toString() + "," + random_email() + "\n";
  // }
  // data = data + text;
  // fsex.writeFileSync("fake_data_user.csv", data);
  // console.log("done.");
  console.log(new Date().getHours().toString() + "h" + new Date().getMinutes().toString() + "m" + new Date().getSeconds().toString());
}

fake_data();