require 'sinatra'

get '/' do
  'Hello world!'
end

set :bind, '0.0.0.0'
set :port, 3000
