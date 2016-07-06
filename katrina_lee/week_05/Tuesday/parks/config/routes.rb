Rails.application.routes.draw do

  get '/parks' => 'parks#index'
  get '/parks/new' => 'parks#new'
  post '/parks' => 'parks#create'
  get '/parks/:id' => 'parks#show', :as =>'park'
  post '/parks/:id/delete' => 'parks#destroy', :as =>'park_delete'
  get '/parks/:id/edit' => 'parks#edit', :as => 'park_edit'
  post '/parks/:id' => 'parks#update'

end
