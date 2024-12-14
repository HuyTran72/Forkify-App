import View from './View.js';
import icons from 'url:../../img/icons.svg'; // Parcel 2

class PaginationView extends View { 
    _parentElement = document.querySelector('.pagination');

    _generateMarkup() {
        // Page 1, and there are other pages
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);

        // Page 1, and there are NO other pages
        if(this._data.page === 1 && numPages >1) {
            return `

            `;
        }

        // Last page
        if(this._data.page === numPages && numPages > 1) {
            return `

            `;
        }


        // Other page
        if(this._data.page < numPages) {
            return `

            `;
        }

        // Page 1, and there are NO other pages

        
    }
}

export default new PaginationView();