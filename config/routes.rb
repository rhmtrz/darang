Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #

  scope '/api' do
    mount_devise_token_auth_for 'User', at: 'users'
    resource :articles, only: [:create, :update, :destroy]
    post '/articles/image', to: 'articles#upload_image'
    get '/articles', to: 'articles#index'
  end

  root 'home#index'
  # get '*path', to: 'home#index'
  get '*path', to: 'home#index', constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }
end
