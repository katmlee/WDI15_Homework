class ParksController < ApplicationController
def index
  @parks = Park.all
end

def new
end

def create
  Park.create park_params
  redirect_to parks_path
end

def show
  @park = Park.find params[:id]
end

def destroy
  park = Park.find params[:id]
  park.destroy
  redirect_to parks_path
end

def edit
  @park = Park.find params[:id]
end

def update
  park = Park.find params[:id]
  park.update park_params
  redirect_to parks_path
end

private
  def park_params
    params.require(:park).permit(:name, :image, :country, :state, :year, :annual_visitors, :size, :visited, :known_for)
  end
end
