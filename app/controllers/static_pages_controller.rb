class StaticPagesController < ApplicationController
	
	def home
		render :home,:layout => false
	end
	
	def tempmaxmin
		render :tempmaxmin,:layout => false
	end
	
	def last24hr
		render :last24hr,:layout => false
	end
	def last24hrumi
		render :last24hrumi,:layout => false
	end
	def last24hrpr
		render :last24hrpr,:layout => false
	end
	
	def homejs
		respond_to do |format|
			format.js { render 'home.js.erb' }
		end
	end
	def tempmaxminjs
		render 'tempmaxmin.js.erb' 
	end
	def last24hrjs
		render 'last24hr.js.erb' 
	end
	def last24hrumijs
		render 'last24hrumi.js.erb' 
	end
	def last24hrprjs
		render 'last24hrpr.js.erb' 
	end
	
	def jqxtabsjs
		respond_to do |format|
			format.js { render 'jqwidgets/jqxtabs.js' }
		end
	end
	
	def jqxgaugejs
		respond_to do |format|
			format.js { render 'jqwidgets/jqxgauge.js' }
		end
	end
	
	def jqxchartjs
		respond_to do |format|
			format.js { render 'jqwidgets/jqxchart.js' }
		end
	end
	
	def jqxexpanderjs
		respond_to do |format|
			format.js { render 'jqwidgets/jqxexpander.js' }
		end
	end
	
	def jqxdatajs
		respond_to do |format|
			format.js { render 'jqwidgets/jqxdata.js' }
		end
	end
	
	def jqxcorejs
		respond_to do |format|
			format.js { render 'jqwidgets/jqxcore.js' }
		end
	end
	def jqxdatatable
		respond_to do |format|
			format.js { render 'jqwidgets/jqxdatatable.js' }
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
