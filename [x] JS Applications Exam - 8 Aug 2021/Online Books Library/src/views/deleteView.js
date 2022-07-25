import * as bookService from '../middleware/bookService.js';

export const deleteView = (ctx) => {
    let bookId = ctx.params.id;
    let confirmation = window.confirm('Are you sure you want to delete this book?')

    if (confirmation) {
        bookService.del(bookId)
            .then(() => {
                ctx.page.redirect('/')
            })
            .catch(err => {
                alert(err);
            })
    }
}