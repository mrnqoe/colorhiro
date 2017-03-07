class CreateUserTable < ActiveRecord::Migration[5.0]
  def self.up
    create_table :users do |t|
      t.belongs_to :rooms
      t.string :name
      t.string :color
      t.timestamps
    end
  end

  def self.down
    drop_table :users
  end
end
