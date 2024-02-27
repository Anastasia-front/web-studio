(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", () => {
    toggleModal(true);
  });

  refs.closeModalBtn.addEventListener("click", () => {
    toggleModal(false);
  });

  function toggleModal(open) {
    refs.modal.classList.toggle("is-hidden", !open);

    // Get the body element
    const body = document.body;

    // Toggle the class on the body to block or allow scrolling
    if (open) {
      body.classList.add("modal-open");
    } else {
      body.classList.remove("modal-open");
    }
  }
})();
