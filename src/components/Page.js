import React, { PropTypes, Component } from 'react';

export default class Page extends Component {
    onYearBtnClick(e) {
        this.props.setYear(+e.target.textContent)
    }
    render() {
        const { year, photos } = this.props
        return <div>
            <p>
                <button onClick={this.onYearBtnClick.bind(this)}>2016</button>
                <button onClick={this.onYearBtnClick.bind(this)}>2015</button>
                <button onClick={this.onYearBtnClick.bind(this)}>2014</button>
            </p>
            <h3>{year} год</h3>
            <p>У тебя {photos.length} фото.</p>
        </div>
    }
}

// Page.PropTypes = {
//     year: PropTypes.number.isRequired,
//     photos: PropTypes.array.isRequired
// }