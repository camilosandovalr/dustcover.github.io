(function(window, undefined) {
  var dictionary = {
    "08f49a01-4f77-4406-9a90-a035658a1142": "Colection",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Screen 1",
    "71dd244d-3987-4f74-8dd7-7aa58cca4fca": "Interfaz-06-women",
    "67bce125-f80c-47be-a197-76bd17222114": "Interfaz-07",
    "b440590a-aefb-4653-b60d-e56cc223064f": "Interfaz-06",
    "6b59e5ed-c6ff-48c2-895a-4f807a85cd78": "Interfaz-04-wome",
    "1dd64115-5216-4d75-b958-1b1a0514840a": "Interfaz-04",
    "42e69559-5eef-4e9f-9264-98c8dbecf661": "Interfaz-03",
    "87db3cf7-6bd4-40c3-b29c-45680fb11462": "960 grid - 16 columns",
    "e5f958a4-53ae-426e-8c05-2f7d8e00b762": "960 grid - 12 columns",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "Template 1",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);