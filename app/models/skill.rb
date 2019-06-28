class Skill < ApplicationRecord
    validates :language_data_id, :language_string, :url_title, :language_mini, :skill_level, presence: true

    belongs_to :language_data,
        class_name: :LanguageData
end