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
    href: "#",
    image: "/icons/libroIcon.png",
    title: "Gwajeong",
    subtitle: "(Programa)",
    koreanText: "과정",
  },
  {
    id: "Hosinsul",
    href: "#",
    image: "/icons/blancoLanzamiento.png",
    title: "Ho Sin Sul",
    subtitle: "(Defensa personal)",
    koreanText: "호신술",
  },
  {
    id: "figuras",
    href: "#",
    image: "/icons/PatadaIcon.png",
    title: "Hyeong",
    subtitle: "(Figuras sin armas)",
    koreanText: "형",
  },
  {
    id: "figurasConArmas",
    href: "#",
    image: "/icons/nunchakuBlancos.png",
    title: "Mugi Hyeong",
    subtitle: "(Figuras con armas)",
    koreanText: "무기 형",
  },
  {
    id: "basicos",
    href: "#",
    image: "/icons/poomsae_icon-bl.png",
    title: "Gibeom",
    subtitle: "(Básicos sin armas)",
    koreanText: "기본",
  },
  {
    id: "basicosConArmas",
    href: "#",
    image: "/icons/nunhakus-bl.png",
    title: "Mugi Gibeoms",
    subtitle: "(Básicos con armas)",
    koreanText: "무기 기본",
  },
]
