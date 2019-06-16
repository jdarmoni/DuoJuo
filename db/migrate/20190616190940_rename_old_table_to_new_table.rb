class RenameOldTableToNewTable < ActiveRecord::Migration[5.2]
  def change
        rename_table :language_data, :lang
  end
end
