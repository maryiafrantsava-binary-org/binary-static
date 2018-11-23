const Regulation = (() => {
    const onLoad = () => {
        $(() => {
            const $accordion = $('#accordion');
            const hash       = window.location.hash;
            const $element   = hash ? $accordion.find(hash) : undefined;

            $accordion.accordion({
                heightStyle: 'content',
                collapsible: true,
                active     : $element && $element.length && $element.index('h3') !== -1 ? $element.index('h3') : 0,
            });

            if ($element && $element.length) {
                $.scrollTo($element, 500);
            }

            $accordion.on('accordionactivate', () => {
                // if EU passport rights tab is active, call relocateLinks to initialize map coordinates
                if (!$accordion.accordion('option', 'active')) {
                    relocateLinks();
                }
            });
        });

        const coords    = [];
        const $map_area = $('#planetmap').find('area');
        const $selector = $('img[usemap="#planetmap"]');
        $map_area.each(function () {
            coords.push($(this).attr('coords'));
        });
        const relocateLinks = () => {
            $map_area.each(function (index) {
                let c = '';
                const new_width = $selector[0].getBoundingClientRect().width.toFixed(2);
                coords[index].split(',').map((v) => { c += (c ? ',' : '') + ((v * new_width) / 900).toFixed(2); });

                $(this).attr('coords', c);
            });
        };
        $(document).ready(relocateLinks);
        $(window).resize(relocateLinks);
    };

    return {
        onLoad,
    };
})();

module.exports = Regulation;
