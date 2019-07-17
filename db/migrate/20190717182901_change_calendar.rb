class ChangeCalendar < ActiveRecord::Migration[5.2]
  def change
    change_column :calendars, :datetime, :bigint
  end
end
