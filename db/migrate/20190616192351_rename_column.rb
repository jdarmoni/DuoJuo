class RenameColumn < ActiveRecord::Migration[5.2]
  def change
        rename_column :lang, :user_id, :language_data_id
  end
end
