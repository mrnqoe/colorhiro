Hanami::Model.migration do
  change do
    create_table :session do
      primay_key :id
      column :share_key, String
      column :admin, String
      column :init_color, String
      column :created_at, DateTime
      column :updated_at, DateTime
    end
  end
end
