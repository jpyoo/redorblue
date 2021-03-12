// programing done by JPY, email iconjacob@gmail.com
function yesButtonClick(){}
function startFunction(){}
function noButtonClick(){}
function dontKnowButtonClick(){}
function yesButton(){}
function noButton(){}
function dontKnowButton(){}
function calcScore(){}
function showScore(){}
function showResult(){}
function getReadyForResult(){}
function showDetailButton(){}
function remainingCount(){}
function yesorno(){}
///
function randomPick(){}
///
$(document).ready(function(){
  $("#mainContent").hide();
  $("#resultBox").hide();
  $("#submitButtonBox").hide();
  $("#showResultButton").hide();
});
/*var myObject = $.getJSON("lib/data.json", function() {
  console.log( "success" );
})
  .done(function() {
    console.log( "second success" );
  })
  .fail(function() {
    console.log( "error" );
  })
  .always(function() {
    console.log( "complete" );
  });*/
var index = 0;
var scoreRed = 0;
var scoreBlue = 0;
var scoreRedP = 0;
var scoreBlueP = 0;
var myObject = [{
        content: "Pretending the taxes people currently pay are on wealth and not income is either a mistake or disingenuous.",
        name: "Erik Sherman",
        source: "Forbes",
        red: 30,
        blue: 70,
        yesorno: 0
    }, {
        content: "There's something messy, unwieldy, and, ultimately, sneaky about a combination of promises and plans that declare healthcare will be \"free\" for most and that the wealthy only need pay a few pennies on the dollar of additional contributions",
        name: "Erik Sherman",
        source: "Forbes",
        red: 30,
        blue: 70,
        yesorno: 0
    }, {
        content: "While most Americans are paying less in taxes overall under President Donald Trump's 2017 law, many have been startled to find that their refunds have barely changed or are down -- making them feel like they lost, even if they're still coming out ahead.",
        name: "Zachary B. Wolf",
        source: "CNN",
        red: 70,
        blue: 30,
        yesorno: 0
    }, {
        content: "Every American would be provided with health insurance through Medicare and private insurers would be eliminated",
        name: "Bernie Sanders",
        source: "Medicare-for-all",
        red: 85,
        blue: 15,
        yesorno: 0
    }, {
        content: "Bring the entire hemisphere together to talk about how we rebuild Honduras, Guatemala, and El Salvador so people do not have to flee their own countries.",
        name: "Bernie Sanders",
        source: "Democratic presidential debate in Detroit",
        red: 85,
        blue: 15,
        yesorno: 0
    }, {
        content: "Enacte a \"gag rule\" policy to prohibit family planning clinics that provide abortion services or referrals from receiving $286 million in federal funding under Title X",
        name: "Donald Trump",
        source: "Business Insider",
        red: 15,
        blue: 85,
        yesorno: 0
    }, {
        content: "Permanently restricts travel from the originally targeted countries except Iraq and Sudan, and further bans travelers from North Korea and Chad, along with certain Venezuelan officials",
        name: "Donald Trump",
        source: "Presidential Proclamation 9645 on September 24, 2017",
        red: 15,
        blue: 85,
        yesorno: 0
    }, {
        content: "Every patriotic American who is qualified to serve in our military should be able to serve. Full stop.",
        name: "Joe Biden",
        source: "Joe Biden Tweeter",
        red: 80,
        blue: 20,
        yesorno: 0
    }, {
        content: "Take steps to ensure that alternative providers are available and accessible to all women, especially low-income women for direct abortions.",
        name: "Kamala Harris",
        source: "St. Joseph Health System abortion ban",
        red: 100,
        blue: 0,
        yesorno: 0
    }, {
        content: "To keep our traditional public school systems strong, we must resist efforts to divert public funds out of traditional public schools",
        name: "Elizabeth Warren",
        source: "Medium post",
        red: 85,
        blue: 15,
        yesorno: 0
    }];
//remainingCount function
function remainingCount(){
	var count = index + 1;
	if(count <= myObject.length && count >= 1){
	$("#remainingCount").text(count + "/" + myObject.length);
	}else{
		$("#remainingCount").text("");
	}
}//
//yes or no function
function yesorno(n){
  if(n == 0){
    return "I Don't Know";
  }else if(n == 1){
    return "Yes";
  }else if(n == 2){
    return "No";
  }else{
    return "You lied";
  }
}//
////show detail button function
//function showDetailButton(){
//  var string = "<thead><th scope=&quot;col&quot;>Questions</th><th scope=&quot;col&quot;>Source</th><th scope=&quot;col&quot;>BY</th><th scope=&quot;col&quot;>Your answer</th></thead>"+"<tbody>";
//  for (i = 0; i< myObject.length; i++) {
//    var obj = myObject[i];
//    string += "<tr><td><h5>" + obj.content + "</h5></td><td>" + obj.source + "</td><td>" + obj.name + "</td><td>" + yesorno(obj.yesorno) + "<td></tr>";
//  }
//  string += "</tbody>"
//  return string;
//}
function showDetailButton(){
  var string = ""//<thead><th scope=&quot;col&quot;>Questions</th><th scope=&quot;col&quot;>Source</th><th scope=&quot;col&quot;>BY</th></thead>"+"<tbody>";
  for (i = 0; i< myObject.length; i++) {
    var j = i+1;
    var obj = myObject[i];
    string += "<thead><th colspan=3 scope=colgroup><h5>Question"+ j + ": " + obj.content + "</h5></th></thead><tbody><tr><td>source:" + obj.source + "</td><td>By:" + obj.name + "</td><td>Your Answer:" + yesorno(obj.yesorno) + "</td></tr></tbody>";
  }
  //string += "</tbody>"
  return string;
}
//
//start function
function startFunction(){
$("#mainContent").show();
$("#mainContent").text(myObject[index].content);
$("#submitButtonBox").show();
$("#startButton").hide();
remainingCount();
}//
//yes button
function yesButtonClick(){
  myObject[index].yesorno += 1;
  index++;
  remainingCount()
}
function yesButton(){
if(index < myObject.length-1){
  yesButtonClick();
  $("#mainContent").text(myObject[index].content);
}else if(index == myObject.length-1){
  yesButtonClick();
  getReadyForResult();
}else{
  showResult();
}}//
//no button
function noButtonClick(){
  myObject[index].yesorno += 2;
  index++;
  remainingCount()
}
function noButton(){
if(index < myObject.length-1){
  noButtonClick();
  $("#mainContent").text(myObject[index].content);
}else if(index == myObject.length-1){
  noButtonClick();
  getReadyForResult();
}else{
  showResult();
}}//
//dontKnowButton
function dontKnowButtonClick(){
  myObject[index].yesorno += 0;
  index++;
  remainingCount()
}
function dontKnowButton(){
if(index < myObject.length-1){
  dontKnowButtonClick();
  $("#mainContent").text(myObject[index].content);
}else if(index == myObject.length-1){
  dontKnowButtonClick();
  getReadyForResult();
}else{
  showResult();
}}//
//get Ready for result
function getReadyForResult(){
  $("#submitButtonBox").hide();
  $("#showResultButton").show();
  $("#mainContent").text("Are you ready for your political preference?");
}//
//calc Score
function calcScore(){
  for (i = 0; i< myObject.length; i++) {
    var indexedObject = myObject[i];
    if(indexedObject.yesorno == 0){
      scoreRed += indexedObject.blue;
      scoreBlue += indexedObject.red;
    }else if(indexedObject.yesorno == 1){
      scoreRed += indexedObject.red;
      scoreBlue += indexedObject.blue;
    }else if(indexedObject.yesorno == 2){
    }else{}
  }
  scoreRedP = scoreRed/(scoreRed+scoreBlue)*100;
  scoreBlueP = scoreBlue/(scoreRed+scoreBlue)*100;
}//
//show Score
function showScore(){
  $("#mainContent").text("");
  $("#mainContent").hide()
  $("#resultDisplay").append((scoreRedP).toFixed(2) + "% red   " + (scoreBlueP).toFixed(2) + "% blue");
  $("#resultBox").show();
  $("#showResultButton").hide();
  $("#redProgressBar").css("width", (scoreRedP).toFixed(2)+"%");
  $("#blueProgressBar").css("width", (scoreBlueP).toFixed(2)+"%");
}//
//show Result
function showResult(){
  calcScore();
  showScore();
}//
// set button function on click
$(document).ready(function(){
  $("#startButton").click(function(){
		startFunction();
	});
  $("#yesButton").click(function(){
		yesButton();
	});
	$("#noButton").click(function(){
		noButton();
	});
	$("#dontKnowButton").click(function(){
		dontKnowButton();
	});
  $("#showResultButton").click(function(){
		showResult();
	});
  $("#reset").click(function(){
    window.location = "redorblue.html";
	});
  $("#showDetailButton").click(function(){
    $("#resultDetail").append(showDetailButton());
	});
});
