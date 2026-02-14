export type Option = {
  id: string
  href: string
  image: string
  title: string
  subtitle: string
  koreanText: string
}

export const options: Option[] = [
  {
    id: "program",
    href: "/programa",
    image: "/icons/programa.png",
    title: "Gwajeong",
    subtitle: "(Programa)",
    koreanText: "과정",
  },
  {
    id: "Hosinsul",
    href: "/defensa-personal",
    image: "/icons/defensa-personal.png",
    title: "Ho Sin Sul",
    subtitle: "(Defensa personal)",
    koreanText: "호신술",
  },
  {
    id: "figuras",
    href: "/hyeong",
    image: "/icons/figuras-sin-armas.png",
    title: "Hyeong",
    subtitle: "(Figuras sin armas)",
    koreanText: "형",
  },
  {
    id: "figurasConArmas",
    href: "/mugi-hyeong",
    image: "/icons/figuras-con-armas.png",
    title: "Mugi Hyeong",
    subtitle: "(Figuras con armas)",
    koreanText: "무기 형",
  },
  {
    id: "basicos",
    href: "/gibeom",
    image: "/icons/basicos-sin-armas.png",
    title: "Gibeom",
    subtitle: "(Básicos sin armas)",
    koreanText: "기본",
  },
  {
    id: "basicosConArmas",
    href: "/mugi-gibeom",
    image: "/icons/basicos-con-armas.png",
    title: "Mugi Gibeoms",
    subtitle: "(Básicos con armas)",
    koreanText: "무기 기본",
  },
]

