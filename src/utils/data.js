const alphabet = ['А', 'Б', 'В', 'Г', 'Д', 'Е', 'Ё', 'Ж', 'З', 'И', 'Й', 'К', 'Л', 'М', 'Н', 'О', 'П', 'Р', 'С', 'Т', 'У', 'Ф', 'Х', 'Ц', 'Ч', 'Ш', 'Щ', 'Ъ', 'Ы', 'Ь', 'Э', 'Ю', 'Я'];

// const alphabet = [
//     {
//         id: 1,
//         text: 'А',
//     },
// ]

const wordsTopic = [
    {
        id: 1,
        name: 'животные',
        list: ["ФИЛИН", "БЕЛКА", "КЕНГУРУ", "АЛЛИГАТОР", "ВЫДРА", "ЗАЯЦ", "ИРБИС", "ТЮЛЕНЬ", "ДЕЛЬФИН", "ОЛЕНЬ"],
    },
    {
        id: 2,
        name: 'еда',
        list: ["ПАСТА", "ПИЦЦА", "САЛАТ", "ХЛЕБ", "СЕЛЬДЕРЕЙ", "ЛУК", "МАНДАРИН", "ЯБЛОКО", "ПОМИДОР", "ПЕЛЬМЕНИ"],
    },
    {
        id: 3,
        name: 'растения',
        list: ["РОМАШКА", "КЛЁН", "БЕРЁЗА", "ПОДСНЕЖНИК", "КАКТУС", "ПАЛЬМА", "ФИАЛКА", "КЛЕВЕР", "КЛЮКВА", "НЕЗАБУДКА"],
    },

]


export {
    wordsTopic,
    alphabet
};