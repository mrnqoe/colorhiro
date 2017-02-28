class CreateSessionTable < ActiveRecord::Migration[5.0]
  def self.up
    create_table :sessions do |t|
       t.string :share_key
       t.string :init_color
       t.string :admin
       t.timestamps
    end
  end

  def self.down
    drop_table :sessions
  end
end
