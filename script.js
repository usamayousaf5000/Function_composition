function insertCard(isInserted) {
    return isInserted ? "Card Accepted!" : "Please insert card first";
  }
  
  function enterPin(cardStatus, pin) {
    if (cardStatus !== "Card Accepted!") {
      return cardStatus;
    }
    return pin === 1234 ? "Pin Accepted" : "Invalid pin, try again";
  }
  
  function withdrawAmount(pinStatus, amount) {
    if (pinStatus !== "Pin Accepted") {
      return pinStatus;
    }
    return `Enter your amount: ${amount}\n\nTransaction successful!`;
  }
  
  function bankAtm(isInserted, pin, amount) {
    const cardStatus = insertCard(isInserted);
    const pinStatus = enterPin(cardStatus, pin);
    return withdrawAmount(pinStatus, amount);
  }
  
  const result = bankAtm(true, 1234, 5000);
  console.log(result);
  