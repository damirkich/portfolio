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
            document.body.style.overflow = 'hidden';
        });
    });

    document.querySelector('.modal-close').addEventListener('click', function() {
        backdrop.classList.add('is-hidden');
        document.body.style.overflow = 'auto';
    });
});