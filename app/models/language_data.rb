class LanguageData < ApplicationRecord
    # doesn't need to know lang IDs (re: schema)
    validates :user_id, presence: true

    belongs_to :user,
        class_name: :User,
        primary_key: :id,
        foreign_key: :user_id

    # has_many :langs,
    #     primary_key: :id,
    #     foreign_key: :language_data_id,
    #     class_name: :Lang

    
end