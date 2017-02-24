# this has to come first, or settings isn't built up for the bundler call.
require 'sinatra'
require 'mongo'
require 'rubygems'
require 'json/ext' # required for .to_json
require 'bundler'
Bundler.require(:default, settings.environment)

get '/' do
  'welcome to a strange world.'
end

configure do
  db = Mongo::Client.new([ '127.0.0.1:27017' ], :database => 'test')
  set :mongo_db, db[:test]
end

get '/collections/?' do
  content_type :json
  settings.mongo_db.database.collection_names.to_json
end

helpers do
  # a helper method to turn a string ID
  # representation into a BSON::ObjectId
  def object_id val
    begin
      BSON::ObjectId.from_string(val)
    rescue BSON::ObjectId::Invalid
      nil
    end
  end

  def document_by_id id
    id = object_id(id) if String === id
    if id.nil?
      {}.to_json
    else
      document = settings.mongo_db.find(:_id => id).to_a.first
      (document || {}).to_json
    end
  end
end

# SINATRA FINDING RECORDS IN MONGODB

  get '/documents/?' do
    content_type :json
    settings.mongo_db.find.to_a.to_json
  end

  # find a document by its ID
  get '/document/:id/?' do
    content_type :json
    document_by_id(params[:id])
  end

# SINATRA INSERTING RECORDS INTO MONGODB

  # insert a new document from the request parameters,
  # then return the full document
  post '/new_document/?' do
  content_type :json
  db = settings.mongo_db
  result = db.insert_one params
  db.find(:_id => result.inserted_id).to_a.first.to_json
  end

# SINATRA UPDATING RECORDS IN MONGODB

  # update the document specified by :id, setting its
  # contents to params, then return the full document
  put '/update/:id/?' do
    content_type :json
    id = object_id(params[:id])
    settings.mongo_db.find(:_id => id).
      find_one_and_update('$set' => request.params)
    document_by_id(id)
  end

  # update the document specified by :id, setting just its
  # name attribute to params[:name], then return the full
  # document
  put '/update_name/:id/?' do
    content_type :json
    id   = object_id(params[:id])
    name = params[:name]
    settings.mongo_db.find(:_id => id).
      find_one_and_update('$set' => {:name => name})
    document_by_id(id)
  end

# SINATRA DELETING RECORDS IN MONGODB

# delete the specified document and return success
  delete '/remove/:id' do
    content_type :json
    db = settings.mongo_db
    id = object_id(params[:id])
    documents = db.find(:_id => id)
    if !documents.to_a.first.nil?
      documents.find_one_and_delete
      {:success => true}.to_json
    else
      {:success => false}.to_json
    end
  end