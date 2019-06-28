class CreateSkills < ActiveRecord::Migration[5.2]
  def change
    create_table :skills do |t|
      t.timestamps
      t.integer :language_data_id, null: false
      t.string :language_string, null: false
      t.string :url_title, null: false
      t.string :language_mini, null: false
      t.string :name
      t.string :title
      t.string :short

      t.integer :skill_level, null: false
      t.boolean :disabled, null: false
      t.integer :test_count
      t.boolean :lesson
      t.boolean :has_explanation
      t.string :explanation
      t.string :icon_color
      t.integer :num_lessons
      t.integer :strength
      t.boolean :beginner
      t.integer :level_sessions_finished
      t.integer :coords_y
      t.integer :coords_x
      t.integer :levels_finished
      t.integer :lesson_number
      t.boolean :learned
      t.string :description
      t.integer :index
      t.integer :num_lexemes
      t.integer :num_missing
      t.integer :num_sessions_for_level
      t.integer :num_levels
      t.boolean :locked, null: false
      t.boolean :changed
      t.integer :progress_percent
      t.boolean :mastered
    end
  end
end
