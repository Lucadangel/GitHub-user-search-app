dark.js
document.getElementById('dark-mode-toggle').addEventListener('click', function () {
    console.log('Dark mode button clicked');
    document.body.classList.toggle('dark-mode');
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    
    if (document.body.classList.contains('dark-mode')) {
        // Dark mode is active
        darkModeToggle.innerHTML = 'LIGHT';
        darkModeToggle.style.backgroundColor = "rgb(31 42 72)";
    } else {
        // Light mode is active
        darkModeToggle.innerHTML = 'DARK';
        darkModeToggle.style.backgroundColor = "transparent";
    }
});
