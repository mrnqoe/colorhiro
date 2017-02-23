Hanami::Model.migration do
  change do
    create_table :sessions do
      primary_key :id
      column :shared_key, String
      column :admin, String
      column :init_color, String
      column :created_at, DateTime
      column :updated_at, DateTime

    end
  end
end

