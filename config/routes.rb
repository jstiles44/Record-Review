Rails.application.routes.draw do
  post '/auth/login', to: 'authentication#login'
  get '/auth/verify', to: 'authentication#verify'
  resources :reviews
  resources :albums
  resources :users
  post '/albums/:album_id/reviews/:id', to: 'reviews#add_review'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
