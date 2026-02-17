
export interface Step {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface LeadResponse {
  success: boolean;
  message: string;
}
