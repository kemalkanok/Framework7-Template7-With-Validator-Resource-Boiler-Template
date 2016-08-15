function view(path,data,destination) {
	$$.get(window.config.template_path+path+window.config.template_suffix,function (d) {
		var template = d;
		var compiled = Template7(template).compile();
		var compiledRendered = compiled(data);
		$$(destination).html(compiledRendered);
	})
}