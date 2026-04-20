function toggleAbout() {
    document.querySelectorAll('.sidebar-about').forEach(function(el) {
        el.classList.toggle('collapsed');
    });
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.sidebar-about').forEach(function(el) {
        el.classList.add('collapsed');
    });
});
