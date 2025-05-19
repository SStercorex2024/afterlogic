export function initModalFormElements() {
  const formDialog = document.getElementById('formDialog');
  const setModal = document.getElementById('setModal');

  if (formDialog) window.formDialog = formDialog;
  if (setModal) window.setModal = setModal;
}