# == Schema Information
#
# Table name: books
#
#  id         :integer          not null, primary key
#  title      :string
#  image      :text
#  year       :string
#  genre      :string
#  synopsis   :text
#  created_at :datetime
#  updated_at :datetime
#

class Book < ActiveRecord::Base

end
