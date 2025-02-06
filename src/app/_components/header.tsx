import { NavigationMenuMe } from "./component-navigation-header";

export function HeaderComponent({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <div className="flex flex-col items-center justify-cente py-4 ">
            <NavigationMenuMe >
                {children}
            </NavigationMenuMe>
        </div>
    )
}