import React from 'react';

class LanguageListItem extends React.Component {
    constructor(props){
        super(props)
    }

    selectLang(){
        debugger
        dispatch(fetchLanguageDatas(this.props.lang_data))
    }
    render(){
        return (

            <div className="flag-language-box" onClick={() => this.props.fetch(this.props.lang_data)}>
                <span className={`dashboard-flag-span-child dashboard-country-` + this.props.lang_data.language_string}  ></span>
                <span className="flag-language-box-t-span">{this.props.lang_data.language_string}</span>
            </div>
            )

    }
}

export default (LanguageListItem)