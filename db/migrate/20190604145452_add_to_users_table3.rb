class AddToUsersTable3 < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :active, :boolean
  end
end
