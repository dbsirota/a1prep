var fixArray = [
  { name: "eno", altitude: null },
  { name: "enoALT", altitude: "FL240" },
  { name: "skipy", altitude: null },
  { name: "skipyLO", altitude: "FL190" },
  { name: "skipyHI", altitude: "FL220" },
  { name: "bessi", altitude: null },
  { name: "bessiALT", altitude: "17000" },
  { name: "edjer", altitude: null },
  { name: "edjerLO", altitude: "13000" },
  { name: "edjerHI", altitude: "17000" },
  { name: "davys", altitude: null },
  { name: "davysALT", altitude: "13000" },
  { name: "holey", altitude: null },
  { name: "brand", altitude: null },
  { name: "brandALT", altitude: "11000" },
  { name: "korry", altitude: null },
  { name: "korryALT", altitude: "10000" },
  { name: "depdy", altitude: null },
];

var errorCount = 0;

var autocorrect = false;

function setAutocorrect() {
	checkbox = document.getElementById("enableAutocorrect");
	checkButton = document.getElementById("checkAnswers");
	if (checkbox.checked) {
		autocorrect = true;
		checkButton.style.backgroundColor = "gray";
		checkAll();
	}
	else {
		autocorrect = false;
		checkButton.style.backgroundColor = "#0061c6";
	}
}

function addFixInput() {
	console.log("Starting input loop!");
  for (var i = 0; i < fixArray.length; i++) {
	  console.log("running for " + i + "iterations!");
    var fixName = fixArray[i].name;
	  var fixData = fixArray[i].altitude;
    var fixElement = document.getElementById(fixName); //so things need to be made in HTML first.
    //if (!fixElement) continue;

	  console.log("Adding fix " + fixName);

    var coords = getCoords(fixElement);

    // Create input field for fix name
    var fixInput = document.createElement("input");
    //fixInput.id = fix.name + "_fix";
	  fixInput.id = fixName + "_fix";
	  fixInput.className = "labelText";
    fixInput.style.position = "absolute";
    fixInput.style.textAlign = "center";
    fixInput.style.left = coords.left + "px";
    fixInput.style.top = coords.top + "px";
    fixInput.placeholder = "FIX";
    fixInput.addEventListener("keyup", function () {
      validateFixNameInput(this); doInput(this);
    });
	  fixInput.type = "text";
	  fixInput.class = "labelText";
    document.getElementById("labels").appendChild(fixInput);
	fixInput.style.backgroundColor = "#e0f7fa"; // Light blue for fix name

    // Create input field for altitude (if applicable)
    if (fixData) {
      var altitudeInput = document.createElement("input");
      altitudeInput.id = fix.name + "_alt";
      altitudeInput.style.position = "absolute";
      altitudeInput.style.textAlign = "center";
      altitudeInput.style.left = coords.left + 50 + "px"; // Offset for altitude
      altitudeInput.style.top = coords.top + "px";
      altitudeInput.placeholder = "ALT";
      altitudeInput.addEventListener("keyup", function () {
        validateFixAltitudeInput(this);
      });
      document.getElementById("labels").appendChild(altitudeInput);
	    altitudeInput.style.backgroundColor = "#fce4ec"; // Light pink for altitude
    }
  }
	console.log("Added fix inputs!")
}

function validateFixNameInput(ele) {
  var fixName = ele.id.replace("_fix", ""); // Extract fix name from ID
  var input = ele.value;

  if (input.toUpperCase() === fixName.toUpperCase()) {
    ele.style.color = "#055a00"; // Green for correct
    ele.disabled = true;
  } else if (input.length > 0) {
    ele.style.color = "red"; // Red for incorrect
  } else {
    ele.style.color = "black"; // Default color for empty
  }
}

function validateFixAltitudeInput(ele) {
  var fixName = ele.id.replace("_alt", ""); // Extract fix name from ID
  var fix = fixArray.find((f) => f.name === fixName);
  var expectedAltitude = fix.altitude;
  var input = ele.value;

  if (input === expectedAltitude) {
    ele.style.color = "#055a00"; // Green for correct
    ele.disabled = true;
  } else if (input.length > 0) {
    ele.style.color = "red"; // Red for incorrect
  } else {
    ele.style.color = "black"; // Default color for empty
  }
}


function clearBoxes() {
	for (var i = 0; i < vorArray.length; i++) {
		ele = document.getElementById(vorArray[i]);
		ele.defaultValue = "";
		ele.style.color = "black";
		ele.style.background = "transparent";
		ele.disabled = false;

		ele.value = "";
		errorCount = 0;
		//document.getElementById("mistakes").innerHTML = 0;

	}
}

function getCoords(elem) {

	var box = elem.getBoundingClientRect();

	return {
		top: box.top + box.height / 2,
		left: box.left + box.width / 2
	};

}

function getAngle(elem) {

}

function doInput(ele) {
	if (autocorrect) {
		checkBoxes(ele);
	}
}

function checkAll() {
	for (var i = 0; i < fixArray.length; i++) {
		ele = document.getElementById(fixArray[i]);
		checkBoxes(ele);

	}
}


function checkBoxes(ele) {
	var id = ele.id.toUpperCase();
	ele.value = ele.value.toUpperCase();
	var input = ele.value.toUpperCase();
	var degrees = id.substring(id.indexOf("_") + 1, id.length);
	//				ele.style.transform = "rotate(-"+(90-degrees)+"deg)";	

	if (degrees.substring(0, input.length) == input) {
		ele.style.color = "black";
	}
	else {
		/*
						var key = event.keyCode || event.charCode;
					if (key != 8 && key != 46 && (ele.value.length == 1 || ele.style.color == "black")) {
							errorCount++;    
					}			
		*/
		ele.style.color = "red";
		ele.style.background = "rgba(255,255,0, .5)";

	}
	if (degrees == input) {
		ele.disabled = true;
		ele.style.color = "#055a00";
	}
	console.log(errorCount);
	//				document.getElementById("mistakes").innerHTML = errorCount;

}	
