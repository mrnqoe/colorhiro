require 'sinatra'

get '/' do
  'Hello t34m!'
end

set :bind, '0.0.0.0'
set :port, 3000
