import React from 'react';

class LanguageListItem extends React.Component {
    constructor(props){
        super(props)
    }

    selectLang(){

    }
    render(){
        return (

            <div className="flag-language-box" onClick={this.selectLang}>
                <span className={`dashboard-flag-span-child dashboard-country-` + this.props.lang_data.language_string}  ></span>
                <span className="flag-language-box-t-span">{this.props.lang_data.language_string}</span>
            </div>
            )

    }
}

export default (LanguageListItem)