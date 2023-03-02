
interface Presets {
    [key: string]: string
}
const presets: Presets = {
    "Default": "X,V,F",
    "ICSE(UBA)": "X,V,F,IF,II,TD,GE,RP,TE,POP,DD,P,RA,RH,B,N"
}

export { presets, type Presets }

