---
applyTo: "**"
---

# AI RULES — Portfolio React (Vite + TypeScript + Tailwind + shadcn)

## Objetivo

Garantir que toda geração de código pela IA siga padrões modernos de arquitetura, tipagem forte e organização modular.

## Stack Obrigatória

- React (Vite)
- TypeScript
- Tailwind CSS
- shadcn/ui
- HTML semântico

## Não utilizar

- Next.js
- Bootstrap
- Material UI
- Chakra UI
- Styled Components
- SCSS
- JavaScript sem tipagem
- jQuery

## Estrutura

src/
app/
assets/
components/
lib/
features/
hooks/
services/
utils/
types/

A tipagem doscomponentes devem ser criadas em arquivos dentro da pasta juntos com os componentes, com o mesmo nome do componente porém de letra minúscula usando a extensão .ts.
Exemplo:

```
button.ts para o componente Button.tsx.

```

Exemplo arquitetura de componente com tipagenm dentro:

```
src/
 components/
  Button/
   Button.tsx
   button.ts

```

## React

- Functional Components
- Props tipadas
- Responsabilidade única por componente
- Componentes pequenos e reutilizávei

## TypeScript

- Proibido any
- tipar props
- tipar estados
- tipar eventos
- tipar retornos de função
- criar types dedicados quando necessário
- usar Generics em TypeScript se realmente há uso de generics diferentes, caso contrário, usar sempre o mesmo tipo ou usar tipos específicos para cada caso
- não tipar funções com tipos em funções, a não ser que seja necessário para a função em questão, ou seja, evitar usar tipos genéricos como T ou U sem necessidade, e preferir tipos específicos para cada caso, a não ser que haja um caso específico onde o uso de generics seja realmente necessário para a função em questão, como por exemplo, uma função de ordenação genérica que pode ordenar diferentes tipos de dados, onde o uso de generics pode ser justificado para permitir flexibilidade na ordenação e tipar funções que nao recebe nada por parametro.

Exemplo:

```
function sortArray<T>(array: T[], compareFn: (a: T, b: T) => number): T[] {
  return array.sort(compareFn);
}

funtion logMessage(): JSX.Element {
  console.log("This is a log message");
}

```

Exemplo esperado:

```
type CardProps = {
  title: string
  description: string
}

export function Card({ title, description }: CardProps) {
  return <div>{title}</div>
}

```

## Tailwind

- priorizar Tailwind sempre
- Mobile first
- Evitar CSS separado sem necessidade
- usar classes reutilizáveis quando repetir muito
- Evitar inline style

Permitido:

```
@apply
component patterns
utility-first

```

Evitar:

- CSS global excessivo
- estilos duplicados

## shadcn

- Priorizar componentes existentes antes de criar novos
- manter acessibilidade
- estender via props e className
- Não alterar base interna do shadcn sem necessidade

## IA NÃO deve

- Criar nova arquitetura
- Instalar libs novas
- Duplicar componentes
- Gerar código não tipado
- evitar props desnecessárias
- evitar prop drilling excessivo
- usar hooks corretamente
- não usar classes React
- evitar any
- tipar props explicitamente

Exemplo esperado:

```
type ButtonProps = {
  label: string
  onClick: () => void
}

export function Button({ label, onClick }: ButtonProps) {
  return <button onClick={onClick}>{label}</button>
}

```

## Boas Práticas Obrigatórias

-código limpo

- nomes descritivos
- separação de responsabilidades
- acessibilidade básica
- responsividade
- performance básica (memo quando necessário)

## O que a IA deve priorizar

- acessibilidade
- responsividade
- performance
- reutilização
- legibilidade
- organização modular

## Padrão de Resposta Esperado da IA

Sempre que possível:

- explicar decisões importantes
- sugerir melhorias opcionais
- manter consistência com o projeto
