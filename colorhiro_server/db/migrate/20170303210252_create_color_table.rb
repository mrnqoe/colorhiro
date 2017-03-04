class CreateColorTable < ActiveRecord::Migration[5.0]
  def self.up
    create_table :colors do |t|
      t.belongs_to :users
      t.string :name
      t.string :hex
      t.timestamps
    end
  end

  def self.down
    drop_table :colors
  end
end
