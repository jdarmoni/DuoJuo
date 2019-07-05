import React from 'react';

class LanguageListItem extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return (

            <div className="flag-language-box">
                <span className={`dashboard-flag-span-child dashboard-country-` + this.props.language_string}  ></span>
                <span className="flag-language-box-t-span">{this.props.language_string}</span>
            </div>
            )

    }
}

export default (LanguageListItem)