/**
 Created by www.it666.com
 */

$(function () {
    // 1.监听屏幕的大小，显示对应的图片
    $(window).on('resize', function () {
        // 1.1 获取屏幕的大小
        var clientW = $(window).width();
        // console.log(clientW);

        // 1.2 设置临界值
        var isShowBigImg = clientW >= 790; // true false

        // 1.3 获取所有的item
        var $allItems = $('#lk_carousel .item');
        // console.log($allItems);

        // 1.4 遍历
        $allItems.each(function (index, item) {
            var $item = $(item);

            // 1.4.1 取出该设置的图片路径
            var src = isShowBigImg ? $item.data('lg-img') : $item.data('sm-img');
            // console.log(src);

            var imgUrl = 'url("' + src + '")';
            // console.log(imgUrl);

            // 1.4.2 设置背景
            $item.css({
                backgroundImage: imgUrl
            });

            // 1.4.3 设置小图
            if (!isShowBigImg) {
                var $img = '<img src="' + src + '">';
                $item.empty().append($img);
            } else {
                $item.empty();
            }

        })
    });

    // 2. 动态设置宽度
    $(window).on('resize', function () {
        // 2.1 获取ul标签
        var $ul = $('#lk_product .nav');

        // 2.2 获取ul中的所有子元素
        var $allLis = $('[role="presentation"]', $ul);

        // 2.3 遍历
        var totalW = 0;
        $allLis.each(function (index, item) {
            // 2.3.1 获取每一个item的宽度
            totalW += $(item).width();
        });

        // 2.4 获取父标签的宽度
        var parentW = $ul.parent().width();

        // 2.5 比较
        if(totalW >= parentW){ // 设置宽度
            $ul.css({
                width: totalW + 'px'
            })
        }else {
            $ul.removeAttr('style');
        }


    });

    $(window).trigger('resize');

    $('[data-toggle="tooltip"]').tooltip();


    var allLis = $('#lk_nav li');
    $(allLis[0]).on("click", function () {
        $("html,body").animate({scrollTop: $("#lk_about").offset().top}, 1000);
    });
    $(allLis[1]).on("click", function () {
        $("html,body").animate({scrollTop: $("#lk_product").offset().top}, 1000);
    });
    $(allLis[2]).on("click", function () {
        $("html,body").animate({scrollTop: $("#lk_hot").offset().top}, 1000);
    });
    $(allLis[3]).on("click", function () {
        $("html,body").animate({scrollTop: $("#lk_hot").offset().top}, 1000);
    });
    $(allLis[4]).on("click", function () {
        $("html,body").animate({scrollTop: $("#lk_hot").offset().top}, 1000);
    });
    $(allLis[5]).on("click", function () {
        $("html,body").animate({scrollTop: $("#lk_partner").offset().top}, 1000);
    });

});
