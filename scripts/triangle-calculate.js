function calculateTriangleArea() {
    // for base value
    const traiangleBaseInput = document.getElementById('triangle-base');
    const inputBaseValue = traiangleBaseInput.value;
    const base = parseFloat(inputBaseValue);
    // console.log(base);

    // for height value:
    const traiangleHeightInput = document.getElementById('triangle-height');
    const inputHeightValue = traiangleHeightInput.value;
    const height = parseFloat(inputHeightValue);
    // console.log(height);

    // calculate triangle area:
    const area = 0.5 * base * height;
    // console.log('area of the triangle is: ', area);

    // disiplay triangle area:
    const triangleAreaDisplay = document.getElementById('triangle-area');
    triangleAreaDisplay.innerText = area;





    // set value inside the Area calculation
    const mainText = document.getElementById('triangle-result');
    const simpleUl = document.getElementById('simple-ul');
    const newList = document.createElement('li');
    newList.innerText = 'Triangle new ' + mainText.innerText;
    simpleUl.appendChild(newList)
}


// Rectangle
function calculateRectangleArea() {
    // for Width value
    const RectangleBaseInput = document.getElementById('Rectangle-base');
    const inputWidthValue = RectangleBaseInput.value;
    const width = parseFloat(inputWidthValue);

    // for Length value:
    const RectangleLengthInput = document.getElementById('Rectangle-height');
    const inputLengthValue = RectangleLengthInput.value;
    const length = parseFloat(inputLengthValue);

    const area = width * length;

    const RectangleAreaDisplay = document.getElementById('Rectangle-area');
    RectangleAreaDisplay.innerText = area;



    // set value inside the Area calculation
    const mainText = document.getElementById('rectangle-result');
    const simpleUl = document.getElementById('simple-ul');
    const newList = document.createElement('li');
    newList.innerText = 'Rectangle new ' + mainText.innerText;
    simpleUl.appendChild(newList)

}


// Parallelogram
function calculateParallelogramArea() {

    const XInput = document.getElementById('parallelogram-x');
    const inputXValue = XInput.value;
    const X = parseFloat(inputXValue);


    const YInput = document.getElementById('parallelogram-y');
    const inputYValue = YInput.value;
    const Y = parseFloat(inputYValue);

    const area = X * Y;

    const AreaDisplay = document.getElementById('parallelogram-area');
    AreaDisplay.innerText = area;



    // set value inside the Area calculation
    const mainText = document.getElementById('paralle-result');
    const simpleUl = document.getElementById('simple-ul');
    const newList = document.createElement('li');
    newList.innerText = 'Parallelogram new ' + mainText.innerText;
    simpleUl.appendChild(newList)
}


// Rhombus
function calculateRhombusArea() {

    const XInput = document.getElementById('rhombus-x');
    const inputXValue = XInput.value;
    const X = parseFloat(inputXValue);


    const YInput = document.getElementById('rhombus-y');
    const inputYValue = YInput.value;
    const Y = parseFloat(inputYValue);

    const area = 0.5 * X * Y;

    const AreaDisplay = document.getElementById('rhombus-area');
    AreaDisplay.innerText = area;



    // set value inside the Area calculation
    const mainText = document.getElementById('rhombus-result');
    const simpleUl = document.getElementById('simple-ul');
    const newList = document.createElement('li');
    newList.innerText = 'Rhombus new ' + mainText.innerText;
    simpleUl.appendChild(newList)
}


// Pentagon
function calculatePentagonArea() {

    const XInput = document.getElementById('pentagon-x');
    const inputXValue = XInput.value;
    const X = parseFloat(inputXValue);


    const YInput = document.getElementById('pentagon-y');
    const inputYValue = YInput.value;
    const Y = parseFloat(inputYValue);

    const area = 0.5 * X * Y;

    const AreaDisplay = document.getElementById('pentagon-area');
    AreaDisplay.innerText = area;



    // set value inside the Area calculation
    const mainText = document.getElementById('pentagon-result');
    const simpleUl = document.getElementById('simple-ul');
    const newList = document.createElement('li');
    newList.innerText = 'Pentagon new ' + mainText.innerText;
    simpleUl.appendChild(newList)
}


// Ellipse
function calculateEllipseArea() {

    const XInput = document.getElementById('ellipse-x');
    const inputXValue = XInput.value;
    const X = parseFloat(inputXValue);


    const YInput = document.getElementById('ellipse-y');
    const inputYValue = YInput.value;
    const Y = parseFloat(inputYValue);

    const area = 3.1416 * X * Y;

    const AreaDisplay = document.getElementById('ellipse-area');
    AreaDisplay.innerText = area;



    // set value inside the Area calculation
    const mainText = document.getElementById('ellipse-result');
    const simpleUl = document.getElementById('simple-ul');
    const newList = document.createElement('li');
    newList.innerText = 'Ellipse new ' + mainText.innerText;
    simpleUl.appendChild(newList)
}



// short-1 code using function ---- this is perfect

function calculatePantagonArea() {
    const x = getInputValueById('somthingIsIdX');
    const y = getInputValueById('somthingIsIdY');

    const area = 0.5 * x * y;
    setInnerTextById('somthing', area);
}



function getInputValueById(YourIdName) {
    const inputField = document.getElementById(YourIdName);
    const inputValueText = inputField.value;
    const value = parseFloat(inputValueText);
    return value;
}

function setInnerTextById(elementIdName, area) {
    const element = document.getElementById(elementIdName);
    element.innerText = area;
}

// short-2 
function calculateCircleArea() {
    const x = getInputValueById('your-id-name');
    const y = getInputValueById('your-others-id-name');
    const area = 3.1416 * x * y;
    setInnerTextById('id-name', area)
}







