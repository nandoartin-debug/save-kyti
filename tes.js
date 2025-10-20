const buttons = document.querySelectorAll('.product-info button');
buttons.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Produk berhasil ditambahkan ke keranjang!');
    });
});

function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const elementTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 120;

        if (elementTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        }
    }
}