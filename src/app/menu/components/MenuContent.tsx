interface MenuSectionProps {
    title: string
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

export const MenuSection = ({ title, items }: MenuSectionProps) => {

    return (
        <div className="mt-4">
            <div className="flex items-center justify-between">
                <h4 className="font-black text-xl uppercase">/{title}</h4>
                {title === 'café' && (
                    <div className="flex gap-4 font-bold">
                        <p>Chico</p>
                        <p>Grande</p>
                    </div>
                )}
            </div>

            <div className="flex justify-between items-center gap-4">

                <div>
                    {items.map((item, i) => (
                        <p key={i} className="py-1">{item.titulo}</p>
                    ))}
                </div>


                <div>
                    {
                        title === 'café' ? (
                            items.map((item, i) => (
                                <div key={i} className="flex gap-4">
                                    {item.precio.chico && <p className=" py-1 w-[50px]">${item.precio.chico}</p>}
                                    {item.precio.grande && <p className="py-1 w-[50px]">${item.precio.grande}</p>}
                                </div>
                            ))
                        ) : (
                            items.map((item, i) => (
                                <p key={i} className="py-1">${item.precio.normal}</p>
                            ))
                        )
                    }
                </div>
            </div>
        </div>
    )
}