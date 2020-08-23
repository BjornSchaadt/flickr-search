
var app = new Vue({
    el: '#app',
    data: {
        url_base: 'https://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?',
        query: 'Joe Exotic',
        querystring: "Joe Exotic"
    },
    mounted:function(){
        this.fetchImagesInit()
    },
    methods: {
        fetchImages: function (e) {
            if(e.key == "Enter"){
                this.querystring = this.query;
                $("#imageContainer").html("");
                $.getJSON( this.url_base, {
                    tags: this.query,
                    format: "json"

                })
                .done(function( data ) {
                    $.each( data.items, function( i, item ) {
                        $( "<img class='w-100 my-3 rounded border'>" ).attr( "src", item.media.m ).appendTo("#imageContainer").wrap("<div class='col-6 col-lg-3'></div>").wrap("<a href='" + item.link + "'></a>");
                    });
                });
            }
        },
        fetchImagesInit: function(){
            this.querystring = this.query;
            $("#imageContainer").html("");
            $.getJSON( this.url_base, {
                tags: this.query,
                format: "json"

            })
            .done(function( data ) {
                $.each( data.items, function( i, item ) {
                    $( "<img class='w-100 my-3 rounded border'>" ).attr( "src", item.media.m ).appendTo("#imageContainer").wrap("<div class='col-6 col-lg-3'></div>").wrap("<a href='" + item.link + "'></a>");
                });
            });
        }
    }
  });
  
    
