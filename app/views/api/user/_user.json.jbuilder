lang_data = user.language_data

json.extract! user, :id, :username, :email, :language_strength, :site_streak, :active, :rupees,  :learning_language, :learning_language_string, :rupees
  
json.languages user.languages   

json.language_data do
    json.partial! "api/language_data/lang_data.json", language_data: lang_data[0]
end
