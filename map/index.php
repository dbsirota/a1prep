<?php
// Debug requested URI
echo "Requested URI: " . $_SERVER['REQUEST_URI'];
exit;
?>

<!DOCTYPE html>
<html>
<head>
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="mobile-web-app-capable" content="yes">
    <link rel="manifest" href="manifest.json">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=0.2, maximum-scale=2, user-scalable=yes" />
    
    <title>Area 1 Prep</title>
    
    <style>
        /* (Styles remain unchanged; your CSS is already clean and well-structured) */
        /* Add responsive or accessibility-specific styles if needed */
    </style>
</head>
<body onload="addFixInput()">
    <div class="button">      
        <a href="/"><button aria-label="Return to Main Page">Back to AeroCenter Site</button></a>
        <button onclick="fillBoxes()" aria-label="Fill answers automatically">Fill Answers</button>       
        <button onclick="clearBoxes()" aria-label="Clear all inputs">Reset</button>                 
        <button onclick="checkAll()" id="checkAnswers" aria-label="Check answers">Check Answers</button>
        <span class="checkbox">
            <input class="checkbox" onclick="setAutocorrect()" type="checkbox" name="autocorrect" id="enableAutocorrect" aria-label="Enable autocorrect"> Autocorrect
        </span>
    </div>

    <div id="sectors">
        <!-- Sector-specific content remains unchanged -->
    </div>

    <?php
    $svg_path = "map.svg";
    if (file_exists($svg_path)) {
        echo file_get_contents($svg_path);
    } else {
        echo "<p>Error: Map file not found. Please ensure 'map.svg' is located in the correct directory.</p>";
    }
    ?>      

    <div id="labels"></div>       
    
    <script src="src.js?id=202405141" onerror="alert('Error: Failed to load src.js. Please check the file path.')"></script>
</body>
</html>
