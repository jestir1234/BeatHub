Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, default: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy]
    resources :albums, only: [:show] do
      resources :songs, only: [:index]
    end
    resources :songs, only: [:show]
    resources :artists, only: [:show] do
      resources :albums, only: [:index]
    end
    get '/search' => 'searches#search', as: 'search'
  end
end
