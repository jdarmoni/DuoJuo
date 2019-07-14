class Calendars < ApplicationRecord
    validates :user_id, :datetime, :improvement, presence: true

end