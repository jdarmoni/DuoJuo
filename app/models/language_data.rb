class LanguageData < ApplicationRecord 
    validates :streak, :user_id, :language_string, :points, :learning, :language, :level, :sentences_translated, :to_next_level, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_many :skills,
        primary_key: :id,
        foreign_key: :language_data_id,
        class_name: :Skill
end