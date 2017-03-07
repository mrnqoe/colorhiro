class CreateRoomTable < ActiveRecord::Migration[5.0]
  def self.up
    create_table :rooms do |t|
      t.string :key
      t.string :admin
      t.timestamps
    end
  end

  def self.down
    drop_table :rooms
  end
end
