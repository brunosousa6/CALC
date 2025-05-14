
import { Card, CardContent } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";

export default function CalcHomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    { title: "CALC Automação", content: "Especialistas em automação, comissionamento e projeto elétrico industrial." },
    { title: "Soluções e Serviços", content: "Projetos inteligentes com foco em eficiência, segurança e inovação." },
    { title: "Realizações de Impacto", content: "Cases de sucesso em setores como alimentos, portos, automotivo e saneamento." },
    { title: "Fale Conosco", content: "Entre em contato com nossa equipe técnica e transforme seu projeto." }
  ];

  return (<div className="font-sans text-white bg-blue-900">CALC Site Placeholder</div>);
}
