Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #

  mount_devise_token_auth_for 'User', at: 'users', controllers: {
    confirmations: 'users/confirmations'
  }

  scope '/api' do
    resource :articles, only: [:create, :update, :destroy]
    post '/articles/image', to: 'articles#upload_image'
    get '/articles', to: 'articles#index'
    get '/current-user', to: 'users#current_logged_in_user'

  end

  root 'home#index'
  get '/email-confirmed', to: 'home#index', as: 'email_confirmed'

  # get '*path', to: 'home#index'
  get '*path', to: 'home#index', constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }
end
