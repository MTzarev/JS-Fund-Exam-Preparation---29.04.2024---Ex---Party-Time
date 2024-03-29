function partyTime(input) {
    let inviteList = [];
    let guestToCome = [];
  
    let command = input.shift();
  
    while (command !== "PARTY") {
     inviteList.push(command);
      command = input.shift();
    }
  
    for (let i = 0; i < input.length; i++) {
      guestToCome.push(input[i]);
    }
  
    let arr = [];
  
    for (let guest of inviteList) {
      let listAsObj = {};
      listAsObj.name = guest;
      if (guest[0] == Number(guest[0])) {
        listAsObj.category = "vip";
      } else {
        listAsObj.category = "regular";
      }
  
      arr.push(listAsObj);
    }
    for (let commingGuest of guestToCome) {
      for (let guestInList of arr) {
        if (guestInList.name === commingGuest) {
          let index = arr.indexOf(guestInList);
          if (index >= 0) {
            arr.splice(index, 1);
            break;
          }
        }
      }
    }
    let finalArrVip = [];
    let finalArrRegular = [];
    let countNoComming = arr.length;
    for (let nonCommingGuest of arr) {
      if (nonCommingGuest.category === "vip") {
        finalArrVip.push(nonCommingGuest.name);
      } else {
        finalArrRegular.push(nonCommingGuest.name);
      }
    }
    console.log(countNoComming);
  
    finalArrVip.forEach((el) => console.log(el));
    finalArrRegular.forEach((el) => console.log(el));
  }

partyTime([
    'm8rfQBvl', 'fc1oZCE0', 'UgffRkOn', '7ugX7bm0', '9CQBGUeJ',
    '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1',
    'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'xys2FYzn', 'MDzcM9ZK',
    'PARTY',
    '2FQZT3uC', 'dziNz78I', 'mdSGyQCJ', 'LjcVpmDL', 'fPXNHpm1',
    'HTTbwRmM', 'B5yTkMQi', '8N0FThqG', 'm8rfQBvl', 'fc1oZCE0',
    'UgffRkOn', '7ugX7bm0', '9CQBGUeJ'
]);