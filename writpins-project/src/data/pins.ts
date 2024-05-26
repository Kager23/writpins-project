export interface Pin {
  id: string;
  title: string;
  text: string;
  source: string;
  tags: string[];
  date: string;
}

export const pins: Pin[] = [
  {
    id: '1',
    title: 'Le temps ne fait rien à l\'affaire',
    text: 'Le temps ne fait rien à l\'affaire, quand on est con, on est con.',
    source: 'Georges Brassens',
    tags: ['humour', 'philosophie'],
    date: '2024-05-25',
  },
  {
    id: '2',
    title: 'Le verbe aimer',
    text: 'Le verbe aimer est difficile à conjuguer : son passé n\'est pas simple, son présent n\'est qu\'indicatif, et son futur est toujours conditionnel.',
    source: 'Georges Brassens',
    tags: ['amour', 'grammaire'],
    date: '2024-05-25',
  },
  {
    id: '3',
    title: 'Le monde appartient',
    text: 'Le monde appartient à ceux dont les ouvriers se lèvent tôt. Les ouvriers, eux, appartiennent à leur patron.',
    source: 'Georges Brassens',
    tags: ['travail', 'société'],
    date: '2024-05-25',
  },
  {
    id: '4',
    title: 'La liberté est un bien précieux',
    text: 'La liberté est un bien précieux, mais elle est aussi une grande responsabilité.',
    source: 'Voltaire',
    tags: ['liberté', 'responsabilité'],
    date: '2024-05-25',
  },
  {
    id: '5',
    title: 'La simplicité est la sophistication suprême',
    text: 'La simplicité est la sophistication suprême.',
    source: 'Leonardo da Vinci',
    tags: ['simplicité', 'sophistication'],
    date: '2024-05-25',
  },
  {
    id: '6',
    title: 'La sagesse commence dans l\'émerveillement',
    text: 'La sagesse commence dans l\'émerveillement.',
    source: 'Socrate',
    tags: ['sagesse', 'émerveillement'],
    date: '2024-05-25',
  },
  {
    id: '7',
    title: 'La véritable générosité',
    text: 'La véritable générosité envers l\'avenir consiste à tout donner au présent.',
    source: 'Albert Camus',
    tags: ['générosité', 'avenir'],
    date: '2024-05-25',
  },
  {
    id: '8',
    title: 'L\'espoir est le rêve de l\'homme éveillé',
    text: 'L\'espoir est le rêve de l\'homme éveillé.',
    source: 'Aristote',
    tags: ['espoir', 'rêve'],
    date: '2024-05-25',
  },
  {
    id: '9',
    title: 'La vie est une fleur, l\'amour en est le miel',
    text: 'La vie est une fleur, l\'amour en est le miel.',
    source: 'Victor Hugo',
    tags: ['vie', 'amour'],
    date: '2024-05-25',
  },
  {
    id: '10',
    title: 'Le bonheur n\'est pas une destination',
    text: 'Le bonheur n\'est pas une destination, mais une façon de voyager.',
    source: 'Margaret Lee Runbeck',
    tags: ['bonheur', 'voyage'],
    date: '2024-05-25',
  },
];
