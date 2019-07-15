lang_data_collections = user.language_data
lang_data = nil

if lang_data_collections.length > 0
    lang_data_collections.each do |langyD|
        if langyD.language_string == user.learning_language_string
            lang_data = langyD
        end
    end
end

json.extract! user, :id, :username, :email, :language_strength, :site_streak, :active, :rupees,  :learning_language, :learning_language_string, :rupees
  
json.languages user.languages   

json.language_data do
    json.partial! "api/language_data/lang_data.json", language_data: lang_data
end

json.calendar user.calendars
