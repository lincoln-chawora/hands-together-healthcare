import '../styles/main.css';

import $ from "cash-dom";

$(function () {
    $('[data-card]').each(
        function eachCard() {
            // https://inclusive-components.design/cards/
            const $link = $(this).find('a').first();

            if ($link.length === 0 || $(this).data().cardClickable === false) {
                return;
            }

            $(this).css('cursor', 'pointer');

            let down;
            let up;

            // eslint-disable-next-line func-names
            $(this).on('mousedown', function () {
                down = +new Date();
            });

            // eslint-disable-next-line func-names
            $(this).on('mouseup', function (e) {
                // Bail if this was a middle or secondary mouse button event.
                if (e.which !== 1) {
                    return;
                }

                // Return if the actual link is being clicked on.
                if (e.target.tagName.toLowerCase() === 'a' || e.target === $link.get(0)) {
                    return;
                }

                up = +new Date();
                if (up - down < 200) {
                    // Use the time difference between mouse down and mouse up to
                    // guess whether the user is clicking, or trying to select text.
                    // Only redirect if it looks like a click not text selection.
                    window.location.href = $link.attr('href');
                }
            });

            // If we are inside a carousel we can't be as smart as above as
            // Swiper.js blocks mousedown events :(
            if ($(this).parents('[data-carousel]').length > 0) {
                $(this).click(() => {
                    window.location.href = $link.attr('href');
                });
            }
        },
    );
});
