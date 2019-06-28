class ChangeSkills < ActiveRecord::Migration[5.2]
  def change
    remove_column(:skills, :changed)
  end
end
