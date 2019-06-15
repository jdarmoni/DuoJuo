class CreateLanguageData < ActiveRecord::Migration[5.2]
  def change
    create_table :language_data do |t|
      t.integer :streak, null: false
      t.string :language_string, null: false
      t.string :language, null: false
      t.integer :points, null: false
      t.integer :fluency_score
      t.boolean :first_time
      t.integer :points_rank
      t.integer :level_percent
      t.integer :next_level
      t.integer :language_strength
      t.boolean :max_level
      t.integer :num_skills_learned
      t.boolean :learning, null: false
      t.integer :level, null: false
      t.integer :sentences_translated, null: false
      t.integer :to_next_level, null: false
      t.integer :user_id, null: false
    end
  end
end
