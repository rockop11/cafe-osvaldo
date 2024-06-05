import type { Metadata } from "next"
import { MenuHeader } from "./components/MenuHeader";
import { MenuSection } from "./components/MenuContent";
import { SaltyMenuContent } from "./components/SaltyMenuContent";
import { LunchMenuContent } from "./components/LunchMenu";
import {
    coffeeList,
    IcedCoffeeList,
    teaList,
    coldList,
    sweetList,
    saltyList,
    lunchMenu,
    combosMenu
} from "@/data/data";

export const metadata: Metadata = {
    title: "Osvaldo Menú",
    description: "Menú cafetería Osvaldo, Cafe, Espresso, Moccha, Té, Capuccino",
};


const MenuPage = () => {
    return (
        <div className="flex justify-center items-center w-full">

            <div className="p-4 w-full md:max-w-[768px]">
                <MenuHeader />
                {/* Divider */}
                <div className="border border-black mt-2" />
                <MenuSection title={coffeeList.titulo} items={coffeeList.items} />
                <MenuSection title={IcedCoffeeList.titulo} items={IcedCoffeeList.items} />
                <MenuSection title={teaList.titulo} items={teaList.items} />
                <MenuSection title={coldList.titulo} items={coldList.items} />
                <MenuSection title={sweetList.titulo} items={sweetList.items} />
                <SaltyMenuContent title={saltyList.titulo} items={saltyList.items} />
                <LunchMenuContent mainTitle={lunchMenu.mainTitle} options={lunchMenu.options} />
                <MenuSection title={combosMenu.titulo} items={combosMenu.items} />
            </div>
        </div>
    )
}

export default MenuPage