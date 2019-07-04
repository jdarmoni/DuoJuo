@language_datas.each do |eggs|
    json.extract! eggs, :streak, :user_id, :language_string, :points, :learning, :language, :level, :id, :sentences_translated, :to_next_level

    json.skills eggs.skills
end
