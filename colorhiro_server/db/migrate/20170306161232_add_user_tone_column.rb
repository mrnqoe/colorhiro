class AddUserToneColumn < ActiveRecord::Migration[5.0]
  def self.up
    add_column :users, :tone, :string
  end

  def self.down
    remove_column :users, :tone, :string
  end
 end
