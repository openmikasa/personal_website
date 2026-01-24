export interface SkillCategory {
  category: string;
  items: string[];
}

export const skills: SkillCategory[] = [
  {
    category: 'Technical Skills',
    items: [
      'JavaScript',
      'TypeScript',
      'React',
      'Node.js',
      'Python',
      'HTML/CSS',
      'Git',
      'REST APIs',
    ],
  },
  {
    category: 'Design Tools',
    items: [
      'Figma',
      'Adobe Photoshop',
      'Adobe Illustrator',
      'Sketch',
    ],
  },
  {
    category: 'Other Tools',
    items: [
      'VS Code',
      'Notion',
      'Slack',
      'Jira',
      'Docker',
    ],
  },
];
