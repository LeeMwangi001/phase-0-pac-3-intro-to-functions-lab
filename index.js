function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  function logShout(string) {
    console.log(string.toUpperCase());
  }
  function logWhisper(string) {
    console.log(string.toLowerCase());
  }
  function sayHiToHeadphonedRoommate(string) {
    const lowerCaseString = string.toLowerCase();
    const upperCaseString = string.toUpperCase();
    
    if (string === lowerCaseString) {
        return "I can't hear you!";
    } else if (string === upperCaseString) {
        return "YES INDEED!";
    }
    else {
        return "I would love to!";
    }
}



  

  