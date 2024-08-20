import { Node, Edge } from 'react-flow-renderer';

interface CareerStage {
  id: string;
  type?: string;
  data: {
    label: string;
    description: string;
    skills: string[];
    experience: string;
    education: string[];
    salary: string;
  };
  position: { x: number; y: number };
}

export const initialNodes: Node<CareerStage['data']>[] = [
  {
    id: '1',
    type: 'input',
    data: {
      label: 'Entry-Level Regulatory Associate',
      description: 'Assists in regulatory submissions and maintains regulatory documentation.',
      skills: ['Basic understanding of FDA regulations', 'Attention to detail', 'Communication skills'],
      experience: '0-2 years',
      education: ['Bachelor\'s degree in Life Sciences or related field'],
      salary: '$50,000 - $70,000'
    },
    position: { x: 250, y: 0 },
  },
  {
    id: '2',
    data: {
      label: 'Regulatory Specialist',
      description: 'Prepares regulatory submissions and interacts with regulatory agencies.',
      skills: ['Knowledge of regulatory requirements', 'Project management', 'Technical writing'],
      experience: '2-5 years',
      education: ['Bachelor\'s degree in Life Sciences', 'RAC certification (optional)'],
      salary: '$70,000 - $90,000'
    },
    position: { x: 100, y: 100 },
  },
  {
    id: '3',
    data: {
      label: 'Senior Regulatory Specialist',
      description: 'Leads regulatory strategies for product development and submissions.',
      skills: ['In-depth knowledge of regulations', 'Leadership', 'Cross-functional collaboration'],
      experience: '5-8 years',
      education: ['Master\'s degree preferred', 'RAC certification'],
      salary: '$90,000 - $120,000'
    },
    position: { x: 400, y: 100 },
  },
  {
    id: '4',
    data: {
      label: 'Regulatory Affairs Manager',
      description: 'Oversees regulatory strategies and manages a team of regulatory professionals.',
      skills: ['Strategic planning', 'Team management', 'Negotiation skills'],
      experience: '8-12 years',
      education: ['Master\'s degree', 'RAC certification'],
      salary: '$120,000 - $150,000'
    },
    position: { x: 250, y: 200 },
  },
  {
    id: '5',
    data: {
      label: 'Regulatory Affairs Director',
      description: 'Directs overall regulatory strategy for the organization.',
      skills: ['Executive leadership', 'Global regulatory knowledge', 'Business acumen'],
      experience: '12-15 years',
      education: ['Master\'s or Doctoral degree', 'RAC certification'],
      salary: '$150,000 - $200,000'
    },
    position: { x: 250, y: 300 },
  },
  {
    id: '6',
    data: {
      label: 'VP of Regulatory Affairs',
      description: 'Leads regulatory affairs at the executive level, shaping company strategy.',
      skills: ['Executive leadership', 'Strategic vision', 'Stakeholder management'],
      experience: '15+ years',
      education: ['Master\'s or Doctoral degree', 'RAC certification'],
      salary: '$200,000+'
    },
    position: { x: 250, y: 400 },
  },
  {
    id: '7',
    data: {
      label: 'Regulatory CMC Specialist',
      description: 'Focuses on Chemistry, Manufacturing, and Controls (CMC) regulatory affairs.',
      skills: ['CMC knowledge', 'Technical writing', 'Analytical skills'],
      experience: '3-6 years',
      education: ['Bachelor\'s or Master\'s in Chemistry or related field'],
      salary: '$80,000 - $110,000'
    },
    position: { x: 0, y: 200 },
  },
  {
    id: '8',
    data: {
      label: 'Regulatory Intelligence Analyst',
      description: 'Gathers and analyzes regulatory intelligence to inform strategy.',
      skills: ['Research skills', 'Analytical thinking', 'Knowledge management'],
      experience: '3-6 years',
      education: ['Bachelor\'s degree in Life Sciences or related field'],
      salary: '$75,000 - $100,000'
    },
    position: { x: 500, y: 200 },
  },
  {
    id: '9',
    data: {
      label: 'Global Regulatory Affairs Specialist',
      description: 'Manages regulatory affairs across multiple international markets.',
      skills: ['Global regulatory knowledge', 'Cultural awareness', 'Strategic thinking'],
      experience: '5-8 years',
      education: ['Master\'s degree', 'RAC certification'],
      salary: '$100,000 - $130,000'
    },
    position: { x: 0, y: 300 },
  },
  {
    id: '10',
    data: {
      label: 'Regulatory Compliance Manager',
      description: 'Ensures compliance with regulatory requirements across the organization.',
      skills: ['Compliance expertise', 'Auditing', 'Risk management'],
      experience: '8-12 years',
      education: ['Master\'s degree', 'RAC certification'],
      salary: '$110,000 - $140,000'
    },
    position: { x: 500, y: 300 },
  },
  {
    id: '11',
    data: {
      label: 'Regulatory Affairs Consultant',
      description: 'Provides expert regulatory advice to various clients or departments.',
      skills: ['Consulting skills', 'Project management', 'Adaptability'],
      experience: '10+ years',
      education: ['Master\'s degree', 'RAC certification'],
      salary: 'Variable'
    },
    position: { x: -200, y: 350 },
  },
  {
    id: '12',
    data: {
      label: 'Regulatory Medical Writing Specialist',
      description: 'Focuses on preparing regulatory documents and medical communications.',
      skills: ['Medical writing', 'Scientific knowledge', 'Attention to detail'],
      experience: '3-6 years',
      education: ['Bachelor\'s or Master\'s in Life Sciences or Medical Writing'],
      salary: '$70,000 - $100,000'
    },
    position: { x: 700, y: 350 },
  },
  {
    id: '13',
    data: {
      label: 'Regulatory Policy Specialist',
      description: 'Develops and interprets regulatory policies for the organization.',
      skills: ['Policy analysis', 'Regulatory interpretation', 'Strategic thinking'],
      experience: '5-8 years',
      education: ['Master\'s degree in Regulatory Affairs or related field'],
      salary: '$90,000 - $120,000'
    },
    position: { x: -200, y: 150 },
  },
  {
    id: '14',
    data: {
      label: 'Regulatory Affairs Project Manager',
      description: 'Manages complex regulatory projects and submissions.',
      skills: ['Project management', 'Leadership', 'Regulatory knowledge'],
      experience: '5-8 years',
      education: ['Bachelor\'s or Master\'s degree', 'PMP certification'],
      salary: '$100,000 - $130,000'
    },
    position: { x: 700, y: 150 },
  },
  {
    id: '15',
    data: {
      label: 'Associate Director of Regulatory Affairs',
      description: 'Assists in directing regulatory strategies and managing teams.',
      skills: ['Team leadership', 'Strategic planning', 'Regulatory expertise'],
      experience: '10-15 years',
      education: ['Master\'s degree', 'RAC certification'],
      salary: '$130,000 - $180,000'
    },
    position: { x: 100, y: 400 },
  },
  {
    id: '16',
    data: {
      label: 'Regulatory Information Systems Specialist',
      description: 'Manages regulatory information systems and databases.',
      skills: ['Database management', 'IT skills', 'Regulatory knowledge'],
      experience: '3-6 years',
      education: ['Bachelor\'s in IT or Life Sciences'],
      salary: '$75,000 - $100,000'
    },
    position: { x: 400, y: 400 },
  },
  {
    id: '17',
    data: {
      label: 'Regulatory Labeling Specialist',
      description: 'Focuses on regulatory aspects of product labeling and packaging.',
      skills: ['Labeling regulations', 'Attention to detail', 'Cross-functional collaboration'],
      experience: '3-6 years',
      education: ['Bachelor\'s degree in Life Sciences or related field'],
      salary: '$70,000 - $95,000'
    },
    position: { x: -100, y: 450 },
  },
  {
    id: '18',
    data: {
      label: 'Regulatory Affairs Scientist',
      description: 'Provides scientific expertise for regulatory strategies and submissions.',
      skills: ['Scientific expertise', 'Regulatory knowledge', 'Technical writing'],
      experience: '5-8 years',
      education: ['Ph.D. in Life Sciences'],
      salary: '$100,000 - $130,000'
    },
    position: { x: 600, y: 450 },
  },
  {
    id: '19',
    data: {
      label: 'Regulatory Quality Assurance Specialist',
      description: 'Ensures quality standards in regulatory processes and submissions.',
      skills: ['Quality assurance', 'Regulatory knowledge', 'Attention to detail'],
      experience: '3-6 years',
      education: ['Bachelor\'s degree in Life Sciences or related field'],
      salary: '$75,000 - $100,000'
    },
    position: { x: -100, y: 50 },
  },
  {
    id: '20',
    data: {
      label: 'Chief Regulatory Officer',
      description: 'Leads regulatory strategy at the highest level of the organization.',
      skills: ['Executive leadership', 'Strategic vision', 'Regulatory expertise'],
      experience: '20+ years',
      education: ['Master\'s or Doctoral degree', 'RAC certification'],
      salary: '$250,000+'
    },
    position: { x: 250, y: 500 },
  },
];

export const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e2-4', source: '2', target: '4' },
  { id: 'e3-4', source: '3', target: '4' },
  { id: 'e4-5', source: '4', target: '5' },
  { id: 'e5-6', source: '5', target: '6' },
  { id: 'e2-7', source: '2', target: '7' },
  { id: 'e3-8', source: '3', target: '8' },
  { id: 'e4-9', source: '4', target: '9' },
  { id: 'e4-10', source: '4', target: '10' },
  { id: 'e5-11', source: '5', target: '11' },
  { id: 'e3-12', source: '3', target: '12' },
  { id: 'e4-13', source: '4', target: '13' },
  { id: 'e4-14', source: '4', target: '14' },
  { id: 'e5-15', source: '5', target: '15' },
  { id: 'e4-16', source: '4', target: '16' },
  { id: 'e3-17', source: '3', target: '17' },
  { id: 'e4-18', source: '4', target: '18' },
  { id: 'e2-19', source: '2', target: '19' },
  { id: 'e6-20', source: '6', target: '20' },
];