// Initialize Firebase
  var config = {
    apiKey: "AIzaSyBtsVzA_sKCy7XzOwbeVzAHbPlMwohGKTU",
    authDomain: "train-scheduler-wk7.firebaseapp.com",
    databaseURL: "https://train-scheduler-wk7.firebaseio.com",
    projectId: "train-scheduler-wk7",
    storageBucket: "",
    messagingSenderId: "940603114062"
  };

  firebase.initializeApp(config);
  var database = firebase.database();

// Input Field variables
  var trainNameInput = "";
  var destinationInput = "";
  var firstTrainTimeInput = "";
  var frequencyInput = "";

// Button On Click function sends entered info to Firebase

$("#submitButton").on("click", function(event) {
    event.preventDefault();

    trainNameInput = $("#trainNameInput").val().trim();
    destinationInput = $("#destinationInput").val().trim();
    firstTrainTimeInput = $("#firstTrainTimeInput").val().trim();
    frequencyInput = $("#frequencyInput").val().trim();

    database.ref().push({
    trainName: trainNameInput,
    trainDestination: destinationInput,
    firstTrainTime: firstTrainTimeInput,
    trainFrequency: frequencyInput,
    });
  });

// 