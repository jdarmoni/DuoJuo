language = nil

if language_data != nil
    language = language_data.language

    json.set! language do
            json.extract! language_data, :streak, :id, :user_id, :language_string, :points, :learning, :language, :level, :sentences_translated, :to_next_level
            json.skills language_data.skills
    end
end