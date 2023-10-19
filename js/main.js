const textAreaInput = document.getElementById('text-area');


document.getElementById('bold').addEventListener('click', function () {
    textAreaInput.style.fontWeight = 'bold';
})

document.getElementById('italic').addEventListener('click', function () {
    textAreaInput.style.fontStyle = 'italic';
})

document.getElementById('under-line').addEventListener('click', function () {
    textAreaInput.style.textDecoration = 'underline';
})

document.getElementById('left-align').addEventListener('click', function () {
    textAreaInput.style.textAlign = 'left';
})

document.getElementById('center-align').addEventListener('click', function () {
    textAreaInput.style.textAlign = 'center';
})

document.getElementById('right-align').addEventListener('click', function () {
    textAreaInput.style.textAlign = 'right';
})

document.getElementById('justify-text').addEventListener('click', function () {
    textAreaInput.style.textAlign = 'justify';
})


document.getElementById('font-size').addEventListener('click', function () {
    const fontSizeBox = document.getElementById('font-size');
    const fontSizeValue = parseFloat(fontSizeBox.value);
    textAreaInput.style.fontSize = fontSizeValue + 'px';
})

document.getElementById('reset').addEventListener('click', function () {
    textAreaInput.style.fontWeight = 'normal';
    textAreaInput.style.fontStyle = 'normal';
    textAreaInput.style.textDecoration = 'none';
})

document.getElementById('color-picker').addEventListener('input', function () {
    const color = document.getElementById('color-picker');
    const colorValue = color.value;
    textAreaInput.style.color = colorValue;
})
