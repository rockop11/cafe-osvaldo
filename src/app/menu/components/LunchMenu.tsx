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

export const LunchMenuContent = ({ mainTitle, options }: LunchMenuProps) => {

    return (
        <div className="mt-6">
            <h3 className="font-black text-2xl uppercase mb-2">/{mainTitle}</h3>
            {
                options.map(option => (
                    <div key={option.titulo} className="mb-2">
                        <h4 className="font-black text-xl uppercase">/{option.titulo}</h4>
                        {
                            option.items.map(item => (
                                <div key={item.titulo} className="flex justify-between">
                                    <div>
                                        <p className="py-1">{item.titulo}</p>
                                        {item.descripcion &&
                                            (<p className="text-xs pl-2 w-[280px]">{item.descripcion}</p>)}
                                    </div>

                                    <div>
                                        <p className="py-1">${item.precio}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                ))
            }
        </div>
    )
}
