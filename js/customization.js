const TAGS = ['p', 'a', 'li', 'ul', 'div', 'img', 'footer', 'span', 'dl', 'dt', 'h1', 'h2', 'h3', 'nav', 'section', 'header', 'button', 'id', 'form', 'svg'];

const TAGS_DATA = TAGS.reduce((accum, tag) => {

    const allSingleTag = document.querySelectorAll(tag);
    const temp = {};
    (allSingleTag) && [...allSingleTag].forEach(item => {

        let tempClass = (item.classList) ? item.classList : '';
        let tempID = (item.getAttribute('id')) ? item.getAttribute('id') : '';

        temp[tag] = {
            ...temp[tag],
            'class': `${ (temp[tag]?.class) ? temp[tag].class : ''} ${tempClass}`.trim(),
            'id': `${ (temp[tag]?.id) ? temp[tag].id : '' } ${tempID}`.trim(),
        };
    });

    return {...accum, ...temp }
}, {});

console.log('TAGS_DATA', TAGS_DATA);