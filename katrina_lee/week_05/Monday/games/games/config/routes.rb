Rails.application.routes.draw do
  root:to => 'pages#home'

  get '/magic8' => 'game#magic8'
  get '/magic8/fortune'=> 'game#fortune'

  get '/secret' => 'game#secret'
  get '/secret/:number' =>'game#secret'

  get '/rock_paper_scissors' => 'game#rock_paper_scissors_play'
  get '/rock_paper_scissors/:throw' => 'game#rock_paper_scissors_play'

end
