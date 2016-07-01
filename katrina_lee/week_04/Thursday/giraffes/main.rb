require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do
  erb :home
end

get '/giraffes' do
  query = "SELECT * FROM giraffes"
  @giraffes = query_db query

  erb :giraffe_list
end
#add new giraffe
get '/giraffes/add' do


  erb :add_giraffe
end

post '/giraffes' do
  query = "INSERT INTO giraffes (first_name, last_name, image, city, birthday, occupation, fav_food, hobby, bm_contribution, fav_bm_memory, anything_else) VALUES ('#{params[:first_name]}', '#{params[:last_name]}', '#{params[:image]}', '#{params[:city]}', '#{params[:birthday]}', '#{params[:occupation]}', '#{params[:fav_food]}', '#{params[:hobby]}', '#{params[:bm_contribution]}', '#{params[:fav_bm_memory]}', '#{params[:anything_else]}')"
  query_db query
  redirect to ('/giraffes')
end

#to delete
get '/giraffes/:id/delete' do
  query_db "DELETE FROM giraffes WHERE id = #{params[:id]}"
  redirect to ('/giraffes')
end

#to update
get '/giraffes/:id/edit' do
  @giraffe = query_db "SELECT * FROM giraffes WHERE id = #{params[:id]}"
  @giraffe = @giraffe.first

  erb :edit_profile
end

post '/giraffes/:id' do
  query = "UPDATE giraffes SET first_name= '#{params[:first_name]}', last_name= '#{params[:last_name]}', image= '#{params[:image]}', city= '#{params[:city]}', birthday= '#{params[:birthday]}', occupation= '#{params[:occupation]}', fav_food= '#{params[:fav_food]}', hobby= '#{params[:hobby]}', bm_contribution= '#{params[:bm_contribution]}', fav_bm_memory= '#{params[:fav_bm_memory]}', anything_else= '#{params[:anything_else]}' WHERE id = '#{params[:id]}'"

  query_db query
  redirect to('/giraffes/' + params[:id])
end

#to get to profile
get '/giraffes/:id' do
  @giraffe = query_db "SELECT * FROM giraffes WHERE id = #{params[:id]}"
  @giraffe = @giraffe.first

  erb :giraffe_profile
end

def query_db(sql)
  db = SQLite3::Database.new'database.db'
  db.results_as_hash = true

  puts sql

  result = db.execute sql
  db.close
  result

end
