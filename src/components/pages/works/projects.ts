import desktopPomo from "@/assets/images/pomodoroImage/desktop.png";
import mobilePomo from "@/assets/images/pomodoroImage/mobile.png";
import diversa21Mensagens from "@/assets/images/Diversa21/Diversa21Mensagens.png";
import diversa21Notificacoes from "@/assets/images/Diversa21/Diversa21Notificações.png";
import diversa21Perfil from "@/assets/images/Diversa21/Diversa21Perfil.png";
import artsGaleria from "@/assets/images/arts/artsGaleria.png";
import artsLogin from "@/assets/images/arts/artsLogin.png";
import artsSafira from "@/assets/images/arts/artsSafira.png";

export type Project = {
  id: string;
  description: string;
  images: string[];
  skills: string[];
  url: string;
  note?: string;
  status?: string;
};

export const projects: Project[] = [
  {
    id: "Diversa21",
    description: `Diversa21 - Plataforma de interação social - 
      Atuação no desenvolvimento full stack de uma plataforma open source, voltada à interação
      entre usuários, com recursos de comunicação, notificações, fóruns e gerenciamento de conteúdo.`,
    images: [
      diversa21Notificacoes,
      diversa21Mensagens,
      diversa21Perfil,
    ],
    skills: [
      "React",
      "JavaScript",
      "Ant Design",
      "LESS",
      "Netuno",
      "APIs",
      "REST",
      "WebSocket",
      "PostgreSQL",
    ],
    url: "https://diversa21.org",
    note: "Acesse a página de login para conhecer a interface inicial. Por se tratar de uma plataforma privada, as áreas internas não estão disponíveis para acesso público.",
  },
  {
    id: "Cesar Art",
    description: `Projeto Arts - Plataforma de portfólio artístico - Desenvolvida para apresentar as obras, a trajetória e 
    os trabalhos de um artista, com uma área administrativa para operações CRUD para gerenciamento de obras com autenticação baseada em JWT para proteger rotas administrativas.`,
    images: [artsGaleria, artsLogin, artsSafira],
    skills: ["React",
      "JavaScript",
      "Node.js",
      "Express",
      "JWT",
      "PostgreSQL",
      "Prisma ORM",
      "Ant Design",
      "LESS",
      "Cloudinary",
      "Git"],
    url: "",
    status: "Status - Em Desenvolvimento",
  },
  {
    id: "pomodoro",
    description:
      "Projeto Pomodoro - Projeto criado para gerenciar o tempo de estudo e tarefas utilizando a técnica Pomodoro. Possui configurações personalizáveis, como tempo de foco e pausa, temas e alarmes.",
    images: [desktopPomo, mobilePomo],
    skills: ["HTML 5", "JavaScript", "TypeScript", "React", "Tailwindcss"],
    url: "https://pomodoro-timer-by-thiago.netlify.app/",
  },
];
