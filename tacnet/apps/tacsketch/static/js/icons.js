$(document).ready(function () {

    /*
    var holder = $('.bar-element');
    holder.css('display', 'none');

    $('#sidebar').css('display', 'block');


    $('#sketch').click(function(){
        holder.css('display', 'none');
    });

    $('.icon-button').click(function(){

        if (holder.css('display') == 'none') {
            holder.css('display', '');
        }
        else {
            holder.css('display', 'none');
        }
    });
    */

    /* Load icons from API */

    var select_map = $('#select-map');
    var select_icons = $('#icon-picker');

    var toggle_map = $('.select-map');
    var toggle_icons = $('.select-icon');

    /* OpenTabs */
    toggle_map.click(function(){
        select_map.show();
        select_icons.hide();
    });
    toggle_icons.click(function(){
        select_icons.show();
        select_map.hide();
    });

    /* Close when click on canvas */
    var canvas = $('#sketch');
    canvas.click(function(){
        select_icons.hide();
        select_map.hide();
    });

    $.get( "/tacsketch/icons", function( data ) {

        icons = data;

        /* Apply data */

        var icon_holder = $('.icon-holder');
        var select = $('#gamesearch');
        var iconsearch = $('#iconsearch');

        for (var game in icons){

            select.append('<option value="' + game + '">' + game + '</option>');

            for (var icon in icons[game]) {

                var image = icons[game][icon];
                icon_holder.append('<div alt="' + game + '" name="' + image.name + '" class="col-xs-3 icon" onclick="add_icon(\'' + image.image + '\', false)"><img src="' + image.thumbnail + '" class="img-thumbnail"/></div>');

                icon_holder.html("HELLO");

            };
        };



        /* Apply select 2 */
        select.select2({
            placeholder: "Select Game"
        }).on('change', function(){

            iconsearch.val('');

            $( ".icon-holder div" ).each(function( index ) {

                if (select.val() == "") {
                    $(this).css('display', 'block');
                }
                else if ($(this).attr('alt') == select.val()){
                    $(this).css('display', 'block');
                }
                else {
                   $(this).css('display', 'none');
                }

            });


        });

        /* Searches */
        iconsearch.keyup(function(){
            $( ".icon-holder div" ).each(function( index ) {

               if (select.val() == "") {
                    $(this).css('display', 'block');
                }
                else if ($(this).attr('alt') == select.val()){
                    $(this).css('display', 'block');
                }
                else {
                   $(this).css('display', 'none');
                }

                if ($(this).css('display')=="block") {

                    if ($(this).attr('name').toLowerCase().indexOf(iconsearch.val().toLowerCase()) == -1) {
                        $(this).css('display', 'none');
                    }

                }


            });
        });



    });





});
