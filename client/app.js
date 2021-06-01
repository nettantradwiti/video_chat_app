// replace these values with those generated in your TokBox Account

var apiKey = "47243634";
var sessionId =
  "1_MX40NzI0MzYzNH5-MTYyMjUzMTg2ODcyMH43a1p0M0c4aU16Q3crNUUxR1ZRWFdrdXZ-UH4";
var token =
  "T1==cGFydG5lcl9pZD00NzI0MzYzNCZzaWc9M2U1MzE2Mzc5OWRjOGJiZTc0OTUyZmEyZGRlODIyN2UxOWMwNDVhZDpzZXNzaW9uX2lkPTFfTVg0ME56STBNell6Tkg1LU1UWXlNalV6TVRnMk9EY3lNSDQzYTFwME0wYzRhVTE2UTNjck5VVXhSMVpSV0ZkcmRYWi1VSDQmY3JlYXRlX3RpbWU9MTYyMjUzMTg2OSZub25jZT0wLjI4NTQwMzA4Nzg0MzIxODgmcm9sZT1wdWJsaXNoZXImZXhwaXJlX3RpbWU9MTYyMjYxODI2OSZpbml0aWFsX2xheW91dF9jbGFzc19saXN0PQ==";

// var apiKey = "45828062";
// var sessionId =
//   "2_MX40NTgyODA2Mn5-MTYyMjUyOTA0MjM3NH5SdUlkUHJGYVowNjduVkJDVmZpWVY3Vkd-UH4";
// var token =

//   "T1==cGFydG5lcl9pZD00NTgyODA2MiZzaWc9MDY4ZTE1Njc4YTMxMDY3OWEzMDdiNTZiMjhhOGFmOTcxY2QwMjMyNTpzZXNzaW9uX2lkPTJfTVg0ME5UZ3lPREEyTW41LU1UWXlNalV5T1RBME1qTTNOSDVTZFVsa1VISkdZVm93TmpkdVZrSkRWbVpwV1ZZM1ZrZC1VSDQmY3JlYXRlX3RpbWU9MTYyMjUzMzQzOCZub25jZT0wLjIwMzM2OTkzODIxNTY5MTk0JnJvbGU9cHVibGlzaGVyJmV4cGlyZV90aW1lPTE2MjI2MTk4Mzg=";
// (optional) add server code here

function handleError(error) {
  if (error) {
    alert(error.message);
  }
}

initializeSession();

function initializeSession() {
  var session = OT.initSession(apiKey, sessionId);

  // Subscribe to a newly created stream

  // Create a publisher
  var publisher = OT.initPublisher(
    "publisher",
    {
      insertMode: "append",
      width: "100%",
      height: "100%",
    },
    handleError
  );

  // Connect to the session
  session.connect(token, function (error) {
    // If the connection is successful, publish to the session
    if (error) {
      handleError(error);
    } else {
      session.publish(publisher, handleError);
    }
  });
  session.on("streamCreated", function (event) {
    session.subscribe(
      event.stream,
      "subscriber",
      {
        insertMode: "append",
        width: "100%",
        height: "100%",
      },
      handleError
    );
  });
}
