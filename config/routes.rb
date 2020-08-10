Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  #

  scope '/api' do
    mount_devise_token_auth_for 'User', at: 'users'

  end

  root 'home#index'
  get '*path', to: 'home#index'

end
