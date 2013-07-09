Ext.data.JsonP.Luc_PluginManager({"tagname":"class","name":"Luc.PluginManager","extends":null,"mixins":[],"alternateClassNames":[],"aliases":{},"singleton":false,"requires":[],"uses":[],"enum":null,"override":null,"inheritable":null,"inheritdoc":null,"meta":{"protected":true},"private":null,"id":"class-Luc.PluginManager","members":{"cfg":[{"name":"defaultPlugin","tagname":"cfg","owner":"Luc.PluginManager","meta":{},"id":"cfg-defaultPlugin"}],"property":[],"method":[{"name":"_createPlugin","tagname":"method","owner":"Luc.PluginManager","meta":{"protected":true},"id":"method-_createPlugin"},{"name":"_createPlugins","tagname":"method","owner":"Luc.PluginManager","meta":{"protected":true},"id":"method-_createPlugins"},{"name":"_getPluginConfigFromInstance","tagname":"method","owner":"Luc.PluginManager","meta":{"protected":true},"id":"method-_getPluginConfigFromInstance"},{"name":"_init","tagname":"method","owner":"Luc.PluginManager","meta":{"protected":true},"id":"method-_init"},{"name":"_initPlugin","tagname":"method","owner":"Luc.PluginManager","meta":{"protected":true},"id":"method-_initPlugin"},{"name":"addPlugin","tagname":"method","owner":"Luc.PluginManager","meta":{},"id":"method-addPlugin"},{"name":"destroyAllPlugins","tagname":"method","owner":"Luc.PluginManager","meta":{},"id":"method-destroyAllPlugins"},{"name":"destroyPlugin","tagname":"method","owner":"Luc.PluginManager","meta":{},"id":"method-destroyPlugin"},{"name":"getPlugin","tagname":"method","owner":"Luc.PluginManager","meta":{},"id":"method-getPlugin"}],"event":[],"css_var":[],"css_mixin":[]},"linenr":13,"files":[{"filename":"pluginManager.js","href":"pluginManager.html#Luc-PluginManager"}],"html_meta":{"protected":null},"statics":{"cfg":[],"property":[],"method":[],"event":[],"css_var":[],"css_mixin":[]},"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"parentMixins":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/pluginManager.html#Luc-PluginManager' target='_blank'>pluginManager.js</a></div></pre><div class='doc-contents'><p>This class is used by <a href=\"#!/api/Luc.compositionEnums-property-PluginManager\" rel=\"Luc.compositionEnums-property-PluginManager\" class=\"docClass\">Luc.compositionEnums.PluginManager</a> to add its functionality\nto any class.   By <a href=\"#!/api/Luc.compositionEnums-property-PluginManager\" rel=\"Luc.compositionEnums-property-PluginManager\" class=\"docClass\">default</a> it adds\nall of these public methods to the instance.This class is designed to work as a composition,\nit is exposed as not private so it can be extended if needed.   Check \"protected\" which\nis a part of the Show v dropdown on the right to see the protected methods.</p>\n\n<pre><code>function MyPlugin() {\n    this.myCoolName = 'coo';\n\n    this.init = function() {\n        console.log('im getting initted');\n    }\n    this.destroy = function() {\n        console.log('MyPlugin instance being destroyed')\n    }\n}\n\nvar C = <a href=\"#!/api/Luc.define\" rel=\"Luc.define\" class=\"docClass\">Luc.define</a>({\n    $compositions: <a href=\"#!/api/Luc.compositionEnums-property-PluginManager\" rel=\"Luc.compositionEnums-property-PluginManager\" class=\"docClass\">Luc.compositionEnums.PluginManager</a>\n});\n\nvar c = new C({\n    plugins: [{\n            Constructor: MyPlugin,\n            myCoolName: 'coo'\n        }\n    ]\n});\n\n&gt;im getting initted\n\nvar plugInstance = c.addPlugin({\n    destroy: function() {\n        console.log('Im getting destroyed')\n    }\n});\n\nc.getPlugin(<a href=\"#!/api/Luc.Plugin\" rel=\"Luc.Plugin\" class=\"docClass\">Luc.Plugin</a>)\n&gt; Plugin {destroy: function, owner: MyClass, init: function, destroy: function}\n\nc.getPlugin(MyPlugin)\n&gt; MyPlugin {myCoolName: \"coo\", init: function, destroy: function}\n\nc.destroyAllPlugins()\n\n&gt;MyPlugin instance being destroyed\n&gt;Im getting destroyed\n\nc.getPlugin(MyPlugin)\n&gt;false\n</code></pre>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-defaultPlugin' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Luc.PluginManager'>Luc.PluginManager</span><br/><a href='source/pluginManager.html#Luc-PluginManager-cfg-defaultPlugin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Luc.PluginManager-cfg-defaultPlugin' class='name not-expandable'>defaultPlugin</a><span> : Constructor</span></div><div class='description'><div class='short'>\n</div><div class='long'>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-_createPlugin' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Luc.PluginManager'>Luc.PluginManager</span><br/><a href='source/pluginManager.html#Luc-PluginManager-method-_createPlugin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Luc.PluginManager-method-_createPlugin' class='name expandable'>_createPlugin</a>( <span class='pre'>config</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_createPlugins' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Luc.PluginManager'>Luc.PluginManager</span><br/><a href='source/pluginManager.html#Luc-PluginManager-method-_createPlugins' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Luc.PluginManager-method-_createPlugins' class='name expandable'>_createPlugins</a>( <span class='pre'></span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-_getPluginConfigFromInstance' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Luc.PluginManager'>Luc.PluginManager</span><br/><a href='source/pluginManager.html#Luc-PluginManager-method-_getPluginConfigFromInstance' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Luc.PluginManager-method-_getPluginConfigFromInstance' class='name expandable'>_getPluginConfigFromInstance</a>( <span class='pre'></span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n</div></div></div><div id='method-_init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Luc.PluginManager'>Luc.PluginManager</span><br/><a href='source/pluginManager.html#Luc-PluginManager-method-_init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Luc.PluginManager-method-_init' class='name expandable'>_init</a>( <span class='pre'>instanceValues</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>instanceValues</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-_initPlugin' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Luc.PluginManager'>Luc.PluginManager</span><br/><a href='source/pluginManager.html#Luc-PluginManager-method-_initPlugin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Luc.PluginManager-method-_initPlugin' class='name expandable'>_initPlugin</a>( <span class='pre'>plugin</span> )<strong class='protected signature' >protected</strong></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>plugin</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-addPlugin' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Luc.PluginManager'>Luc.PluginManager</span><br/><a href='source/pluginManager.html#Luc-PluginManager-method-addPlugin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Luc.PluginManager-method-addPlugin' class='name expandable'>addPlugin</a>( <span class='pre'>pluginConfig</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Add a plugin to the instance and init the\nplugin. ...</div><div class='long'><p>Add a plugin to the instance and init the\nplugin.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>pluginConfig</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>the created plugin instance</p>\n</div></li></ul></div></div></div><div id='method-destroyAllPlugins' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Luc.PluginManager'>Luc.PluginManager</span><br/><a href='source/pluginManager.html#Luc-PluginManager-method-destroyAllPlugins' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Luc.PluginManager-method-destroyAllPlugins' class='name expandable'>destroyAllPlugins</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Call destroy on all of the plugins\nand remove them. ...</div><div class='long'><p>Call destroy on all of the plugins\nand remove them.</p>\n</div></div></div><div id='method-destroyPlugin' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Luc.PluginManager'>Luc.PluginManager</span><br/><a href='source/pluginManager.html#Luc-PluginManager-method-destroyPlugin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Luc.PluginManager-method-destroyPlugin' class='name expandable'>destroyPlugin</a>( <span class='pre'>object</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Remove the plugin and if found destroy it. ...</div><div class='long'><p>Remove the plugin and if found destroy it.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>object</span> : Object/Constructor<div class='sub-desc'><p>to use to match\nthe plugin to remove.</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>the destroyed plugin.</p>\n</div></li></ul></div></div></div><div id='method-getPlugin' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Luc.PluginManager'>Luc.PluginManager</span><br/><a href='source/pluginManager.html#Luc-PluginManager-method-getPlugin' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Luc.PluginManager-method-getPlugin' class='name expandable'>getPlugin</a>( <span class='pre'>obj</span> ) : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></div><div class='description'><div class='short'>Get a plugin instance. ...</div><div class='long'><p>Get a plugin instance.  A Constructor or an object can be used\nto find a plugin.</p>\n\n<pre><code>      c.addPlugin({a:1})\n      c.getPlugin({a:1})\n      &gt;<a href=\"#!/api/Luc.Plugin\" rel=\"Luc.Plugin\" class=\"docClass\">Luc.Plugin</a>({a:1})\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>obj</span> : <a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a><div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Object\" rel=\"Object\" class=\"docClass\">Object</a></span><div class='sub-desc'><p>the plugin instance if found.</p>\n</div></li></ul></div></div></div></div></div></div></div>"});