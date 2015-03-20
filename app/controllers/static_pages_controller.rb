class StaticPagesController < ApplicationController
	
	def home
		render :home,:layout => false
	end
	def homejs
		respond_to do |format|
			format.js { render 'home.js.erb' }
		end
	end
	
	def jqxtabsjs
		respond_to do |format|
			format.js { render 'jqwidgets/jqxtabs.js.erb' }
		end
	end
	
	def jqxgaugejs
		respond_to do |format|
			format.js { render 'jqwidgets/jqxgauge.js.erb' }
		end
	end
	
	def jqxchartjs
		respond_to do |format|
			format.js { render 'jqwidgets/jqxchart.js.erb' }
		end
	end
	
	def jqxexpanderjs
		respond_to do |format|
			format.js { render 'jqwidgets/jqxexpander.js.erb' }
		end
	end
	
	def jqxdatajs
		respond_to do |format|
			format.js { render 'jqwidgets/jqxdata.js.erb' }
		end
	end
	
	def jqxcorejs
		respond_to do |format|
			format.js { render 'jqwidgets/jqxcore.js.erb' }
		end
	end
	
	def boot
		render 'js/bootstrap.min.js.erb'
	end
	
	def bootcss
		render 'css/bootstrap.min.css.erb'
	end
	
	def getthemejs
		respond_to do |format|
			format.js { render 'scripts/gettheme.js.erb' }
		end
	end
	
	def customcss
		render 'css/custom.css.erb'
	end 
	
	
	
end
