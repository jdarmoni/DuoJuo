# JuoDuo
livelink: https://duojuo.herokuapp.com/#/

JuoDuo is a fully functional clone of Duolingo, that uses the actual DuoLingo User JSON (and in particular, the LanguageData Object) as an architectural reference. It was built from the ground up using a Ruby on Rails backend, PostGreSQL database, and a React - Redux frontend. 

# Key Features 

## Auth 
![Homepage Image](readmeResources/homepage.png)

Users can Login, or click Get Started to use the site anonymously. 

Clicking 'Get Started' takes you to the Register component, where you can select a language to immediately begin learning. Later, users are given the option of saving their information and progress into a profile via the CreateProfile modal in the Dashboard.


## Register 

![Register Image](readmeResources/register.png)

Once the user clicks on a language, we begin constructing a new User object, language object, and languageData object. 
