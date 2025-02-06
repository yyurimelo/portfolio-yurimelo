import { Poppins } from "next/font/google";

const PoppinsLight = Poppins({ subsets: ["latin"], weight: '200' });
const PoppinsRegular = Poppins({ subsets: ["latin"], weight: '400' });
const PoppinsMedium = Poppins({ subsets: ["latin"], weight: '500' });
const PoppinsBold = Poppins({ subsets: ["latin"], weight: '700' });
const PoppinsBlack = Poppins({ subsets: ["latin"], weight: '900' });


export { PoppinsLight, PoppinsRegular, PoppinsBold, PoppinsBlack, PoppinsMedium };