document.addEventListener('DOMContentLoaded', () => {

    const Data = {
        questions: [
            {title: 'У вас отличное чувство юмора?', image: 'https://cff2.earth.com/uploads/2018/06/26182427/Narcissistic-people-can-be-more-prone-to-success-study-shows.jpg'},
            {title: 'Другим людям приятно с тобой общаться?', image: 'https://s.mediasole.ru/cache/content/data/images/2043/2043846/original.jpg'},
            {title: 'Считате себя плохим? ', image: 'https://fikiwiki.com/uploads/posts/2022-02/1644876660_2-fikiwiki-com-p-kartinki-pro-egoizm-2.jpg'},
            {title: 'Нравитьтся ли вам находиться в центре внимания? ', image: 'https://i02.fotocdn.net/s120/4152273ce4d0d578/public_pin_l/2749347715.jpg'},
            {title: 'Хотели бы вы манипулировать другими вне своей выгоды?', image: 'https://lawliberty.org/app/uploads/2020/01/Dollarphotoclub_64342868-1-2033x2048.jpg'},
            {title: 'Ощущаете ли вы себя не нужным? ', image: 'https://masterskayaroda.ru/media/files/zhizn_na_potom.jpeg'},
            {title: 'Часто вас пугают вопросы других людей о вашей самооценке?', image: 'https://kartinkin.net/uploads/posts/2021-07/1625833452_4-kartinkin-com-p-smisl-zhizni-oboi-krasivie-4.jpg'},
            {title: 'Много друзей плохо или хорошо?', image: 'https://coolsen.ru/wp-content/uploads/2021/09/image251-3-900x592.jpg'},
            {title: 'Вас пугает неизвестность ?', image: 'https://lawliberty.org/app/uploads/2020/01/Dollarphotoclub_64342868-1-2033x2048.jpg'},
            {title: 'Прошлое тянет вас обратно?', image: 'https://lawliberty.org/app/uploads/2020/01/Dollarphotoclub_64342868-1-2033x2048.jpg'},
            {title: 'Желаете узнать кто вы?', image: 'https://fikiwiki.com/uploads/posts/2022-02/1644876660_2-fikiwiki-com-p-kartinki-pro-egoizm-2.jpg'}
        ],
        setting: {
            button: [
                {lang: { ru: 'Да'}, value: 1 },
                {lang: { ru: 'Нет'}, value: 2},
                {lang: { ru: 'Может быть'}, value: 3}
            ]
        }, 
        result: [
            {min: 0, max: 10, description: { ru: 'ОЙ, что-то пошло не так. Перезагрузите страницу и попробуйте снова.'}},
            {min: 11, max: 20, description: { ru: 'Вы устойчивый тип личности готовы ко всему. Не считай дни, извлекай из них пользу.'}},
            {min: 21, max: 30, description: { ru: 'Эмоционально реагируте на все, боитесь перемен нужно взглянуть во круг. Для любви нужно разумное содержание, как масло для поддержки огня.'}},
            {min: 31, max: 100, description: { ru: 'Не устойчивы к себе и к другим вспыльчивы, не настойчивы, пересмотрите взгляд к себе. Я верю, счастье скоро свалится на меня роялем.'}}
        ]
    }


    class API {
        constructor(){
            this.count = 0,
            this.state = 0,
            this.app = document.getElementById('app')
        }

        start(){
            document.getElementById('start').addEventListener('click', () => {
                this.controller()
            })
        }

        controller(){
            if(this.state < Data.questions.length) {
                this.render_template('QUEST')
            } else {
                this.render_template('FINALLY')
            }
        }

        render_template(state_key){
            if(state_key === 'QUEST') {
                this.app.innerHTML = `
                <section style="height: 100vh ;" class="d-flex align-items-center">
                <div class="container-md shadow-lg p-3 bg-body rounded" id="app" style="height: fit-content; max-width: 560px ;">
                        <div><img src="${Data.questions[this.state].image}" class="img-thumbnail" alt="..." style="max-height: 320px ; margin: 0 auto; display: flex ;"></div>
                    <div class="title m-4 d-flex justify-content-center">
                        <h2>${Data.questions[this.state].title}</h2>
                    </div>
                    <div class="button-box" id="button_box">
                        <button type="button" class="btn btn-light w-100 mb-3 p-3" value='1'>Да</button>
                        <button type="button" class="btn btn-light w-100 mb-3 p-3" value='2'>Нет</button>
                        <button type="button" class="btn btn-light w-100 mb-3 p-3" value='3'>Не знаю</button>
                    </div>
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" aria-label="Basic example" style="width: ${(this.state / Data.questions.length) * 100}%" aria-valuenow="${this.state}" aria-valuemin="0" aria-valuemax="${Data.questions.length}"></div>
                    </div>
                </div>
                </section>
                `

                let button_box = document.getElementById('button_box')
                    button_box.querySelectorAll('button').forEach(button => {
                        button.addEventListener('click', () => {

                            this.count = this.count + Number(button.value);
                            this.state++;

                            this.controller()
                            
                        })
                    })
            } else {
                this.app.innerHTML = `
                <section style="height: 100vh ;" class="d-flex align-items-center">
                    <div class="container-md shadow-lg p-3 bg-body rounded" id="app" style="height: fit-content; max-width: 560px ;">
                        <div style="border-radius: 100% ; background-color: #f8f9fa; width: fit-content; margin: 0 auto ;">
                            <img src="https://img.icons8.com/bubbles/200/000000/emoji-smiling-face.png"/>
                        </div>
                        <div class="title m-4 d-flex justify-content-center">
                            <h3>Молодец, твой результат:</h3>
                        </div>
                        <div class="description m-4 d-flex justify-content-center">
                            <h5 id="result"></h5>
                        </div>
                    </div>
                </section>
                `
                let i = 0 ;
                let res = '';

                Data.result.forEach(elem => {
                    if(this.count >= elem.min || !this.count > elem.max) {
                        res = elem.description.ru
                    }
                })


                console.log(this.count)

                document.getElementById('result').append(res)

                
            }
        }
    }

    new API().start()

    



})