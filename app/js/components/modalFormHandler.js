export function initModalFormHandler() {
  const form = document.querySelector('.modal_form');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (!form.checkValidity()) {
      return;
    }

    window.formDialog?.close();
    window.setModal?.showModal();
  });
}