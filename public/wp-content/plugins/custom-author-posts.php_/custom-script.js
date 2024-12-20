jQuery(document).ready(function($) {
    $('#load-more').click(function() {
        var button = $(this);
        var author_id = button.data('author');
        var page = button.data('page');
        $.ajax({
            url: ajaxurl,
            type: 'POST',
            data: {
                action: 'load_more',
                page: page,
                author_id: author_id
            },
            success: function(response) {
                $('#custom-author-posts').append(response);
                button.data('page', page + 1);
            }
        });
    });
});
