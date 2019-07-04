@language_datas.each do |newLanguage|
    json.set! newLanguage.id do
        json.extract! newLanguage, :streak, :user_id, :language_string, :points, :learning, :language, :level, :id, :sentences_translated, :to_next_level

        json.skills newLanguage.skills
    end
end
