(function(){
    angular
        .module('app')
        .factory('blogsFactory', blogsFactory);

    function blogsFactory(){
        var blogsObj = {};

        blogsdObj.getBlogs = function(){
            var blogs = [
                {
                    id:1,
                    title:'Título del blog',
                    subtitle:'Subtítulo del blog',
                    imgUrl:'http://via.placeholder.com/100'
                }
            ];

            return blogs;
        };

        return blogdObj;
    }
})();

