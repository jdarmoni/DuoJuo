class Language < ApplicationRecord 

    validates :streak, :language_string, :points, :learning, :language, :level, :sentences_translated, :to_next_level, presence: true
    
end