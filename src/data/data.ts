interface ListProps {
    titulo: string
    items: ItemProps[]
}

interface ItemProps {
    titulo: string
    precio: {
        chico?: string,
        grande?: string
        normal?: string
    }
}

interface SaltyMenuProps {
    titulo: string
    items: SaltyItemsProps[]
}

interface SaltyItemsProps {
    titulo: string,
    subtitulo?: string | {
        individual?: string
        porcion?: string
        normal?: string
    }
    precio: {
        normal?: string
        individual?: string
        porcion?: string
    }
}

export const coffeeList: ListProps = {
    titulo: "café",
    items: [
        {
            titulo: "Espresso",
            precio: { chico: '2100' }
        },
        {
            titulo: "Cortado",
            precio: { chico: '2300' }
        },
        {
            titulo: 'Doppio',
            precio: { chico: '3000' }
        },
        {
            titulo: "Café + crema",
            precio: { chico: '2900' }
        },
        {
            titulo: "Magic",
            precio: { chico: '2900' }
        },
        {
            titulo: "Lágrima",
            precio: { chico: '2400', grande: '3000' }
        },
        {
            titulo: "Macchiatto",
            precio: { chico: '2500', grande: '2800' }
        },
        {
            titulo: 'Caramel Macchiatto',
            precio: { chico: '3000', grande: '3300' }
        },
        {
            titulo: "Americano",
            precio: { chico: '2200', grande: '2600' }
        },
        {
            titulo: 'Cappuccino',
            precio: { chico: '2800', grande: '3200' }
        },
        {
            titulo: 'Flat White',
            precio: { chico: '3000', grande: '3300' }
        },
        {
            titulo: 'Latte',
            precio: { chico: '2900', grande: '3200' }
        },
        {
            titulo: 'Latte Vainilla',
            precio: { chico: '3100', grande: '3400' }
        },
        {
            titulo: 'Mocca',
            precio: { chico: '3100', grande: '3400' }
        },
        {
            titulo: 'Osvaldo',
            precio: { chico: '3000', grande: '3300' }
        },
        {
            titulo: 'Chocolatada',
            precio: { chico: '-', grande: '2600' }
        }
    ],
}

export const IcedCoffeeList: ListProps = {
    titulo: 'cafe frío',
    items: [
        { titulo: "Iced americano | Flat white | Capu | Latte", precio: { normal: '2900' } },
        { titulo: "Iced caramel macchiatto", precio: { normal: '3200' } },
        { titulo: "Espresso soda", precio: { normal: '3800' } },
        { titulo: "Espresso tónica", precio: { normal: '3800' } },
        { titulo: "Espresso naranja", precio: { normal: '3800' } },
        { titulo: "Cold Brew", precio: { normal: '3800' } },
        { titulo: "Affogato (espresso + bocha helado)", precio: { normal: '3800' } }
    ]
}

export const teaList: ListProps = {
    titulo: 'té',
    items: [
        { titulo: "Matcha Latte", precio: { normal: '3200' } },
        { titulo: "Chai Latte", precio: { normal: '2800' } },
        { titulo: "Hibiscus", precio: { normal: '2400' } },
        { titulo: "Berries", precio: { normal: '2300' } },
        { titulo: "Negro", precio: { normal: '2200' } },
    ]
}

export const coldList: ListProps = {
    titulo: 'frìos',
    items: [
        { titulo: "Limonada (menta + jengibre)", precio: { normal: '2300' } },
        { titulo: "Limonada Hibiscus", precio: { normal: '2500' } },
        { titulo: "Pomelada", precio: { normal: '2300' } },
        { titulo: "Iced Tea (té negro+limón)", precio: { normal: '2300' } },
        { titulo: "Smoothie", precio: { normal: '3300' } },
        { titulo: "Kombucha (jengibre/pomelo/suico)", precio: { normal: '3700' } },
        { titulo: "Jugo de Naranja", precio: { normal: '2300' } },
        { titulo: "Agua (con o sin gas)", precio: { normal: '1500' } },
    ]
}

export const sweetList: ListProps = {
    titulo: 'dulce',
    items: [
        { titulo: "Medialuna", precio: { normal: '950' } },
        { titulo: "Medialuna + jamón + queso", precio: { normal: '2100' } },
        { titulo: "Medialuna prensada + queso ahumado", precio: { normal: '2500' } },
        { titulo: "Croissant", precio: { normal: '1400' } },
        { titulo: "Roll de canela ", precio: { normal: '2100' } },
        { titulo: "Palmerón", precio: { normal: '2100' } },
        { titulo: "Alfajor choco + dulce de leche", precio: { normal: '2200' } },
        { titulo: "Galletón chips choco", precio: { normal: '1900' } },
        { titulo: "Galletón avena", precio: { normal: '1900' } },
        { titulo: "Budín de zanahoria -vegano-", precio: { normal: '3000' } },
    ]
}

export const saltyList: SaltyMenuProps = {
    titulo: 'salado',
    items: [
        { titulo: 'Chipá*', precio: { normal: '2200' } },
        {
            titulo: `Tostadas + queso + mermelada`,
            subtitulo: { individual: 'individual (1)', porcion: 'porción (3)' },
            precio: { individual: '2200', porcion: '4200' }
        },
        { titulo: 'Tostada + palta + huevo + tomate*', precio: { normal: '5400' } },
        {
            titulo: 'Huevos Revueltos*',
            subtitulo: '+tostón de pan',
            precio: { normal: '3200' }
        },
        {
            titulo: 'Prensadito*',
            subtitulo: 'lomito + queso (opc. tomate)',
            precio: { normal: '4000' }
        },
        {
            titulo: 'Croissant relleno',
            subtitulo: "jamón + queso + huevo revuelto",
            precio: { normal: '3300' }
        },
        {
            titulo: 'Chipandwich*',
            subtitulo: 'lomito + queso (opc.tomate)',
            precio: { normal: '4900' }
        },
        {
            titulo: 'Fosforito relleno',
            subtitulo: 'jamón + queso',
            precio: { normal: '3000' }
        }
    ]
}

interface LunchMenuProps {
    mainTitle: string
    options: OptionsMenuProps[]
}

interface OptionsMenuProps {
    titulo: string
    items: ItemsOptionsProps[]
}

interface ItemsOptionsProps {
    titulo: string
    descripcion?: string
    precio: string
}

export const lunchMenu: LunchMenuProps = {
    mainTitle: 'Mediodia',
    options: [
        {
            titulo: 'Wraps',
            items: [
                {
                    titulo: 'Veggie',
                    descripcion: 'zanahoria + zucchini + choclo + cebolla morada + queso crema (masa integral)',
                    precio: '4600'
                },
                {
                    titulo: 'Del dia',
                    descripcion: 'consultar',
                    precio: '4600'
                }
            ],
        },
        {
            titulo: 'Tartas',
            items: [
                {
                    titulo: 'Pollo + Puerro',
                    precio: '4500'
                },
                {
                    titulo: 'Brócoli (masa integral)',
                    precio: '4500'
                },
                {
                    titulo: 'Del día',
                    precio: '4500'
                }
            ]
        },
        {
            titulo: 'Omelettes',
            items: [
                {
                    titulo: 'Queso',
                    precio: '4300'
                },
                {
                    titulo: 'Queso + Jamón',
                    precio: '4600'
                },
                {
                    titulo: 'Queso + Jamon + Tomate',
                    precio: '4800'
                }
            ]
        },
        {
            titulo: 'Baguettines',
            items: [
                {
                    titulo: 'Lomito + Tomate',
                    precio: '4200'
                },
                {
                    titulo: 'Jamón + Queso',
                    precio: '4200'
                }
            ]
        }
    ]
}

export const combosMenu: ListProps = {
    titulo: 'Combos',
    items: [
        {
            titulo: 'Café chico + 1 medialuna',
            precio: { normal: '2900' }
        },
        {
            titulo: 'Café mediano + 2 medialunas',
            precio: { normal: '4100' }
        },
        {
            titulo: 'Café mediano + 1 tostada',
            precio: { normal: '4300' }
        },
        {
            titulo: 'Jugo de naranja + 1 prensadito',
            precio: { normal: '5600' }
        }
    ]
}


















