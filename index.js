
document.querySelectorAll('.dropdown').forEach(function(dropdown) {
  dropdown.addEventListener('mouseover', function () {
    dropdown.querySelector('.dropdown-menu').style.display = 'block';
  });
  dropdown.addEventListener('mouseleave', function () {
    dropdown.querySelector('.dropdown-menu').style.display = 'none';
  });
});