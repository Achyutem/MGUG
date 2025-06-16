export interface AnimatedCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export interface ModernCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export interface StatsCardProps {
  number: string;
  label: string;
  icon: React.ReactNode;
  delay?: number;
}

export interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay?: number;
}

export interface ProgramCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: number;
}

export interface AnimatedTextProp {
  text: string;
  speed?: number;
  delay?: number;
  loopInterval?: number;
  className?: string;
}
