import * as carService from '../middleware/carsService.js';

export const deleteView = (ctx) => {
    let carId = ctx.params.id;
    let confirmation = window.confirm('Are you sure you want to delete this listing?')

    if (confirmation) {
        carService.del(carId)
            .then(() => {
                ctx.page.redirect('/catalog');
            })
            .catch(err => {
                alert(err);
            })
    }
}