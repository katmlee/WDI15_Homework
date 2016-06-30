require 'sinatra'
require 'sinatra/reloader'
require 'httparty'

get '/home' do
  erb :get_poster
end

get '/get_poster' do
  @movie = params[:movie] #gets input from form

  if @movie.empty?
    redirect to('/home') #don't allow user to push an empty input
  else
    url = "http://omdbapi.com/?s=#{ @movie }" #url to find multiple movies with the same search
    urltwo = "http://omdbapi.com/?t=#{ @movie }" #url to find single movie
    @movie_info = HTTParty.get url
    @single_movie_info  = HTTParty. get urltwo
    if @movie_info == "" #don't allow user to push an invalid input
      redirect to('/home')
    else #retrieve from OMDB to fill variables
      @movie_poster_url = @movie_info['Poster']
      @movie_title = @movie_info['Title']
      @movie_poster_url_two = @single_movie_info['Poster']
      @movie_title_two = @single_movie_info['Title']
    end
  end

  erb :get_poster
end

get '/movie_page/:imdbID' do #the moviepage is dynamic depending on the unique identifier, imdbID
  @movie = params[:imdbID] #taken from the each function in get_poster
  url = "http://omdbapi.com/?i=#{ @movie }" #retrieve from i parameter in OMDB documentation
  @movie_info = HTTParty.get url
  @movie_poster_url = @movie_info['Poster']
  @movie_title = @movie_info['Title']
  @movie_blurb = @movie_info['Plot']

  erb :movie_page
end
