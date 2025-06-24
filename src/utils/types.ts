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

export interface CommitteeMember {
  srNo: number;
  name: {
    hindi: string;
    english: string;
  };
  designation: {
    hindi: string;
    english: string;
  };
  role: {
    hindi: string;
    english: string;
  };
  status: {
    hindi: string;
    english: string;
  };
}

export interface Title {
  hindi: string;
  english: string;
}

export interface CommitteeTitles {
  heading: Title;
  headers: {
    srNo: Title;
    nameDesignation: Title;
    role: Title;
    status: Title;
  };
}

export interface SGRCCommitteeTitles {
  heading: Title;
  headers: {
    srNo: Title;
    name: Title;
    designation: Title;
    role: Title;
  };
}

export interface SGRCCommitteeMember {
  srNo: number;
  name: Title;
  designation: Title;
  role: Title;
}

export interface Ombudsperson {
  name: Title;
  designation: Title;
  contact: {
    phone: string;
    email: string;
  };
}

export interface AcademicCouncilMember {
  srNo: number;
  name: {
    hindi: string;
    english: string;
  };
  type: {
    hindi: string;
    english: string;
  };
  role: {
    hindi: string;
    english: string;
  };
}

export interface AcademicCouncilTitles {
  heading: Title;
  headers: {
    srNo: Title;
    name: Title;
    type: Title;
    role: Title;
  };
}

export interface BoardMember {
  srNo: number;
  name: Title;
  designation: Title;
  role: Title;
}

export interface BoardSection {
  heading: Title;
  headers: {
    srNo: Title;
    name: Title;
    designation: Title;
    role: Title;
  };
  members: BoardMember[];
}

export interface BoardOfStudiesData {
  title: Title;
  ayurveda: BoardSection;
  medicalMicrobiology: BoardSection;
  medicalBiochemistry: BoardSection;
  biotechnology: BoardSection;
}
