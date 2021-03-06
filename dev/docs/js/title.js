const titleFn = () => {
    // console.log('mod > title.js');
    let heb1Val = 'http://www.xiongan.gov.cn/xiongan-today/?xats';

    const myDate = new Date();



    let { title, year, month, day, stage } = {
        title: '《今日雄安》',
        year: myDate.getFullYear(),
        month: myDate.getMonth() + 1,
        day: myDate.getDate() + 1,
        stage: localStorage.getItem('hebSageI') || '-',
    };

    $('.title-box').html(`
        <div class="title">${title}</div>
        <div class="year">
            <div contenteditable="true" class="i year-i">${year}</div>年
        </div>
        <div class="month">
            <div contenteditable="true" class="i month-i">${month}</div>月
        </div>
        <div class="day">
            <div contenteditable="true" class="i day-i">${day}</div>日
        </div>
        <div class="stage">第<div contenteditable="true" class="i stage-i">${stage}</div>期
        </div>
        <div class="i add-title" contenteditable="true"></div>
    `);

    // $.ajax({
    //     url: 'http://www.xiongan.gov.cn/bundle/xat-data.js',
    //     dataType: "script",
    //     success() {
    //         const len = xatData.length;
    //         const last = xatData[len - 1];
    //         // console.log('mod > titleFn() data', last);
    //         last.Title.replace(/第(\d*)期/igm, (...opt) => {
    //             $('.stage-i').text(opt[1] - 0 + 1);
    //         });
    //     }
    // });


    $('.stage-i').on('input', function () {
        let stageI = $.trim($('.stage-i').text());
        localStorage.setItem('hebSageI', stageI);

        const $hebImg1 = $('.heb-img-1-1, .heb-img-1');
        const isHeader = $hebImg1.length > 0;

        if (isHeader) {
            console.log('isHeader: ', isHeader);

            const $a = $hebImg1.find('a');
            const $text = $hebImg1.find('.add-href-text');

            const val = `${stageI || ''}`;
            $a.attr('href', heb1Val + val);
            $text.val(val);

            // indexedBDSet();
        }
    });
};

titleFn();