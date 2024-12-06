document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const openModalBtn = document.querySelector('.open-modal-btn');
    const closeModalBtn = document.querySelector('.close-modal-btn');
    const authorTitle = document.querySelector('#my1'); // Используем ID, он уникален
  
    // Открытие модального окна
    openModalBtn?.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
  
    // Закрытие модального окна
    closeModalBtn?.addEventListener('click', () => {
      modal.style.display = 'none';
      scrollToAuthorTitle();
    });
  
    // Закрытие при клике вне содержимого окна
    modal?.addEventListener('click', (event) => {
      if (event.target === modal) {
        modal.style.display = 'none';
        scrollToAuthorTitle();
      }
    });
  
    // Прокрутка к заголовку
    function scrollToAuthorTitle() {
      authorTitle?.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  });
  