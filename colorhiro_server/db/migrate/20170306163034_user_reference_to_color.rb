class UserReferenceToColor < ActiveRecord::Migration[5.0]
  def change
    add_reference(:users, :colors)
  end
end
