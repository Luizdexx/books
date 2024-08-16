document.addEventListener("DOMContentLoaded", function() {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const books = document.querySelectorAll('.book-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filter = this.getAttribute('data-filter');
            
            books.forEach(book => {
                if (filter === 'all') {
                    book.style.display = 'block';
                } else if (book.classList.contains(filter)) {
                    book.style.display = 'block';
                } else {
                    book.style.display = 'none';
                }
            });
        });
    });
});
