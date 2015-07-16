module ApplicationHelper
	def ws_host()
		ENV['WS_HOST']
 	end
 	def ws_port()
   		ENV['WS_PORT']
 	end
end
