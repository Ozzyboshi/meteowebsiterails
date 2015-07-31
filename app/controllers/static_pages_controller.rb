class StaticPagesController < ApplicationController
	
	helper ApplicationHelper

	def home
		render :home,:layout => false
	end
	
	def tempmaxmin
		render :tempmaxmin,:layout => false
	end
	
	def last24hr
		render :last24hr,:layout => false
	end
	
	def last48hr
		render :last48hr,:layout => false
	end
	def calendar
		render :calendar,:layout => false
	end
	def rainfall
		render :rainfall,:layout => false
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
	def last48hrjs
		render 'last48hr.js.erb' 
	end
	def last72hrjs
		render 'last72hr.js.erb' 
	end
	
	def calendarjs
		render 'calendar.js.erb' 
	end
	def rainfalljs
		render 'rainfall.js.erb' 
	end
	def rainydayjs
		render 'rainyday.js.erb' 
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
	def bootstrapwaitingforjs
		render 'js/bootstrap-waitingfor.js.erb'
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
