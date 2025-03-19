// Change text content dynamically
document.getElementById('change-text-btn').addEventListener('click', function() {
    document.getElementById('dynamic-text').textContent = "The text has been changed!";
});

// Modify CSS styles via JavaScript
document.getElementById('change-style-btn').addEventListener('click', function() {
    const styleDiv = document.getElementById('style-div');
    styleDiv.style.backgroundColor = 'lightblue';
    styleDiv.style.color = 'darkblue';
});

// Add or remove an element when a button is clicked
document.getElementById('toggle-element-btn').addEventListener('click', function() {
    const toggleableElement = document.getElementById('toggleable-element');
    if (toggleableElement.style.display === 'none') {
        toggleableElement.style.display = 'block';
    } else {
        toggleableElement.style.display = 'none';
    }
});
