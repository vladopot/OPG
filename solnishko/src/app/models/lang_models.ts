interface languages {
    EN: language,
    PL: language
}

interface language {
    header : {
        nav : {
            serv: string,
            about: string,
            careers: string,
            ourWork: string
        },
        search: {
            btn: string
        }
    }
    home: {
        WHAT_YOU_GET: {
            ability_1: {
                tittle: string,
                abiTittle: string,
                paragraph: string
            },
            ability_2: {
                tittle: string,
                abiTittle: string,
                paragraph: string
            },
            ability_3: {
                tittle: string,
                abiTittle: string,
                paragraph: string
            },
            ability_4: {
                tittle: string,
                abiTittle: string,
                paragraph: string
            } 
        },
        WHAT_WE_DO: {
            tittle: string,
            paragraph: string
        }
    },
    footer: {
        pryvacy: string
    }
}