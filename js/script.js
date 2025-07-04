document.addEventListener('DOMContentLoaded', function() {
    const btnsOpenModal = document.querySelectorAll('[data-open-modal]');
    const backdrop = document.querySelector('.backdrop');
    const modal = document.querySelector('.modal');

    console.log("Elements:", {btnsOpenModal, backdrop, modal}); // Debug line

    btnsOpenModal.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            console.log("Button clicked - removing is-hidden");

            backdrop.classList.remove('is-hidden');

            // Trigger reflow to restart CSS transition (just in case)
            void modal.offsetWidth;

            modal.classList.add('show'); // 👉 Move this here
            document.body.style.overflow = 'hidden';
        });
    });

document.querySelector('.modal-close').addEventListener('click', function() {
    modal.classList.remove('show'); // triggers the closing animation
    document.body.style.overflow = 'auto';

    // wait for animation to finish (match this to your CSS transition time)
    setTimeout(() => {
        backdrop.classList.add('is-hidden'); // hide backdrop AFTER transition
    }, 1000); // 1000ms = 1s = your CSS `transition: transform 1s ease`
});

    });

