# redorblue
A website to help you decide your political stance

## Screenshot
This is just an example screenshot, not an actual result of a person.
![capture](https://github.com/jpyoo/redorblue/blob/master/Capture.PNG)

## Code
```html
<!DOCTYPE html>
    <html>
        <head>
			<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
      <link rel="stylesheet" type="text/css" href=".\css\redorblue.css">
			<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        </head>

      <body>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <p id="logo"></p>


			     <div class="container veryMiddle" id="headerDisplay">
             <div class="page-header container">
              <h1>RED OR BLUE</h1>
              <h2 id="secondTitle">helps you vote with 10 questions</h2>
            </div>
			        <h3><p id="mainContent"></p></h3>

         <div class="lead">
              <p id="remainingCount"></p>
        			<div class="row">
        			  <div class="col text-center">
        				   <button type="button" class="btn btn-dark btn-lg" id="startButton">Start</button>
                   <div id="submitButtonBox">
                     <button type="button" class="btn btn-dark btn-lg" id="yesButton" style="margin-bottom: 3px;">Agree</button>
                     <button type="button" class="btn btn-dark btn-lg" id="noButton" style="margin-bottom: 3px;">Don't Agree</button>
                     <button type="button" class="btn btn-dark btn-lg" id="dontKnowButton" style="margin-bottom: 3px;">I Don't know</button>
                  </div>
                  <button type="button" class="btn btn-dark btn-lg" id="showResultButton">Show result</button>
        			  </div>
        		  </div>

          <div id="resultBox">
  			    <div class="row preferenceGraph">
              <div id="redProgressBar"></div><div id="blueProgressBar"></div>
            </div>
            <h3><p id="resultDisplay">Your result : </p></h3>
            <button type="button" class="btn btn-dark btn-lg" id="showDetailButton" style="margin-bottom: 3px;">Why this score?</button>
            <button type="button" class="btn btn-dark btn-lg" id="reset" style="margin-bottom: 3px;" href>Bring me 10 more questions</button>
            <table id="resultDetail" class="table"></table>
          </div>
			 </div>
			</div>

    </div>
    </meta>
			<script src=".\js\redorblue.js"></script>
			<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
			<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
		</body>
    </html>
```
