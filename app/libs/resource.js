window.resource = function (path) {
	return {
		get:function (cbs,cbf) {
			$$.ajax({
				url: window.config.resource_base_path+path,
				type: 'GET',
			  	statusCode: {
				    200: function(data) {
				    	cbs(data);
				    },
				    404:function (d) {
				    	cbf(d);
				    },
				    412:function () {
				    	cbf();
				    },
				    401:function () {
				    	cbf();
				    },
				    403:function () {
				    	cbf();
				    },
				    500:function () {
				    	cbf();
				    }
				  }
			});
		},
		show:function (id,cbs,cbf) {
			$$.ajax({
				url: window.config.resource_base_path+path+id,
				type: 'GET',
			  	statusCode: {
				    200: function(data) {
				    	cbs(data);
				    },
				    404:function (d) {
				    	cbf(d);
				    },
				    412:function () {
				    	cbf();
				    },
				    401:function () {
				    	cbf();
				    },
				    403:function () {
				    	cbf();
				    },
				    500:function () {
				    	cbf();
				    }
				  }
			});
		},
		store:function (data,cbs,cbf) {
			$$.ajax({
				url: window.config.resource_base_path+path,
				type: 'POST',
				data:data,
			  	statusCode: {
				    200: function(data) {
				    	cbs(data);
				    },
				    404:function (d) {
				    	cbf(d);
				    },
				    412:function () {
				    	cbf();
				    },
				    401:function () {
				    	cbf();
				    },
				    403:function () {
				    	cbf();
				    },
				    500:function () {
				    	cbf();
				    }
				  }
			});
		},
		update:function (data,id,cbs,cbf) {
			$$.ajax({
				url: window.config.resource_base_path+path + id,
				type: 'PUT',
				data:data,
			  	statusCode: {
				    200: function(data) {
				    	cbs(data);
				    },
				    404:function (d) {
				    	cbf(d);
				    },
				    412:function () {
				    	cbf();
				    },
				    401:function () {
				    	cbf();
				    },
				    403:function () {
				    	cbf();
				    },
				    500:function () {
				    	cbf();
				    }
				  }
			});
		},
		delete:function (id,cbs,cbf) {
			$$.ajax({
				url: window.config.resource_base_path+path+id,
				type: 'DELETE',
			  	statusCode: {
				    200: function(data) {
				    	cbs(data);
				    },
				    404:function (d) {
				    	cbf(d);
				    },
				    412:function () {
				    	cbf();
				    },
				    401:function () {
				    	cbf();
				    },
				    403:function () {
				    	cbf();
				    },
				    500:function () {
				    	cbf();
				    }
				  }
			});
		}
	};
}
	