class CreateLanguageData1 < ActiveRecord::Migration[5.2]
  def change
    create_table :language_data do |t|
      t.integer :user_id, null: false
      t.integer :lang_id, null: false
    end
  end
end
