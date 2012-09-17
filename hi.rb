require 'sinatra'

get '/' do
  #"Hello Sinatra!"
  #erb :index
  erb :fluid
end

get '/ajax1' do
  sleep 1
  erb :ajax1
end

get '/ajax2' do
  erb :ajax2
end
