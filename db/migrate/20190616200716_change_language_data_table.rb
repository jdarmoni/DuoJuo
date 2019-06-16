class ChangeLanguageDataTable < ActiveRecord::Migration[5.2]
  def change
    change_column :language_data, :lang_id, :integer, :null => true

  end
end
