interface SaltyMenuProps {
    title: string
    items: ItemProps[]
}

interface ItemProps {
    titulo: string
    subtitulo?: string | {
        individual?: string
        porcion?: string
        normal?: string
    }
    precio: {
        individual?: string,
        porcion?: string
        normal?: string
    }
}


export const SaltyMenuContent = ({ title, items }: SaltyMenuProps) => {

    return (
        <div className="mt-4">
            <div className="flex items-center justify-between">
                <h4 className="font-black text-xl uppercase">/{title}</h4>
            </div>

            {
                <div>
                    {
                        items.map(item => (
                            <div key={item.titulo} className="flex justify-between">
                                <div key={item.titulo}>
                                    <p className="py-1">{item.titulo}</p>
                                    {
                                        item.subtitulo && (
                                            typeof item.subtitulo === 'string' ? (
                                                <p className="text-xs pl-2">{item.subtitulo}</p>
                                            ) : (
                                                <div>
                                                    {item.subtitulo?.individual && (<p className="text-xs pl-2">{item.subtitulo?.individual}</p>)}
                                                    {item.subtitulo?.porcion && (<p className="text-xs pl-2">{item.subtitulo?.porcion}</p>)}
                                                </div>
                                            )
                                        )
                                    }
                                </div>

                                <div>
                                    {
                                        item.precio?.normal ? (
                                            <p>${item.precio?.normal}</p>
                                        ) : (
                                            <div className="py-1">
                                                <p>${item.precio?.individual}</p>
                                                <p>${item.precio?.porcion}</p>
                                            </div>
                                        )
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            }

            <p className="text-xs mt-2 text-center">*opc. sin tacc</p>

        </div>
    )
}
