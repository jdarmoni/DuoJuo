class CreateCalendar < ActiveRecord::Migration[5.2]
  def change
    create_table :calendars do |t|
      t.integer :user_id, null: false
      t.integer :datetime
      t.integer :improvement
      
    end
  end
end
