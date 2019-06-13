class Language < ApplicationRecord 

    validates :streak, :language_string, :points, :learning, :language, :level, :sentences_translated, :to_next_level, presence: true
    
    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

end