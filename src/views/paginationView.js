import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class PaginationView extends View { 
    _parentElement = document.querySelector('.pagination');

    addHandlerClick(handler) {
        this._parentElement.addEventListener('click', function(e) {
            const btn = e.target.closest('.btn--inline');
            if(!btn) return;

            const goToPage = +btn.dataset.goto;
            console.log(goToPage);
            console.log(btn);
            handler(goToPage);
        });
    };

    _generateMarkup() {
        const curPage = this._data.page;
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        console.log(numPages);

        // Page 1, and there are other pages
        if(this._data.page === 1 && numPages >1) {
            return `
                <button data-goto="${this._data.page + 1}" class="btn--inline pagination__btn--next">
                    <span>Page ${this._data.page + 1}</span>
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-right"></use>
                    </svg>
                </button>
            `;
        }

        // Last page
        if(this._data.page === numPages && numPages > 1) {
            return `
                <button data-goto="${this._data.page - 1}" class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-left"></use>
                    </svg>
                    <span>Page ${this._data.page - 1}</span>
                </button>
            `;
        }


        // Other page
        if(this._data.page < numPages) {
            return `
                <button data-goto="${this._data.page - 1}" class="btn--inline pagination__btn--prev">
                    <svg class="search__icon">
                        <use href="${icons}#icon-arrow-left"></use>
                    </svg>
                    <span>Page ${this._data.page - 1}</span>
            `;
        }

        // Page 1, and there are NO other pages
        return '';
        
    }
}

export default new PaginationView();