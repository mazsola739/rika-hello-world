function getOccuranceOfExpectedCharInString(name, expectedChar) {
  return (
    [...name].filter((char) => char.toLowerCase() === expectedChar).length % 10
  );
}

function add(number1, number2) {
  return (number1 + number2) % 10;
}

function calculate() {
  var name1 = document.getElementById("name1").value;
  var name2 = document.getElementById("name2").value;
  var names = name1 + " " + name2;

  var occurenceForI = getOccuranceOfExpectedCharInString(names, "i");

  var occurenceForL = getOccuranceOfExpectedCharInString(names, "l");
  var occurenceForO = getOccuranceOfExpectedCharInString(names, "o");
  var occurenceForV = getOccuranceOfExpectedCharInString(names, "v");
  var occurenceForE = getOccuranceOfExpectedCharInString(names, "e");

  var occurenceForY = getOccuranceOfExpectedCharInString(names, "y");
  var occurenceForU = getOccuranceOfExpectedCharInString(names, "u");

  document.getElementsByTagName("td")[0].innerHTML = occurenceForI;

  document.getElementsByTagName("td")[2].innerHTML = occurenceForL;
  document.getElementsByTagName("td")[3].innerHTML = occurenceForO;
  document.getElementsByTagName("td")[4].innerHTML = occurenceForV;
  document.getElementsByTagName("td")[5].innerHTML = occurenceForE;

  document.getElementsByTagName("td")[7].innerHTML = occurenceForY;
  document.getElementsByTagName("td")[8].innerHTML = occurenceForO;
  document.getElementsByTagName("td")[9].innerHTML = occurenceForU;

  var td13 = add(occurenceForI, occurenceForL);
  var td14 = add(occurenceForL, occurenceForO);
  var td15 = add(occurenceForO, occurenceForV);
  var td16 = add(occurenceForV, occurenceForE);

  var td18 = add(occurenceForE, occurenceForY);
  var td19 = add(occurenceForY, occurenceForO);
  var td20 = add(occurenceForO, occurenceForU);

  document.getElementsByTagName("td")[13].innerHTML = td13;
  document.getElementsByTagName("td")[14].innerHTML = td14;
  document.getElementsByTagName("td")[15].innerHTML = td15;
  document.getElementsByTagName("td")[16].innerHTML = td16;

  document.getElementsByTagName("td")[18].innerHTML = td18;
  document.getElementsByTagName("td")[19].innerHTML = td19;
  document.getElementsByTagName("td")[20].innerHTML = td20;

  var td25 = add(td13, td14);
  var td26 = add(td14, td15);
  var td27 = add(td15, td16);

  var td29 = add(td16, td18);
  var td30 = add(td18, td19);
  var td31 = add(td19, td20);

  document.getElementsByTagName("td")[25].innerHTML = td25;
  document.getElementsByTagName("td")[26].innerHTML = td26;
  document.getElementsByTagName("td")[27].innerHTML = td27;

  document.getElementsByTagName("td")[29].innerHTML = td29;
  document.getElementsByTagName("td")[30].innerHTML = td30;
  document.getElementsByTagName("td")[31].innerHTML = td31;

  var td37 = add(td25, td26);
  var td38 = add(td26, td27);

  var td40 = add(td27, td29);
  var td41 = add(td29, td30);
  var td42 = add(td30, td31);

  document.getElementsByTagName("td")[37].innerHTML = td37;
  document.getElementsByTagName("td")[38].innerHTML = td38;

  document.getElementsByTagName("td")[40].innerHTML = td40;
  document.getElementsByTagName("td")[41].innerHTML = td41;
  document.getElementsByTagName("td")[42].innerHTML = td42;

  var td49 = add(td37, td38);

  var td51 = add(td38, td40);
  var td52 = add(td40, td41);
  var td53 = add(td41, td42);

  document.getElementsByTagName("td")[49].innerHTML = td49;

  document.getElementsByTagName("td")[51].innerHTML = td51;
  document.getElementsByTagName("td")[52].innerHTML = td52;
  document.getElementsByTagName("td")[53].innerHTML = td53;

  var td62 = add(td49, td51);
  var td63 = add(td51, td52);
  var td64 = add(td52, td53);

  document.getElementsByTagName("td")[62].innerHTML = td62;
  document.getElementsByTagName("td")[63].innerHTML = td63;
  document.getElementsByTagName("td")[64].innerHTML = td64;

  var td75 = add(td63, td64);
  var td73 = td62 + td63 === 10 && td75 === 0 ? 1 : "";
  var td74 =
    (add(td62, td63) === 0 && td73 === 1) || add(td62, td63) !== 0
      ? add(td62, td63)
      : "";
  var td76 = "%";

  document.getElementsByTagName("td")[73].innerHTML = td73;
  document.getElementsByTagName("td")[74].innerHTML = td74;
  document.getElementsByTagName("td")[75].innerHTML = td75;
  document.getElementsByTagName("td")[76].innerHTML = td76;

  // the result without the % sign, for example "96" or "100"
  return "" + td73 + td74 + td75;
}

function howManyMissing() {
  var message = document.getElementById("missing");
  var name2 = document.getElementById("name2");
  var originalName2 = name2.value;

  if (calculate() === "100") {
    message.innerHTML = "Nothing is missing, it's already 100%!";
    return;
  }

  // try adding 0-9 "l", 0-9 "i" and 0-9 "u" letters to name #2
  // (with these 3 letters every pair of names can reach 100%)
  var answer = "";
  for (var l = 0; l < 10; l++) {
    for (var i = 0; i < 10; i++) {
      for (var u = 0; u < 10; u++) {
        var extra = "l".repeat(l) + "i".repeat(i) + "u".repeat(u);
        name2.value = originalName2 + extra;

        // keep the shortest one (<= so that more "l" wins, like in the story)
        if (calculate() === "100" && (answer === "" || extra.length <= answer.length)) {
          answer = extra;
        }
      }
    }
  }

  // put the original name back
  name2.value = originalName2;
  calculate();

  message.innerHTML = "Missing: " + answer;
}

// ---- Contact me ----
// The form sends the message to Web3Forms (https://web3forms.com), which e-mails it to me.
// This key is meant to be public: it can only send messages to my own inbox.
var contactFormKey = "8674bf2a-c248-426a-aed4-379fa983cb34";

function openContact() {
  document.getElementById("contact").showModal();
}

function closeContact() {
  document.getElementById("contact").close();
}

// a click on the dark page around the window closes it too
document.getElementById("contact").addEventListener("click", function (event) {
  if (event.target === event.currentTarget) {
    closeContact();
  }
});

function sendMessage(event) {
  event.preventDefault(); // don't reload the page

  var form = event.target;
  var sendButton = document.getElementById("send");
  var status = document.getElementById("status");

  var message = Object.fromEntries(new FormData(form));
  message.access_key = contactFormKey;
  message.subject = "Matchmaker: a message from " + message.name;
  message.from_name = "Matchmaker contact form";

  sendButton.disabled = true;
  sendButton.innerHTML = "Sending…";
  status.innerHTML = "";

  fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify(message),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      if (result.success) {
        form.reset();
        status.innerHTML = "Thank you! Your message is on its way, I'll write back soon.";
      } else {
        status.innerHTML = "Sorry, the message couldn't be sent. Please try again a bit later.";
      }
    })
    .catch(function () {
      status.innerHTML = "Sorry, the message couldn't be sent. Please try again a bit later.";
    })
    .finally(function () {
      sendButton.disabled = false;
      sendButton.innerHTML = "Send message";
    });
}
