<!DOCTYPE html>
<!--
To change this license header, choose License Headers in Project Properties.
To change this template file, choose Tools | Templates
and open the template in the editor.
-->
<html>
    <head>
        <meta charset="UTF-8">
        <title>PHP/ Jquery CookBook</title>
        <script src="js/jquery.js"> </script>
        <link href="css/custom.css" type="text/css" rel="stylesheet">
    </head>
    <body>
        <h3> Binding and Unbinding Elements</h3>
        <ul id="ul1">
            <li class="li1">USA </li>
            <li class="li1">Canada </li>
            <li class="li1">Ireland </li>
            <li class="li1">South Africa </li>
        </ul>
        
        <select id="select1">
            <option value="Africa">Africa</option>
            <option value="Antartica">Antartica</option>
            <option value="Asia">Asia</option>
            <option value="Australia">Australia</option>
            <option value="Europe">Europe</option>
            <option value="South America">South America</option>
            <option value="North America">North America</option>
        </select>
        <div class="block"> 
            <input id="button1" type="button" value="Unbind Select Box"> 
            <p> <input id="text1" type="text"></p>
            <hr>

            <h3>Adding events to elements that will be created later</h3>
            <input type="button" id="button2" value="Create new element">
            <div class="future"> Already on the page </div>
        </div>
    <hr>
    <div class="subform">
        <h3>Submiting a form with Jquery</h3>
        <form id="myForm">
            <input id="submitButton" type="button" value="Submit Form">
        </form>
    </div>
    <hr>
    <div>
        <h3> Checking for missing images </h3>
        <div id="imageContainer"></div>
    </div>
    <hr>
    
    <div>
        <h3>Creating the select/ unselect all checkbox funcionalitty</h3>
        <ul class="ul2">
            <li class="li2">
                <input type="checkbox" id="handle">
                <label for="handle"><strong>Toggle All</strong></label>
            </li>
            <li class="li2">
                <input type="checkbox" class="toggle">
                <label>Check 1</label>
            </li>
            <li class="li2">
                <input type="checkbox" class="toggle">
                <label>Check 2</label>
            </li>
            <li class="li2">
                <input type="checkbox" class="toggle">
                <label>Check 3</label>
            </li>
            <li class="li2">
                <input type="checkbox" class="toggle">
                <label>Check 4</label>
            </li>
            <li class="li2">
                <input type="checkbox" class="toggle">
                <label>Check 5</label>
            </li>            
        </ul>
        <input type="button" value="Get Selected values" id="getValues">
        <li id="selected"></li>
    </div>
    <hr>
    <div>
        <h3>Capturing mouse events</h3>
        <div id="tip" style="display:none;">
            Yay ! I'm a tooltip !
        </div>
        <div class="hoverMe">
            Hover me for a tooltip
        </div>
        <div id="notip">
            No tooltip here !
        </div>
        <div class="hoverMe">
            Another Tooltip
        </div>
    </div>
    <hr  style="clear: both;">
    <div>
        <h3>Creating Keyboard Shortcuts</h3>
        <div class="ksc" id="ksc1">You can toggle this div using Alt+S</div>
        <div class="ksc" id="ksc2">You can toggle this div using Alt+G</div>
        <p style="clear:both;">&nbsp;</p>
        <p>Press Alt+B to toggle both divs</p>
    </div>
        
    <script src="js/custom.js">                        
    </script>    
    </body>
</html>
