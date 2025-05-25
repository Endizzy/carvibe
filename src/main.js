document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('loginModal');
  const openLoginButton = document.getElementById('openLogin');
  const closeModalButton = document.querySelector('.close');

  openLoginButton.addEventListener('click', function() {
    modal.style.display = 'block';
  });

  closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';
  });

  window.addEventListener('click', function(event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  const loginForm = document.getElementById('loginForm');
  loginForm.addEventListener('submit',
    function(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
      console.log('Username:', username);
      console.log('Password:', password);
      modal.style.display = 'none';
    });
})