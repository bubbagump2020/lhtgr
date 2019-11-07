Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources(:dungeon_masters)
  resources(:players)
  resources(:campaigns)
  resources(:characters)
  resources(:conversations)
  resources(:messages)
  mount ActionCable.server => '/cable'
  post('/dm_login', to: 'authentication#dm_login')
  post('/player_login', to: 'authentication#player_login')
end
