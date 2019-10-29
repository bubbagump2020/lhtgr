Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  resources(:dungeon_masters)
  post('/login', to: 'authentication#dm_login')
end
