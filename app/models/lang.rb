class Lang < ApplicationRecord 
    validates :streak, :user_id, :language_string, :language_data_id, :points, :learning, :language, :level, :sentences_translated, :to_next_level, presence: true

    # belongs_to :language_data,
    #     primary_key: :id,
    #     foreign_key: :language_data_id,
    #     class_name: :LanguageData

end