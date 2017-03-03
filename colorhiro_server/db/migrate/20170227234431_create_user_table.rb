class CreateUserTable < ActiveRecord::Migration[5.0]
  def self.up
    create_table :rooms do |t|
      t.string :key
      t.string :admin
      t.timestamps
    end

    create_table :users do |t|
      t.belongs_to :rooms
      t.string :user_color
      t.string :name
      t.timestamps
    end
  end

  def self.down
    drop_table :users
    drop_table :rooms
  end
end
