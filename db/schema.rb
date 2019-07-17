# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_07_17_182901) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "calendars", force: :cascade do |t|
    t.integer "user_id", null: false
    t.bigint "datetime"
    t.integer "improvement"
  end

  create_table "language_data", force: :cascade do |t|
    t.integer "streak", null: false
    t.string "language_string", null: false
    t.string "language", null: false
    t.integer "points", null: false
    t.integer "fluency_score"
    t.boolean "first_time"
    t.integer "points_rank"
    t.integer "level_percent"
    t.integer "next_level"
    t.integer "language_strength"
    t.boolean "max_level"
    t.integer "num_skills_learned"
    t.boolean "learning", null: false
    t.integer "level", null: false
    t.integer "sentences_translated", null: false
    t.integer "to_next_level", null: false
    t.integer "user_id", null: false
  end

  create_table "languages", force: :cascade do |t|
    t.integer "streak", null: false
    t.string "language_string", null: false
    t.integer "points", null: false
    t.boolean "learning", null: false
    t.string "language", null: false
    t.integer "level", null: false
    t.integer "sentences_translated", null: false
    t.integer "to_next_level", null: false
    t.integer "user_id"
    t.index ["user_id", "language_string"], name: "index_languages_on_user_id_and_language_string", unique: true
  end

  create_table "skills", force: :cascade do |t|
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "language_data_id", null: false
    t.string "language_string", null: false
    t.string "url_title", null: false
    t.string "language_mini", null: false
    t.string "name"
    t.string "title"
    t.string "short"
    t.integer "skill_level", null: false
    t.boolean "disabled", null: false
    t.integer "test_count"
    t.boolean "lesson"
    t.boolean "has_explanation"
    t.string "explanation"
    t.string "icon_color"
    t.integer "num_lessons"
    t.integer "strength"
    t.boolean "beginner"
    t.integer "level_sessions_finished"
    t.integer "coords_y"
    t.integer "coords_x"
    t.integer "levels_finished"
    t.integer "lesson_number"
    t.boolean "learned"
    t.string "description"
    t.integer "index"
    t.integer "num_lexemes"
    t.integer "num_missing"
    t.integer "num_sessions_for_level"
    t.integer "num_levels"
    t.boolean "locked", null: false
    t.integer "progress_percent"
    t.boolean "mastered"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "email", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "language_data"
    t.integer "language_strength"
    t.integer "site_streak"
    t.integer "languages"
    t.string "learning_language"
    t.string "learning_language_string"
    t.integer "rupees"
    t.boolean "active"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
