(function(){
    angular
        .module('app')
        .factory('blogsFactory', blogsFactory);

    function blogsFactory(){
        var blogsObj = {};

        blogsObj.getBlogs = function(){
            var blogs = [
                {
                 imgSrc: 'img/mc2.png', 
                 title: 'Misceláneo al Cuadrado', 
                 subtitle: 'Un blog de cualquier cosa',
                 url: 'https://cealcuadrado.tumblr.com'
                },
                {
                 imgSrc: 'img/cvd.jpg', 
                 title: 'Cristian Ve Docs', 
                 subtitle: 'Comentarios sobre documentales que veo',
                 url: 'https://cristianvedocs.tumblr.com'
                },
                {
                  imgSrc: 'img/ce2ed.jpg',
                  title: 'Al Cuadrado En Detalle',
                  subtitle: 'Aquí hablo largo y extendido',
                  url: 'https://alcuadradoendetalle.tumblr.com'
                }
              ];

            return blogs;
        };

        return blogsObj;
    }
})();

