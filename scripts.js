document.addEventListener("DOMContentLoaded", function () {
    /****************** create variables ******************/
    /* create variables to hold the values for modelName and duration */
    let modelName = "Model XYZ";
    let duration = 0;
    /****************** helper function ******************/
    /* create a function called recalculate() which will
        - create a variable to represent the calculated-cost span element. That will look something like:
            // let costLabel = document.getElementById("calculated-cost");
        - check the value of the modelName variable, and use that to calculate the new total cost:
            e.g. if modelName is currently "Model XYZ", duration * 100 gives us the new total cost.
            if modelName is currently "Model CPRG", duration * 213 gives us the new total cost.
        - set the value of the calculated-cost element's innerHTML to this new value
    */
    function recalculate() {
        let costLabel = document.getElementById("calculated-cost");
        let totalCost = modelName === "Model XYZ" ? duration * 100 : duration * 213;
        costLabel.innerHTML = totalCost.toFixed(2);
    }

    /****************** model button logic ******************/

    /* 
    - first, create a variable to represent the "Switch Model" pseudo-button (hint: can use getElementById)
    - second, create a function called changeModel() which checks the value of the model name variable. This function will:
        - create a variable to represent the model-text span element
        - if modelName is currently "Model XYZ", change the value of modelName to "Model CPRG", and change the innerHTML of the model-text span element to "Model CPRG"
        - if modelName is currently "Model CPRG", change the value of modelName to "Model XYZ", and change the innerHTML of the model-text span element to "Model XYZ"
        - then, recalculate() the total cost.
    - finally, uncomment the following line of JavaScript to have this function run automatically whenever the pseudo-button is clicked: */
    let modelButton = document.getElementById("model-button");
    let modelText = document.getElementById("model-text");

    function changeModel() {
        if (modelName === "Model XYZ") {
            modelName = "Model CPRG";
            modelText.innerHTML = "Model CPRG";
        } else {
            modelName = "Model XYZ";
            modelText.innerHTML = "Model XYZ";
        }
        recalculate();
    }

    modelButton.addEventListener("click", changeModel);

    /****************** duration button logic ******************/
    /*  - first, create a variable to represent the "Change Duration" pseudo-button.
        - then, create a function called changeDuration() that will
            - create a variable to represent the duration-text span element
            - prompt() the user for a new duration
            - save the result of the prompt() to the duration variable
            - change the innerHTML of the duration-text span element to this new value
            - recalculate() the total cost/
        - finally, attach this function to the "Change Duration" pseudo-button, so it runs whenever the button is clicked.
    */
    let durationButton = document.getElementById("duration-button");
    let durationText = document.getElementById("duration-text");
    let promptShown = false;

    function changeDuration() {
        if (duration === 0) {
            duration = parseFloat(prompt("Enter new duration:")) || 0; // Use 0 if the user enters a non-numeric value
        }
        durationText.innerHTML = duration;
        recalculate();
    }


    durationButton.addEventListener("click", changeDuration);
});
