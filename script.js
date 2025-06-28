
function showSection(id) {
    document.querySelectorAll('.rules-section').forEach(sec => {
        sec.classList.remove('active');
    });
    document.getElementById(id).classList.add('active');
}
