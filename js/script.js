const usersPerPage = 10;

function calculateNumberOfPages(users) {
  return Math.ceil(users.length / usersPerPage);
}

function renderUsersForPage(users, pageNumber) {
  const startIndex = (pageNumber - 1) * usersPerPage;
  const endIndex = startIndex + usersPerPage;
  const usersToRender = users.slice(startIndex, endIndex);

  const userList = document.querySelector('.contact-list');
  userList.innerHTML = '';

  usersToRender.forEach(user => {
    userList.innerHTML += `
      <li class="contact-item cf">
        <div class="contact-details">
          <img class="avatar" src="${user.image}">
          <h3>${user.name}</h3>
          <span class="email">${user.name.toLowerCase().split(' ').join('.')}@example.com</span>
        </div>
        <div class="joined-details">
          <span class="date">Joined ${user.joined}</span>
        </div>
      </li>
    `;
  });
}

function createPaginationButtons(numberOfPages) {
  const paginationContainer = document.querySelector('.pagination');
  paginationContainer.innerHTML = '';

  for (let i = 1; i <= numberOfPages; i++) {
    paginationContainer.innerHTML += `<li><a href="#" class="page-number">${i}</a></li>`;
  }

  document.querySelectorAll('.page-number').forEach(button => {
    button.addEventListener('click', function(event) {
      event.preventDefault();
      const pageNumber = parseInt(event.target.textContent, 10);
      renderUsersForPage(users, pageNumber);
    });
  });
}

function init() {
  document.getElementById('total-users').textContent = users.length;
  const numberOfPages = calculateNumberOfPages(users);
  createPaginationButtons(numberOfPages);
  renderUsersForPage(users, 1); 
}

document.addEventListener('DOMContentLoaded', init);

