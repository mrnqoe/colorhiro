class CreateUserTable < ActiveRecord::Migration[5.0]
  def self.up
    create_table :users do |t|
      t.belongs_to :sessions, index:true
      t.string :user_color
      t.string :share_Key
      t.timestamps
    end
  end

  def self.down
    drop_table :users
  end
end
