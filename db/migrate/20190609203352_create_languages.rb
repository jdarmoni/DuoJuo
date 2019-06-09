class CreateLanguages < ActiveRecord::Migration[5.2]
  def change
    create_table :languages do |t|
      t.integer :streak, null: false
      t.string :language_string, null: false
      t.integer :points, null: false
      t.boolean :learning, null: false
      t.string :language, null: false
      t.integer :level, null: false
      t.integer :sentences_translated, null: false
      t.integer :to_next_level, null: false
    end
  end
end
