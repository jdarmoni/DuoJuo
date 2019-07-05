import React from 'react';

class LanguageListItem extends React.Component {
    constructor(props){
        super(props)
    }
    selectLang(){
        debugger
        let user = this.props.user

        user["learning_language_string"] = this.props.lang_data.language_string
        user["learning_language"] = this.props.lang_data.language;
        debugger
        this.props.fetch(this.props.lang_data)
        
      
        this.props.updateUser(user)
    }
    render(){
        return (

            <div className="flag-language-box" onClick={this.selectLang.bind(this)}>
                <span className={`dashboard-flag-span-child dashboard-country-` + this.props.lang_data.language_string}  ></span>
                <span className="flag-language-box-t-span">{this.props.lang_data.language_string}</span>
            </div>
            )

    }
}

export default (LanguageListItem)