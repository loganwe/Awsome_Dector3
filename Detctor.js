let output;
let Name = prompt("Enter your name");
let AreYouAwesome = () => {
  switch (Name) {
    case "Jackson":
      output = "Yes ";
      break;
    case "Mia":
      output = "Yes ";
      break;
    case "Hannah":
      output = "Yes ";
      break;
    case "Logan":
      output = "Yes ";
      break;
    case "Mom":
      output = "Yes ";
      break;
    case "Dad":
      output = "Yes ";
      break;
    case "Big'm":
      output = "Yes ";
      break;
    default:
      output = "No ";
  }
  if (output === "Yes ") {
    return output + Name + " is awesome!";
  } else {
    return output + Name + " is not awesome";
    // MailApp.sendEmail('12577@stjoebears.com','Hello,'+Name,' No you are not awesome');
  }
};
alert(AreYouAwesome());

// console.log(AreYouAwesome("Hannah"));
