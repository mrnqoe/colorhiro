class ChangeUserColorRelation < ActiveRecord::Migration[5.0]
  def change
    remove_reference(:colors, :users, index: true)
  end
end
