const heading = document.querySelector('h1');

heading.addEventListener('click', () => {
    document.body.classList.toggle('show-buttons');
    if (document.body.classList.contains('show-buttons'))
        return (heading.textContent = 'Hide buttons');
    heading.textContent = 'Show buttons';
});
