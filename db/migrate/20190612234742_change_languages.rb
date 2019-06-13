class ChangeLanguages < ActiveRecord::Migration[5.2]
  def change
        add_column :languages, :user_id, :integer
        add_index :languages, [:user_id, :language_string], unique: true

  end
end
