/**
 * Chrome Extension: Mouse-XY
 * Author: Anthony Guertin
 * Version: 2.2
 */

const NEW_LINE = "\n";
const EMPTY_STRING = "";

var clicks = 0;
var cordArray = [];
var doRecord = false;
var message = EMPTY_STRING;

document.addEventListener("click", getClickPosition, false);

function forEachCordinate(current, index, cordArray)
{
    var click_index = index + 1;
    message += String(click_index) + ") X : " + String(current.x) + "  Y : " + String(current.y) + "\n";
}

function getClickPosition(e) {
    // Reload the page if clicks are greater than 1
    if (clicks > 1 && !doRecord) {
        window.location.reload()
        return;
    }

    // Get mouse co-ordinates and print them to the screen
    var xPosition = e.clientX;
    var yPosition = e.clientY;

    if (doRecord || clicks == 0) {
        cordArray.push
        (
            {
                x: xPosition,
                y: yPosition
            }
        );
    }
    clicks +=1;

    message = EMPTY_STRING;
    message += "Total Number of Clicks: " + String(clicks) + NEW_LINE;
    cordArray.forEach(forEachCordinate);
    var continued = window.confirm ("Continue Clicks? " + NEW_LINE + message);

    if (continued)
    {
            doRecord = true;
            return;
    }
    doRecord = false;
};