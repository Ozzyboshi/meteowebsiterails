Rails.application.routes.draw do
  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  root 'static_pages#home'
  get 'presentation' => 'static_pages#presentation'
  get 'tempmaxmin' => 'static_pages#tempmaxmin'
  get 'js/home' => 'static_pages#homejs'
  get 'last24hr' => 'static_pages#last24hr'
  get 'last48hr' => 'static_pages#last48hr'
  get 'last72hr' => 'static_pages#last72hr'
  get 'last96hr' => 'static_pages#last96hr'
  get 'last168hr' => 'static_pages#last168hr'
  get 'calendar' => 'static_pages#calendar'
  get 'rainfall' => 'static_pages#rainfall'
  get '/js/tempmaxmin.js'  => 'static_pages#tempmaxminjs'
  get '/js/last24hr.js'  => 'static_pages#last24hrjs'
  get '/js/last48hr.js'  => 'static_pages#last48hrjs'
  get '/js/last72hr.js'  => 'static_pages#last72hrjs'
  get '/js/last96hr.js'  => 'static_pages#last96hrjs'
  get '/js/last168hr.js'  => 'static_pages#last168hrjs'
  get '/js/calendar.js'  => 'static_pages#calendarjs'
  get '/js/rainfall.js'  => 'static_pages#rainfalljs'
  get '/js/rainyday.js'  => 'static_pages#rainydayjs'
  get '/js/worldmap.js'  => 'static_pages#worldmapjs'
  get 'jqwidgets/jqxtabs' => 'static_pages#jqxtabsjs'
  get 'jqwidgets/jqxgauge' => 'static_pages#jqxgaugejs'
  get 'jqwidgets/jqxchart' => 'static_pages#jqxchartjs'
  get 'jqwidgets/jqxexpander' => 'static_pages#jqxexpanderjs'
  get 'jqwidgets/jqxdata' => 'static_pages#jqxdatajs'
  get 'jqwidgets/jqxcore' => 'static_pages#jqxcorejs'
  get 'jqwidgets/jqxdatatable' => 'static_pages#jqxdatatable'
  get 'scripts/gettheme' => 'static_pages#getthemejs'
  get 'js/bootstrap.min.js' => 'static_pages#boot'
  get 'js/bootstrap-waitingfor.js' => 'static_pages#bootstrapwaitingforjs'
  get 'css/bootstrap.min.css' => 'static_pages#bootcss'
  get 'css/custom.css' => 'static_pages#customcss'
  get 'centralinameteoubertini.crx' => 'static_pages#centralinameteoubertini'
  get 'images/background' => 'static_pages#background'
  get 'worldmap' => 'static_pages#worldmap'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
