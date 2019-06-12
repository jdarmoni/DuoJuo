
json.extract! user, :id, :username, :email, :language_strength, :site_streak, :active, :rupees,  :learning_language, :learning_language_string, :rupees
  
json.languages @languages   

json.language_data @language_data