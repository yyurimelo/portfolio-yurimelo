import { Button } from "@/components/ui/button";
import { PoppinsBlack, PoppinsLight, PoppinsMedium } from "@/config/fonts";
import { ChevronDown } from "lucide-react";

export function StartPage() {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">

            <video
                className="absolute bottom-[45%] rotate-210 left-0 w-full h-full object-cover -z-10 transform rotate-180"
                src="/blackhole.mp4"  // Usando o caminho correto a partir da pasta public
                autoPlay
                loop
                muted
            />

            <div className="flex justify-between items-center w-full px-[2%]">
                <div className="flex flex-col items-start justify-center w-2/3"> {/* Ajuste para ocupar 2/3 da largura */}
                    <p className={`${PoppinsLight} text-base`}>Olá, me chamo</p>
                    <h1 className={`${PoppinsBlack.className} text-[#fff] text-8xl font-bold`}>Yuri Melo</h1>
                    <div className="text-start flex flex-row items-center justify-start gap-2">
                        <p className={`${PoppinsLight.className} text-[#fff] border-r px-2`}> {"<"} FULLSTACK DEVELOPER</p>
                        <p className={`${PoppinsLight.className} text-[#fff]`}>UI DESIGNER {"/>"} </p>
                    </div>
                    <div className="mt-2">
                        <Button className="rounded-full">
                            Contato
                        </Button>
                        <Button className="rounded-full ml-2">
                            Saiba mais
                            <ChevronDown />
                        </Button>
                    </div>
                </div>
                <div className="w-1/3"> {/* Ajuste para ocupar 1/3 da largura */}
                    <img src="/icon.png" className="w-full h-auto" />
                </div>
            </div>

        </div >
    );
}
