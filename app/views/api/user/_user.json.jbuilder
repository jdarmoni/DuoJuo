lang_data = user.language_data
language = lang_data.language

json.extract! user, :id, :username, :email, :language_strength, :site_streak, :active, :rupees,  :learning_language, :learning_language_string, :rupees
  
json.languages user.languages   

json.language_data do
    json.set! language, lang_data
end